import apiConfig from "@/configs/apiConfig";
import axios from "axios";
import * as cheerio from "cheerio";
class MediafireDownloader {
  constructor() {
    this.apiBase = `https://${apiConfig.DOMAIN_URL}/api/tools/web/html/v12?url=`;
    this.userAgent = "Mozilla/5.0 (Linux; Android 12; SM-G996B Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/113.0.5672.162 Mobile Safari/537.36";
  }
  b64(s = "") {
    try {
      if (typeof Buffer !== "undefined") {
        return Buffer.from(s, "base64").toString();
      } else if (typeof atob !== "undefined") {
        return atob(s);
      }
      return "";
    } catch (e) {
      console.error("Base64 decoding error:", e.message);
      return "";
    }
  }
  async fetchPage(url) {
    try {
      const response = await axios.get(`${this.apiBase}${encodeURIComponent(url)}`, {
        headers: {
          "User-Agent": this.userAgent
        }
      });
      if (response.status !== 200) {
        throw new Error(`Gagal mengambil halaman. Status kode: ${response.status}`);
      }
      return cheerio.load(response.data);
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil halaman:", error);
      throw new Error("Gagal mengambil halaman.");
    }
  }
  async fetchPageFolder(url) {
    try {
      const response = await axios.get(url, {
        headers: {
          "User-Agent": this.userAgent
        }
      });
      if (response.status !== 200) {
        throw new Error(`Gagal mengambil halaman folder. Status kode: ${response.status}`);
      }
      return cheerio.load(response.data);
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil halaman folder:", error);
      throw new Error("Gagal mengambil halaman folder.");
    }
  }
  isFolder(url) {
    return /mediafire\.com\/folder\/([^/?]+)/.test(url);
  }
  async waitForElement($, selector, timeout = 12e4) {
    const start = Date.now();
    while (Date.now() - start < timeout) {
      if ($(selector).length) return true;
      await new Promise(res => setTimeout(res, 2e3));
    }
    return false;
  }
  async getFolderContents($) {
    const ready = await this.waitForElement($, "li.row_container");
    if (!ready) {
      return {
        error: "Timeout mendapatkan daftar folder/file."
      };
    }
    const results = [];
    $("li.row_container").each((_, el) => {
      const elmt = $(el);
      const name = elmt.find(".item-name").text().trim() || "Unknown Name";
      const relativeLink = elmt.find(".foldername, .filetype_column").attr("href");
      const link = relativeLink ? `https://www.mediafire.com${relativeLink}` : "Unknown Link";
      const size = elmt.find(".file_maindetails .size").text().trim() || "Unknown Size";
      const date = elmt.find(".file_maindetails .created").text().trim() || "Unknown Date";
      const key = elmt.attr("data-key") || "Unknown Key";
      const type = elmt.hasClass("folder") ? "folder" : "file";
      if (link && link !== "Unknown Link") {
        results.push({
          name: name,
          link: link,
          key: key,
          type: type,
          size: size,
          date: date
        });
      }
    });
    return results.length ? results : {
      empty: true,
      message: "Tidak ada file/folder ditemukan."
    };
  }
  async getFileDownloadLink(url) {
    try {
      let $, btn, i = 0;
      const maxRetries = 15;
      const retryDelay = 3e3;
      while (!btn?.attr("data-scrambled-url") && i++ < maxRetries) {
        $ = await this.fetchPage(url);
        btn = $("a#downloadButton[data-scrambled-url]");
        if (btn.length) break;
        await new Promise(r => setTimeout(r, retryDelay));
      }
      if (!btn?.length) {
        console.error("Failed to find download button with data-scrambled-url after multiple attempts.");
        return null;
      }
      const name = $(".promoDownloadName .dl-btn-label").attr("title") || $(".promoDownloadName .dl-btn-label").text().trim() || "Unknown File";
      const size = btn.text().match(/\((.*?)\)/)?.[1]?.trim() || "Unknown Size";
      const pageTitle = $("title").text().trim();
      const headText = $(".header h1.logo a").text().trim();
      const downloadUrl = this.b64(btn.attr("data-scrambled-url"));
      const keyMatch = url.match(/\/([^/]+)\/[^/]+$/) || downloadUrl.match(/\/([^/]+)\/[^/]+$/);
      const key = keyMatch?.[1] || "Unknown Key";
      return {
        name: name,
        size: size,
        url: url,
        download: downloadUrl,
        title: pageTitle,
        head: headText,
        key: key,
        type: "file"
      };
    } catch (e) {
      console.error("MFDownloader getFileDownloadLink error:", e.message);
      return null;
    }
  }
  async download(url) {
    try {
      if (this.isFolder(url)) {
        const $ = await this.fetchPageFolder(url);
        return await this.getFolderContents($);
      } else {
        return await this.getFileDownloadLink(url);
      }
    } catch (error) {
      return {
        error: error.message
      };
    }
  }
}
export default async function handler(req, res) {
  const {
    url
  } = req.method === "GET" ? req.query : req.body;
  if (!url) {
    return res.status(400).json({
      error: "URL is required"
    });
  }
  try {
    const downloader = new MediafireDownloader();
    const result = await downloader.download(url);
    if (result && !result.error) {
      return res.status(200).json({
        result: result
      });
    } else {
      return res.status(500).json({
        error: result?.error || "Failed to retrieve download information."
      });
    }
  } catch (error) {
    console.error("API Handler error:", error);
    res.status(500).json({
      error: error.message || "An unexpected error occurred."
    });
  }
}