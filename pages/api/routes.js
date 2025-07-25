export default function handler(req, res) {
  const routes = [{
    path: "/api/ai/bing/chat/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/bing/image/search",
    name: "Search",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/bing/image/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/blackbox/chat",
    name: "Chat",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/deepseek/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/deepseek/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/deepseek/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/deepseek/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/deepseek/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/deepseek/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/exoml/gpt1image",
    name: "Gpt1image",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/exoml/imagen",
    name: "Imagen",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/exoml/runway",
    name: "Runway",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/exoml/suno",
    name: "Suno",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/gemini/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/gemini/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/gemini/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/gemini/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/gemini/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/gemini/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/heurist/imagine",
    name: "Imagine",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/heurist/pondera",
    name: "Pondera",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/heurist/search",
    name: "Search",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/iask/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/iask/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/iask/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/iask/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/image/ai-baby",
    name: "Ai-baby",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/image/ai-filter",
    name: "Ai-filter",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/image/aiart",
    name: "Aiart",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/image/analyzer",
    name: "Analyzer",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/image/cococlip",
    name: "Cococlip",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/image/cutout",
    name: "Cutout",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/image/deep-nudes",
    name: "Deep-nudes",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/image/imglarger",
    name: "Imglarger",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/image/modelslab",
    name: "Modelslab",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/image/monsterapi",
    name: "Monsterapi",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/image/on4t",
    name: "On4t",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/image/pixnova",
    name: "Pixnova",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/image/text2img",
    name: "Text2img",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/image/unblur-image",
    name: "Unblur-image",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/image/veer",
    name: "Veer",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2img/gen/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2img/ghibli/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2img/ghibli/v10",
    name: "V10",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2img/ghibli/v11",
    name: "V11",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2img/ghibli/v12",
    name: "V12",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2img/ghibli/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2img/ghibli/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2img/ghibli/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2img/ghibli/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2img/ghibli/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2img/ghibli/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2img/ghibli/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2img/ghibli/v9",
    name: "V9",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2img/ai-photo",
    name: "Ai-photo",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2img/bare",
    name: "Bare",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2img/drawever",
    name: "Drawever",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2img/neuralframes",
    name: "Neuralframes",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2prompt/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2prompt/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2prompt/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2prompt/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2prompt/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2prompt/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2prompt/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/img2prompt/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/logo-maker/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/lyrics/random/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/lyrics/random/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/music/lyrics/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/music/lyrics/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/music/soundverse",
    name: "Soundverse",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/music/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/music/v10",
    name: "V10",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/music/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/music/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/music/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/music/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/music/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/music/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/music/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/music/v9",
    name: "V9",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/music/v11",
    name: "V11",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/music/soniva",
    name: "Soniva",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/music/sunoapi",
    name: "Sunoapi",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/palm/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/prodia/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/flux/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/flux/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/flux/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/flux/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/flux/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/flux/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/flux/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/flux/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v10",
    name: "V10",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v11",
    name: "V11",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v12",
    name: "V12",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v13",
    name: "V13",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v14",
    name: "V14",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v15",
    name: "V15",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v16",
    name: "V16",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v17",
    name: "V17",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v18",
    name: "V18",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v19",
    name: "V19",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v20",
    name: "V20",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v21",
    name: "V21",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v22",
    name: "V22",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v23",
    name: "V23",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v24",
    name: "V24",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/gen/v9",
    name: "V9",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/ghibli/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/ghibli/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/ghibli/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/ghibli/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/ghibli/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/aieasypic",
    name: "Aieasypic",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/aifreebox",
    name: "Aifreebox",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/aiimage",
    name: "Aiimage",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/ainsfxv2",
    name: "Ainsfxv2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/akool",
    name: "Akool",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/animagine",
    name: "Animagine",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/artbit",
    name: "Artbit",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/artimator",
    name: "Artimator",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/artiz",
    name: "Artiz",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/background",
    name: "Background",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/briaai",
    name: "Briaai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/capcut",
    name: "Capcut",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/deepimg",
    name: "Deepimg",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/dezgo",
    name: "Dezgo",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/easyai",
    name: "Easyai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/flixier",
    name: "Flixier",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/fluxwebui",
    name: "Fluxwebui",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/fotor",
    name: "Fotor",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/genape",
    name: "Genape",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/genimg",
    name: "Genimg",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/getimg",
    name: "Getimg",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/hypic",
    name: "Hypic",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/imagelabs",
    name: "Imagelabs",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/imagesart",
    name: "Imagesart",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/imgsys",
    name: "Imgsys",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/jollyai",
    name: "Jollyai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/koala",
    name: "Koala",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/magichour",
    name: "Magichour",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/midjourney",
    name: "Midjourney",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/multiai",
    name: "Multiai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/nastia",
    name: "Nastia",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/nsfwalex",
    name: "Nsfwalex",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/nuelink",
    name: "Nuelink",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/piclumen",
    name: "Piclumen",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/pixai",
    name: "Pixai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/pixiebrix",
    name: "Pixiebrix",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/sana",
    name: "Sana",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/seaart",
    name: "Seaart",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/skybox",
    name: "Skybox",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/toyworld",
    name: "Toyworld",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2img/zmo",
    name: "Zmo",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2prompt/random/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2prompt/random/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2prompt/ai-song",
    name: "Ai-song",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2prompt/gen",
    name: "Gen",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2prompt/gock",
    name: "Gock",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2prompt/refine",
    name: "Refine",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/txt2prompt/suno",
    name: "Suno",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/acloud",
    name: "Acloud",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/ai-hat",
    name: "Ai-hat",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/ai4chat",
    name: "Ai4chat",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/aibaby",
    name: "Aibaby",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/aichat",
    name: "Aichat",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/aichatbot",
    name: "Aichatbot",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/aichatbots",
    name: "Aichatbots",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/aichatting",
    name: "Aichatting",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/aidoc",
    name: "Aidoc",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/aigirl",
    name: "Aigirl",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/aimath",
    name: "Aimath",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/aiperson",
    name: "Aiperson",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/aiproxy",
    name: "Aiproxy",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/aiquiz",
    name: "Aiquiz",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/airforce",
    name: "Airforce",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/alberta",
    name: "Alberta",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/alice-ai",
    name: "Alice-ai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/alisia",
    name: "Alisia",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/allyfy",
    name: "Allyfy",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/andisearch",
    name: "Andisearch",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/anqa",
    name: "Anqa",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/ansari-chat",
    name: "Ansari-chat",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/anthropic",
    name: "Anthropic",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/aoyo",
    name: "Aoyo",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/arting",
    name: "Arting",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/artypa",
    name: "Artypa",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/askthee",
    name: "Askthee",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/askyt",
    name: "Askyt",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/ayesoul",
    name: "Ayesoul",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/bagoodex",
    name: "Bagoodex",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/barbie",
    name: "Barbie",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/beago",
    name: "Beago",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/biblegpt",
    name: "Biblegpt",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/bingchat",
    name: "Bingchat",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/boredhumans",
    name: "Boredhumans",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/botify",
    name: "Botify",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/brave",
    name: "Brave",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/bubble",
    name: "Bubble",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/cai",
    name: "Cai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/calopal",
    name: "Calopal",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/cf",
    name: "Cf",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/chat100",
    name: "Chat100",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/chataibot",
    name: "Chataibot",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/chatbotai",
    name: "Chatbotai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/chatboxai",
    name: "Chatboxai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/chatfai",
    name: "Chatfai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/chatgpt-chatapp",
    name: "Chatgpt-chatapp",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/chatgpt",
    name: "Chatgpt",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/chatify",
    name: "Chatify",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/chatsandbox",
    name: "Chatsandbox",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/chattv",
    name: "Chattv",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/chatx",
    name: "Chatx",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/chawnyma",
    name: "Chawnyma",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/chutes",
    name: "Chutes",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/claila",
    name: "Claila",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/code-explain",
    name: "Code-explain",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/colorifyai",
    name: "Colorifyai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/concise",
    name: "Concise",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/controllino",
    name: "Controllino",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/copilot",
    name: "Copilot",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/copilot2trip",
    name: "Copilot2trip",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/correkt",
    name: "Correkt",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/creart",
    name: "Creart",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/cribl",
    name: "Cribl",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/crushchat",
    name: "Crushchat",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/cstories",
    name: "Cstories",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/cvbee",
    name: "Cvbee",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/darkai",
    name: "Darkai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/deepai",
    name: "Deepai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/deepbolt",
    name: "Deepbolt",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/deepenglish",
    name: "Deepenglish",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/deepinfra",
    name: "Deepinfra",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/deloris",
    name: "Deloris",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/delta",
    name: "Delta",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/dippy",
    name: "Dippy",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/doppleai",
    name: "Doppleai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/duckchat",
    name: "Duckchat",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/duckdns",
    name: "Duckdns",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/edyt",
    name: "Edyt",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/eqing",
    name: "Eqing",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/faceswap",
    name: "Faceswap",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/fapai",
    name: "Fapai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/fe-tool",
    name: "Fe-tool",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/fusion",
    name: "Fusion",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/galichat",
    name: "Galichat",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/gening",
    name: "Gening",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/getmerlin",
    name: "Getmerlin",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/getvoila",
    name: "Getvoila",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/github",
    name: "Github",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/gizai",
    name: "Gizai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/gohiai",
    name: "Gohiai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/google-bridge",
    name: "Google-bridge",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/gpt4oso",
    name: "Gpt4oso",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/gpt4v",
    name: "Gpt4v",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/gptbest",
    name: "Gptbest",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/groq",
    name: "Groq",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/hammerai",
    name: "Hammerai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/heckai",
    name: "Heckai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/hika",
    name: "Hika",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/hotbot",
    name: "Hotbot",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/hydro-mind",
    name: "Hydro-mind",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/hyper",
    name: "Hyper",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/iask",
    name: "Iask",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/idea-generator",
    name: "Idea-generator",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/imageenhan",
    name: "Imageenhan",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/iseehf",
    name: "Iseehf",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/islamandai",
    name: "Islamandai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/jadve",
    name: "Jadve",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/jaze",
    name: "Jaze",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/jeeves",
    name: "Jeeves",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/joyland",
    name: "Joyland",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/julius",
    name: "Julius",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/justai",
    name: "Justai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/khodam",
    name: "Khodam",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/kimi",
    name: "Kimi",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/kkv",
    name: "Kkv",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/lalals",
    name: "Lalals",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/learnfast",
    name: "Learnfast",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/lenna",
    name: "Lenna",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/linangdata",
    name: "Linangdata",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/liner",
    name: "Liner",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/llama2",
    name: "Llama2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/llamacoder",
    name: "Llamacoder",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/lovefaceswap",
    name: "Lovefaceswap",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/luminai",
    name: "Luminai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/magicstudio",
    name: "Magicstudio",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/mateai",
    name: "Mateai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/meer",
    name: "Meer",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/memecam",
    name: "Memecam",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/metaso",
    name: "Metaso",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/mikasa",
    name: "Mikasa",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/moonshot",
    name: "Moonshot",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/morphic",
    name: "Morphic",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/moshiai",
    name: "Moshiai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/mossai",
    name: "Mossai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/msquare",
    name: "Msquare",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/multichatai",
    name: "Multichatai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/muslimai",
    name: "Muslimai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/myanima",
    name: "Myanima",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/mymap",
    name: "Mymap",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/mystical",
    name: "Mystical",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/nekomori",
    name: "Nekomori",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/netwrck",
    name: "Netwrck",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/nexra",
    name: "Nexra",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/ninja-ai",
    name: "Ninja-ai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/noowai",
    name: "Noowai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/nova-g1",
    name: "Nova-g1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/olmo",
    name: "Olmo",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/onlinechatbot",
    name: "Onlinechatbot",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/ooai",
    name: "Ooai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/opengpt",
    name: "Opengpt",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/openindex",
    name: "Openindex",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/openjourney",
    name: "Openjourney",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/overchat",
    name: "Overchat",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/perchanceai",
    name: "Perchanceai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/perplexity",
    name: "Perplexity",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/phind",
    name: "Phind",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/pi",
    name: "Pi",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/pica",
    name: "Pica",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/picoapps",
    name: "Picoapps",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/pixarai",
    name: "Pixarai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/pizzagpt",
    name: "Pizzagpt",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/pollinations",
    name: "Pollinations",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/polybuzz",
    name: "Polybuzz",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/powerbrain",
    name: "Powerbrain",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/pxpic",
    name: "Pxpic",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/py-fiddle",
    name: "Py-fiddle",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/qwen",
    name: "Qwen",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/rabbitholes",
    name: "Rabbitholes",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/realchar",
    name: "Realchar",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/roleai",
    name: "Roleai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/roleplai",
    name: "Roleplai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/romantic",
    name: "Romantic",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/rubiks",
    name: "Rubiks",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/runner-ai",
    name: "Runner-ai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/sara-study",
    name: "Sara-study",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/scira",
    name: "Scira",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/scite",
    name: "Scite",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/scnet",
    name: "Scnet",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/searc",
    name: "Searc",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/searchland",
    name: "Searchland",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/shapes",
    name: "Shapes",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/sili",
    name: "Sili",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/skybyte",
    name: "Skybyte",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/smartchatbot",
    name: "Smartchatbot",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/spicychat",
    name: "Spicychat",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/sticky",
    name: "Sticky",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/stratokit",
    name: "Stratokit",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/studyxai",
    name: "Studyxai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/sup-ai",
    name: "Sup-ai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/talkai",
    name: "Talkai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/talkie",
    name: "Talkie",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/talknotes",
    name: "Talknotes",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/texta",
    name: "Texta",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/thinkany",
    name: "Thinkany",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/totalfreeai",
    name: "Totalfreeai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/translapp",
    name: "Translapp",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/tuneai",
    name: "Tuneai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/typegpt",
    name: "Typegpt",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/unlimitedai",
    name: "Unlimitedai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/wayin",
    name: "Wayin",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/wondera",
    name: "Wondera",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/writecream",
    name: "Writecream",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/wsup",
    name: "Wsup",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/xdash",
    name: "Xdash",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/zaiwen",
    name: "Zaiwen",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/podcast-ai",
    name: "Podcast-ai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/ai-image",
    name: "Ai-image",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/teach-anything",
    name: "Teach-anything",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/toolbaz",
    name: "Toolbaz",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/typli",
    name: "Typli",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/udesire",
    name: "Udesire",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/unlimited",
    name: "Unlimited",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/venice",
    name: "Venice",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/videogen",
    name: "Videogen",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/vondy",
    name: "Vondy",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/webpilot",
    name: "Webpilot",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/what-on-earth",
    name: "What-on-earth",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/wordle",
    name: "Wordle",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/writer",
    name: "Writer",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/x-minus",
    name: "X-minus",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/yousearch",
    name: "Yousearch",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/redpill",
    name: "Redpill",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/epsilon",
    name: "Epsilon",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/toolzi",
    name: "Toolzi",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/meta",
    name: "Meta",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/ai/mathful",
    name: "Mathful",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/baca-komik/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/baca-komik/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/kiryuu/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/kiryuu/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/kurama/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/oploverz/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/samehadaku/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/samehadaku/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/anichin",
    name: "Anichin",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/anilist",
    name: "Anilist",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/animasu",
    name: "Animasu",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/animebatch",
    name: "Animebatch",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/animeindo",
    name: "Animeindo",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/animesu",
    name: "Animesu",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/animexin",
    name: "Animexin",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/aniwatch",
    name: "Aniwatch",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/auratail",
    name: "Auratail",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/character-finder",
    name: "Character-finder",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/donghua",
    name: "Donghua",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/freenigami",
    name: "Freenigami",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/gogoanime",
    name: "Gogoanime",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/harimanga",
    name: "Harimanga",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/image",
    name: "Image",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/jimov",
    name: "Jimov",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/kitsu",
    name: "Kitsu",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/komikcast",
    name: "Komikcast",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/komikindo",
    name: "Komikindo",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/kusonime",
    name: "Kusonime",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/lk21",
    name: "Lk21",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/manhwaclan",
    name: "Manhwaclan",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/nonton-anime",
    name: "Nonton-anime",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/otakudesu",
    name: "Otakudesu",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/pahe",
    name: "Pahe",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/pixiv",
    name: "Pixiv",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/rokuhentai",
    name: "Rokuhentai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/ruang-movie",
    name: "Ruang-movie",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/sakura-novel",
    name: "Sakura-novel",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/sasangeyou",
    name: "Sasangeyou",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/shuushuu",
    name: "Shuushuu",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/sokuja",
    name: "Sokuja",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/terbit21",
    name: "Terbit21",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/trace",
    name: "Trace",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/usagipoi",
    name: "Usagipoi",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/video",
    name: "Video",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/waifu",
    name: "Waifu",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/wall",
    name: "Wall",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/anime/zoro",
    name: "Zoro",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/apk4all",
    name: "Apk4all",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/apk4free",
    name: "Apk4free",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/apkbolt",
    name: "Apkbolt",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/apkcafe",
    name: "Apkcafe",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/apkcombo",
    name: "Apkcombo",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/apkdone",
    name: "Apkdone",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/apkfab",
    name: "Apkfab",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/apkfolder",
    name: "Apkfolder",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/apkfolks",
    name: "Apkfolks",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/apkgk",
    name: "Apkgk",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/apkhome",
    name: "Apkhome",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/apkhouse",
    name: "Apkhouse",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/apkmirror",
    name: "Apkmirror",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/apkpure",
    name: "Apkpure",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/apktools",
    name: "Apktools",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/appteka",
    name: "Appteka",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/appvn",
    name: "Appvn",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/filehippo",
    name: "Filehippo",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/gamedva",
    name: "Gamedva",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/getmodsapk",
    name: "Getmodsapk",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/playmods",
    name: "Playmods",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/playstore",
    name: "Playstore",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/rexdl",
    name: "Rexdl",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/uapkpro",
    name: "Uapkpro",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/apps/uptodown",
    name: "Uptodown",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/auth/forgot-password",
    name: "Forgot-password",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/auth/reset-password",
    name: "Reset-password",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/auth/sign-in",
    name: "Sign-in",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/auth/sign-up",
    name: "Sign-up",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/auth/[...nextauth]",
    name: "[...nextauth]",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/canvas/canvafy/captcha",
    name: "Captcha",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/canvas/canvafy/filter",
    name: "Filter",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/canvas/canvafy/instagram",
    name: "Instagram",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/canvas/canvafy/levelup",
    name: "Levelup",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/canvas/canvafy/profile",
    name: "Profile",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/canvas/canvafy/rank",
    name: "Rank",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/canvas/canvafy/security",
    name: "Security",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/canvas/canvafy/ship",
    name: "Ship",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/canvas/canvafy/spotify",
    name: "Spotify",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/canvas/canvafy/top",
    name: "Top",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/canvas/canvafy/twitter",
    name: "Twitter",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/canvas/canvafy/welcomer",
    name: "Welcomer",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/canvas/imagegen",
    name: "Imagegen",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/canvas/profile",
    name: "Profile",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/9xbuddy/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/9xbuddy/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/all/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/all/v10",
    name: "V10",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/all/v11",
    name: "V11",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/all/v12",
    name: "V12",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/all/v13",
    name: "V13",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/all/v14",
    name: "V14",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/all/v15",
    name: "V15",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/all/v16",
    name: "V16",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/all/v17",
    name: "V17",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/all/v18",
    name: "V18",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/all/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/all/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/all/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/all/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/all/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/all/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/all/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/all/v9",
    name: "V9",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/all/v19",
    name: "V19",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/all/v20",
    name: "V20",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/apple-music/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/capcut/template",
    name: "Template",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/capcut/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/capcut/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/capcut/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/douyin/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/facebook/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/facebook/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/facebook/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/facebook/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/facebook/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/fastdl/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/fastdl/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v10",
    name: "V10",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v11",
    name: "V11",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v12",
    name: "V12",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v13",
    name: "V13",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v14",
    name: "V14",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v15",
    name: "V15",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v16",
    name: "V16",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v17",
    name: "V17",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v18",
    name: "V18",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v19",
    name: "V19",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v20",
    name: "V20",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v21",
    name: "V21",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v9",
    name: "V9",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/instagram/v22",
    name: "V22",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/likee/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/likee/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/mediafire/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/mediafire/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/mediafire/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/mediafire/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/mega/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/mega/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/pinterest/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/pinterest/v10",
    name: "V10",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/pinterest/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/pinterest/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/pinterest/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/pinterest/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/pinterest/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/pinterest/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/pinterest/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/pinterest/v9",
    name: "V9",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/savetube/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/savetube/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/scribd/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/scribd/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/scribd/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/sfile/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/sfile/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/soundcloud/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/soundcloud/v10",
    name: "V10",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/soundcloud/v11",
    name: "V11",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/soundcloud/v12",
    name: "V12",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/soundcloud/v13",
    name: "V13",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/soundcloud/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/soundcloud/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/soundcloud/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/soundcloud/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/soundcloud/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/soundcloud/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/soundcloud/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/soundcloud/v9",
    name: "V9",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/spotify/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/spotify/v10",
    name: "V10",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/spotify/v11",
    name: "V11",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/spotify/v12",
    name: "V12",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/spotify/v13",
    name: "V13",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/spotify/v14",
    name: "V14",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/spotify/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/spotify/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/spotify/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/spotify/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/spotify/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/spotify/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/spotify/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/spotify/v9",
    name: "V9",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/subtitle/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/telegram/stories",
    name: "Stories",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/terabox/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/terabox/v10",
    name: "V10",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/terabox/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/terabox/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/terabox/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/terabox/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/terabox/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/terabox/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/terabox/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/terabox/v9",
    name: "V9",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/threads/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/threads/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/threads/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/threads/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/threads/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/threads/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/tiktok/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/tiktok/v10",
    name: "V10",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/tiktok/v11",
    name: "V11",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/tiktok/v12",
    name: "V12",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/tiktok/v13",
    name: "V13",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/tiktok/v14",
    name: "V14",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/tiktok/v15",
    name: "V15",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/tiktok/v16",
    name: "V16",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/tiktok/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/tiktok/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/tiktok/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/tiktok/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/tiktok/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/tiktok/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/tiktok/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/tiktok/v9",
    name: "V9",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/tiktok/v17",
    name: "V17",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/torrent/webtor",
    name: "Webtor",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/twitter/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/twitter/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/twitter/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/twitter/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/flydl",
    name: "Flydl",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/ssvid",
    name: "Ssvid",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v10",
    name: "V10",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v11",
    name: "V11",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v12",
    name: "V12",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v13",
    name: "V13",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v14",
    name: "V14",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v15",
    name: "V15",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v16",
    name: "V16",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v17",
    name: "V17",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v18",
    name: "V18",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v19",
    name: "V19",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v20",
    name: "V20",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v21",
    name: "V21",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v22",
    name: "V22",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v23",
    name: "V23",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v24",
    name: "V24",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v25",
    name: "V25",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v26",
    name: "V26",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v28",
    name: "V28",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v29",
    name: "V29",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v30",
    name: "V30",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v31",
    name: "V31",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v32",
    name: "V32",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v33",
    name: "V33",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v34",
    name: "V34",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v35",
    name: "V35",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v36",
    name: "V36",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v37",
    name: "V37",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v38",
    name: "V38",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v39",
    name: "V39",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v40",
    name: "V40",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v41",
    name: "V41",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v42",
    name: "V42",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v43",
    name: "V43",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v44",
    name: "V44",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v45",
    name: "V45",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v46",
    name: "V46",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v47",
    name: "V47",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v48",
    name: "V48",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v49",
    name: "V49",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v50",
    name: "V50",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v51",
    name: "V51",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v52",
    name: "V52",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v53",
    name: "V53",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/v9",
    name: "V9",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/youtube/mp3dl",
    name: "Mp3dl",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/aaplemusic",
    name: "Aaplemusic",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/bilibili",
    name: "Bilibili",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/cobalt",
    name: "Cobalt",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/d4y",
    name: "D4y",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/ddownr",
    name: "Ddownr",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/dirpy",
    name: "Dirpy",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/doods",
    name: "Doods",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/ilkpop",
    name: "Ilkpop",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/krakenfiles",
    name: "Krakenfiles",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/luluvdo",
    name: "Luluvdo",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/publer",
    name: "Publer",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/qiwi",
    name: "Qiwi",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/retatube",
    name: "Retatube",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/shopee",
    name: "Shopee",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/snapsave",
    name: "Snapsave",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/step2down",
    name: "Step2down",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/stickercloud",
    name: "Stickercloud",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/download/tikwm",
    name: "Tikwm",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/film/drakor",
    name: "Drakor",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/film/drakorindo",
    name: "Drakorindo",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/film/drakorkita",
    name: "Drakorkita",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/film/lk21",
    name: "Lk21",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/film/zonafilm",
    name: "Zonafilm",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/fun/simi/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/fun/simi/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/fun/alay",
    name: "Alay",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/fun/jagokata",
    name: "Jagokata",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/fun/paint",
    name: "Paint",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/fun/tarotap",
    name: "Tarotap",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/akinator/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/akinator/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/anime-quiz",
    name: "Anime-quiz",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/asahotak",
    name: "Asahotak",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/cak-lontong",
    name: "Cak-lontong",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/chess",
    name: "Chess",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/deck",
    name: "Deck",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/emoji",
    name: "Emoji",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/family100",
    name: "Family100",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/lengkapi-kalimat",
    name: "Lengkapi-kalimat",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/ludo",
    name: "Ludo",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/math",
    name: "Math",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/question",
    name: "Question",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/quizz",
    name: "Quizz",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/siapakahaku",
    name: "Siapakahaku",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/susunkata",
    name: "Susunkata",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/tebak-anime",
    name: "Tebak-anime",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/tebak-bendera",
    name: "Tebak-bendera",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/tebak-gambar",
    name: "Tebak-gambar",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/tebak-game",
    name: "Tebak-game",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/tebak-heroml",
    name: "Tebak-heroml",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/tebak-hewan",
    name: "Tebak-hewan",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/tebak-jkt48",
    name: "Tebak-jkt48",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/tebak-kabupaten",
    name: "Tebak-kabupaten",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/tebak-kalimat",
    name: "Tebak-kalimat",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/tebak-kata",
    name: "Tebak-kata",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/tebak-kimia",
    name: "Tebak-kimia",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/tebak-lagu",
    name: "Tebak-lagu",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/tebak-lirik",
    name: "Tebak-lirik",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/tebak-logo",
    name: "Tebak-logo",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/tebak-siapa",
    name: "Tebak-siapa",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/tebak-surah",
    name: "Tebak-surah",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/tebakan",
    name: "Tebakan",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/teka-teki",
    name: "Teka-teki",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/tictactoe",
    name: "Tictactoe",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/game/trivia-maker",
    name: "Trivia-maker",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/general/hello",
    name: "Hello",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/general/system-stats",
    name: "System-stats",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/general/nb-script",
    name: "Nb-script",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/gpt/bestim",
    name: "Bestim",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/gpt/c3",
    name: "C3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/gpt/contract",
    name: "Contract",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/gpt/gpt24",
    name: "Gpt24",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/gpt/gptpic",
    name: "Gptpic",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/gpt/gptvoc",
    name: "Gptvoc",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/gpt/pinoy",
    name: "Pinoy",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/gpt/random",
    name: "Random",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/gpt/toolbot",
    name: "Toolbot",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/cuaca/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/cuaca/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/cuaca/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/cuaca/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/cuaca/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/hari-libur/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/hari-libur/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/hari-libur/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/hari-libur/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/hari-libur/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/kalender/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/kalender/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/kartu/im3",
    name: "Im3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/nik/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/saweria/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/saweria/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/yt-monetizer/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/ai-token",
    name: "Ai-token",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/bloxfruit",
    name: "Bloxfruit",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/gas-lpg",
    name: "Gas-lpg",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/gempa",
    name: "Gempa",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/growagarden",
    name: "Growagarden",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/jadwal-sholat",
    name: "Jadwal-sholat",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/nasa",
    name: "Nasa",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/plat",
    name: "Plat",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/primbon",
    name: "Primbon",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/singulario",
    name: "Singulario",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/sudoku",
    name: "Sudoku",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/truecaller",
    name: "Truecaller",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/wabeta",
    name: "Wabeta",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/info/zodiac",
    name: "Zodiac",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/islami/alquran/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/islami/alquran/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/islami/alquran/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/islami/alquran/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/islami/alquran/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/islami/alquran/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/islami/alquran/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/islami/mufassir",
    name: "Mufassir",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/islami/myquran",
    name: "Myquran",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/islami/umrotix",
    name: "Umrotix",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/mails/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/mails/v10",
    name: "V10",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/mails/v11",
    name: "V11",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/mails/v12",
    name: "V12",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/mails/v13",
    name: "V13",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/mails/v14",
    name: "V14",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/mails/v15",
    name: "V15",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/mails/v16",
    name: "V16",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/mails/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/mails/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/mails/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/mails/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/mails/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/mails/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/mails/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/mails/v9",
    name: "V9",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/mails/v17",
    name: "V17",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/blue-archive/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/blue-archive/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/blue-archive/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/blue-archive/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/brat/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/brat/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/brat/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/brat/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/brat/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/brat/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/brat/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/brat/video",
    name: "Video",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/carbon/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/carbon/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/carbon/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/cooltext/gen",
    name: "Gen",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/cooltext/get",
    name: "Get",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/cooltext/search",
    name: "Search",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/fansign/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/kalender/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/ktp/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/memegen/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/memegen/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/nulis/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/nulis/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/profile/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/qr/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/qr/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/qr/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/qr/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/qr/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/qr/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/qr/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/qr/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/quotly/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/quotly/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/snippet/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/snippet/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/snippet/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/snippet/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/snippet/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/text/blue-archive",
    name: "Blue-archive",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/text/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/ttp/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/ttp/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/welcome/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/apimeme",
    name: "Apimeme",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/brand",
    name: "Brand",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/captcha",
    name: "Captcha",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/codeimg",
    name: "Codeimg",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/ephoto",
    name: "Ephoto",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/flamtext",
    name: "Flamtext",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/glowtext",
    name: "Glowtext",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/imgflip",
    name: "Imgflip",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/photofunia",
    name: "Photofunia",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/photomania",
    name: "Photomania",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/picjoke",
    name: "Picjoke",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/price",
    name: "Price",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/qc",
    name: "Qc",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/quozio",
    name: "Quozio",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/sologo",
    name: "Sologo",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/sw",
    name: "Sw",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/textgiraffe",
    name: "Textgiraffe",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/textstudio",
    name: "Textstudio",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/zombie",
    name: "Zombie",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/maker/textcraft",
    name: "Textcraft",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/emojimix/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/emojimix/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/emojimix/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/tts/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/tts/v10",
    name: "V10",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/tts/v11",
    name: "V11",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/tts/v12",
    name: "V12",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/tts/v13",
    name: "V13",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/tts/v14",
    name: "V14",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/tts/v15",
    name: "V15",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/tts/v16",
    name: "V16",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/tts/v17",
    name: "V17",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/tts/v18",
    name: "V18",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/tts/v19",
    name: "V19",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/tts/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/tts/v20",
    name: "V20",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/tts/v21",
    name: "V21",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/tts/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/tts/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/tts/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/tts/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/tts/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/tts/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/tts/v9",
    name: "V9",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/misc/voice/imyfone",
    name: "Imyfone",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/antara",
    name: "Antara",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/bbc",
    name: "Bbc",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/cnbc",
    name: "Cnbc",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/cnn",
    name: "Cnn",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/daily",
    name: "Daily",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/detik",
    name: "Detik",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/fajar",
    name: "Fajar",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/indozone",
    name: "Indozone",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/inews",
    name: "Inews",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/kompas",
    name: "Kompas",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/kontan",
    name: "Kontan",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/kumparan",
    name: "Kumparan",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/liputan6",
    name: "Liputan6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/merdeka",
    name: "Merdeka",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/metro",
    name: "Metro",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/okezone",
    name: "Okezone",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/republika",
    name: "Republika",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/sindo",
    name: "Sindo",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/tempo",
    name: "Tempo",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/tribun",
    name: "Tribun",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/news/viva",
    name: "Viva",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/image/hentai",
    name: "Hentai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/image/nsfwhub",
    name: "Nsfwhub",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/search/bokepindo",
    name: "Bokepindo",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/search/bokepsin",
    name: "Bokepsin",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/search/xgroovy",
    name: "Xgroovy",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/search/youporn",
    name: "Youporn",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/bokepsin",
    name: "Bokepsin",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/cosxplay",
    name: "Cosxplay",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/crotpedia",
    name: "Crotpedia",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/eporner",
    name: "Eporner",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/erome",
    name: "Erome",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/javhd",
    name: "Javhd",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/nekos",
    name: "Nekos",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/nhentai",
    name: "Nhentai",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/nobokep",
    name: "Nobokep",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/pornhub",
    name: "Pornhub",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/sameyui",
    name: "Sameyui",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/simontok",
    name: "Simontok",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/teamskeet",
    name: "Teamskeet",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/xhamster",
    name: "Xhamster",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/xnxx",
    name: "Xnxx",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/xpanas",
    name: "Xpanas",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/nsfw/xvideos",
    name: "Xvideos",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/other/artikata",
    name: "Artikata",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/other/artinama",
    name: "Artinama",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/quotes/anime/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/quotes/anime/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/quotes/anime/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/quotes/anime/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/quotes/bacot",
    name: "Bacot",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/quotes/bijak",
    name: "Bijak",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/quotes/bucin",
    name: "Bucin",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/quotes/by",
    name: "By",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/quotes/goodreads",
    name: "Goodreads",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/quotes/ilham",
    name: "Ilham",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/quotes/pakboy",
    name: "Pakboy",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/quotes/sad",
    name: "Sad",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/quotes/sindiran",
    name: "Sindiran",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/random/image/anime",
    name: "Anime",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/random/image/cat",
    name: "Cat",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/random/video/girl",
    name: "Girl",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/random/wallpaper/anime",
    name: "Anime",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/random/wallpaper/lumina",
    name: "Lumina",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/random/wallpaper/uhd",
    name: "Uhd",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/random/cerpen",
    name: "Cerpen",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/random/country",
    name: "Country",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/random/hugelol",
    name: "Hugelol",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/random/image",
    name: "Image",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/random/some",
    name: "Some",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/random/tikporntok",
    name: "Tikporntok",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/random/tools",
    name: "Tools",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/random/wallpaper",
    name: "Wallpaper",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/code/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/code/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/code/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/dongeng/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/dongeng/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/engine/brave",
    name: "Brave",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/engine/google",
    name: "Google",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/font/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/font/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/font/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/font/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/font/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/font/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/font/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/group-wa/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/group-wa/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/group-wa/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/group-wa/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/group-wa/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/group-wa/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/group-wa/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/group-wa/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/itch/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/itch/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/lyrics/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/lyrics/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/lyrics/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/lyrics/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/lyrics/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/lyrics/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/lyrics/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/lyrics/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/lyrics/v9",
    name: "V9",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/pinterest/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/resep/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/resep/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/resep/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/sfile/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/sfile/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/soundcloud/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/soundcloud/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/tiktok/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/tiktok/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/tiktok/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/wallpapers/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/wallpapers/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/wallpapers/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/wallpapers/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/wallpapers/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/wallpapers/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/wallpapers/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/youtube/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/youtube/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/youtube/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/youtube/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/youtube/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/youtube/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/3dmgame",
    name: "3dmgame",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/9gag",
    name: "9gag",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/anime",
    name: "Anime",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/apple-music",
    name: "Apple-music",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/audio-atlas",
    name: "Audio-atlas",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/azmto",
    name: "Azmto",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/bilibili",
    name: "Bilibili",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/bing",
    name: "Bing",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/caraqu",
    name: "Caraqu",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/ccmixter",
    name: "Ccmixter",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/cerpenmu",
    name: "Cerpenmu",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/chordtela",
    name: "Chordtela",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/clip-cafe",
    name: "Clip-cafe",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/dataset",
    name: "Dataset",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/deezer",
    name: "Deezer",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/douyin",
    name: "Douyin",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/emoji",
    name: "Emoji",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/felo",
    name: "Felo",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/ftg",
    name: "Ftg",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/github",
    name: "Github",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/gsmarena",
    name: "Gsmarena",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/idyllic",
    name: "Idyllic",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/itunes",
    name: "Itunes",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/jkt48",
    name: "Jkt48",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/kbbi",
    name: "Kbbi",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/lahelu",
    name: "Lahelu",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/mcpe",
    name: "Mcpe",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/melon-music",
    name: "Melon-music",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/mlbb",
    name: "Mlbb",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/music-finder",
    name: "Music-finder",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/music",
    name: "Music",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/pddikti",
    name: "Pddikti",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/random",
    name: "Random",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/sendthesong",
    name: "Sendthesong",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/spotify",
    name: "Spotify",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/squid",
    name: "Squid",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/stickercloud",
    name: "Stickercloud",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/storyset",
    name: "Storyset",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/synk",
    name: "Synk",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/tools",
    name: "Tools",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/tubidy",
    name: "Tubidy",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/wattpad",
    name: "Wattpad",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/wiki",
    name: "Wiki",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/xng",
    name: "Xng",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/jrchord",
    name: "Jrchord",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/brainly/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/brainly/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/search/terabox/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/sound/freesound",
    name: "Freesound",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/sound/jungle",
    name: "Jungle",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/sound/ml",
    name: "Ml",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/sound/nonstick",
    name: "Nonstick",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/sound/pixabay",
    name: "Pixabay",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/sound/random",
    name: "Random",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/sound/voice",
    name: "Voice",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/sound/windah",
    name: "Windah",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/sound/xeno",
    name: "Xeno",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/ff/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/ff/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/instagram/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/instagram/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/instagram/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/instagram/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/instagram/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/instagram/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/instagram/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/instagram/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/ml/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/ml/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/ml/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/tiktok/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/tiktok/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/tiktok/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/tiktok/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/tiktok/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/tiktok/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/twitter/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/twitter/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/bank",
    name: "Bank",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/game",
    name: "Game",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/stalker/idn",
    name: "Idn",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/sticker/lines/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/sticker/lines/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/sticker/telegram/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/sticker/telegram/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/sticker/tenor/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/sticker/tenor/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/sticker/combot",
    name: "Combot",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/sticker/fstik",
    name: "Fstik",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/sticker/giphy",
    name: "Giphy",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/sticker/sigstick",
    name: "Sigstick",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/sticker/stickerly/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/sticker/stickerly/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/audio/audio-enhancer",
    name: "Audio-enhancer",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/audio/clean-voice",
    name: "Clean-voice",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/audio/noise-reducer",
    name: "Noise-reducer",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/audio/noise-removal",
    name: "Noise-removal",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/audio/vocal-remover",
    name: "Vocal-remover",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/braille/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/braille/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cartoon/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cartoon/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cartoon/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cek-host/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cek-ongkir/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cek-ongkir/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cek-resi/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cek-resi/v10",
    name: "V10",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cek-resi/v11",
    name: "V11",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cek-resi/v12",
    name: "V12",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cek-resi/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cek-resi/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cek-resi/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cek-resi/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cek-resi/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cek-resi/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cek-resi/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cek-resi/v9",
    name: "V9",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cek-resi/v13",
    name: "V13",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cek-resi/v14",
    name: "V14",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/code-convert/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/code-convert/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/hit/create",
    name: "Create",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/hit/hit",
    name: "Hit",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/hit/view",
    name: "View",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/html2img/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/html2img/v10",
    name: "V10",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/html2img/v11",
    name: "V11",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/html2img/v12",
    name: "V12",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/html2img/v13",
    name: "V13",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/html2img/v14",
    name: "V14",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/html2img/v15",
    name: "V15",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/html2img/v16",
    name: "V16",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/html2img/v17",
    name: "V17",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/html2img/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/html2img/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/html2img/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/html2img/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/html2img/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/html2img/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/html2img/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/html2img/v9",
    name: "V9",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/ig/auto-follow",
    name: "Auto-follow",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/ig/info",
    name: "Info",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/img2pdf/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/img2pdf/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/img2pdf/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/jarak/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/jarak/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/jarak/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/jarak/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/nsfw-check/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/ocr/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/ocr/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/ocr/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/ocr/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/ocr/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/ocr/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/ocr/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/ocr/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/ocr/v9",
    name: "V9",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/pair/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/paste/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/paste/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/paste/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/paste/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/paste/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/paste/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/paste/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/remove-bg/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/remove-bg/v10",
    name: "V10",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/remove-bg/v11",
    name: "V11",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/remove-bg/v12",
    name: "V12",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/remove-bg/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/remove-bg/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/remove-bg/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/remove-bg/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/remove-bg/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/remove-bg/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/remove-bg/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/remove-bg/v9",
    name: "V9",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/acrobat",
    name: "Acrobat",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/scanqr/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/scanqr/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/sendmail/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/sendmail/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/sendmail/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/short-link/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/short-link/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/ssweb/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/ssweb/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/ssweb/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/summary/yt/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/transcript/tiktok/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/transcript/yt/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/transcript/yt/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/transcript/yt/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/transcript/yt/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/transcript/yt/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/transcript/yt/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/transcript/yt/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/translate/list",
    name: "List",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/translate/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/translate/v10",
    name: "V10",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/translate/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/translate/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/translate/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/translate/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/translate/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/translate/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/translate/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/translate/v9",
    name: "V9",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/upscale/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/upscale/v10",
    name: "V10",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/upscale/v11",
    name: "V11",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/upscale/v12",
    name: "V12",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/upscale/v13",
    name: "V13",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/upscale/v14",
    name: "V14",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/upscale/v15",
    name: "V15",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/upscale/v16",
    name: "V16",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/upscale/v17",
    name: "V17",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/upscale/v18",
    name: "V18",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/upscale/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/upscale/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/upscale/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/upscale/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/upscale/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/upscale/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/upscale/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/upscale/v9",
    name: "V9",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/bypass/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/bypass/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/bypass/sfl",
    name: "Sfl",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/cookie/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/cookie/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/html/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/html/v10",
    name: "V10",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/html/v11",
    name: "V11",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/html/v12",
    name: "V12",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/html/v13",
    name: "V13",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/html/v14",
    name: "V14",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/html/v15",
    name: "V15",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/html/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/html/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/html/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/html/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/html/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/html/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/html/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/html/v9",
    name: "V9",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/proxy/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/proxy/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/proxy/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/proxy/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/proxy/v5",
    name: "V5",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/proxy/v6",
    name: "V6",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/proxy/v7",
    name: "V7",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/proxy/v8",
    name: "V8",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/save/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/save/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/save/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/save/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/down4ever",
    name: "Down4ever",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/grabber",
    name: "Grabber",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/lookup",
    name: "Lookup",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/open-graph",
    name: "Open-graph",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/raw",
    name: "Raw",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/web/view-site",
    name: "View-site",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/ampang-pedia",
    name: "Ampang-pedia",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/api-clone",
    name: "Api-clone",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/appmaker",
    name: "Appmaker",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/beauty-js",
    name: "Beauty-js",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/beauty-score",
    name: "Beauty-score",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cf-token",
    name: "Cf-token",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/cut-video",
    name: "Cut-video",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/db",
    name: "Db",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/dewatermark",
    name: "Dewatermark",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/enchant",
    name: "Enchant",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/ezgif",
    name: "Ezgif",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/facial-age",
    name: "Facial-age",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/fancy-text",
    name: "Fancy-text",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/fdroid",
    name: "Fdroid",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/fish",
    name: "Fish",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/free-api",
    name: "Free-api",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/fsymbol",
    name: "Fsymbol",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/geoip",
    name: "Geoip",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/helixs",
    name: "Helixs",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/ilovepdf",
    name: "Ilovepdf",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/imgedit",
    name: "Imgedit",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/imggen",
    name: "Imggen",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/lens",
    name: "Lens",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/makestickers",
    name: "Makestickers",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/mapbox",
    name: "Mapbox",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/math",
    name: "Math",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/morse",
    name: "Morse",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/myip",
    name: "Myip",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/ngl",
    name: "Ngl",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/js-confuser",
    name: "Js-confuser",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/ondoku",
    name: "Ondoku",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/onlineconvert",
    name: "Onlineconvert",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/photo505",
    name: "Photo505",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/playwright",
    name: "Playwright",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/postcode",
    name: "Postcode",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/roasting",
    name: "Roasting",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/js-obfuscator",
    name: "Js-obfuscator",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/similarity",
    name: "Similarity",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/sinonim",
    name: "Sinonim",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/spam-ngl",
    name: "Spam-ngl",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/ssweb",
    name: "Ssweb",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/styletext",
    name: "Styletext",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/txt-in-video",
    name: "Txt-in-video",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/typecast",
    name: "Typecast",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/upload",
    name: "Upload",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/upscale",
    name: "Upscale",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/url2zip",
    name: "Url2zip",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/violation",
    name: "Violation",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/virtualnum",
    name: "Virtualnum",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/whisper",
    name: "Whisper",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/crypto-js",
    name: "Crypto-js",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/compiler/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/compiler/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/compiler/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/tools/compiler/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/top-up/v1",
    name: "V1",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/top-up/v2",
    name: "V2",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/top-up/v3",
    name: "V3",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/top-up/v4",
    name: "V4",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/user/delete",
    name: "Delete",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/user/info",
    name: "Info",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/user/stats",
    name: "Stats",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/user/user",
    name: "User",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/visitor/info",
    name: "Info",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/visitor/req",
    name: "Req",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/visitor/reset",
    name: "Reset",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/visitor/stats",
    name: "Stats",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/visitor/visit",
    name: "Visit",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }, {
    path: "/api/visitor/all",
    name: "All",
    params: [{
      name: "prompt",
      in: "query",
      required: false
    }]
  }];
  res.status(200).json(routes);
}