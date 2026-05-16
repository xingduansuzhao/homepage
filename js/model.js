const MODEL_I18N = {
    "zh-CN": {
        "meta.title": "AI 做模型｜星断肃昭",
        "nav.home": "首页",
        "nav.lazypack": "懒人包",
        "nav.code": "代码",
        "nav.texture": "材质",
        "nav.model": "模型",
        "menu.platforms": "内容平台",
        "menu.taobao": "淘宝个人店铺",
        "menu.qq": "加入 QQ 群",
        "hero.eyebrow": "AI 做模型",
        "hero.title": "先把 Blockbench MCP 连上",
        "hero.desc": "本页先抓最关键的一步：让 AI 能访问你的 Blockbench。连接跑通后，再让 AI 放一个方块验证，不要一上来就让它做复杂生物。",
        "hero.primary": "开始配置 MCP",
        "hero.secondary": "MCP 是什么",
        "route.kicker": "本页路线",
        "route.title": "先连接，再验证，最后再做模型",
        "route.one.title": "装 Blockbench 插件",
        "route.one.desc": "用原作者插件，让 Blockbench 开出本地 MCP 服务。",
        "route.two.title": "让 Trae 连过去",
        "route.two.desc": "Node、npm、npx 和 mcp-remote 是连接链路。",
        "route.three.title": "先放一个方块",
        "route.three.desc": "方块能出现，才说明 AI 真的连上了 Blockbench。",
        "mcp.title": "MCP 是什么",
        "mcp.subtitle": "你不需要研究原理，只要记住：MCP 就是 AI 和 Blockbench 之间的连接线。",
        "mcp.card1.title": "Blockbench 开门",
        "mcp.card1.desc": "插件会在本机开启一个地址：localhost:3000/bb-mcp。",
        "mcp.card2.title": "Trae 走这条线",
        "mcp.card2.desc": "Trae 通过 npx mcp-remote 连到这个地址。",
        "mcp.card3.title": "强 AI 更重要",
        "mcp.card3.desc": "MCP 只是手。模型做得好不好，主要看 AI 会不会拆结构、控比例、安排骨骼。",
        "links.kicker": "准备入口",
        "links.title": "先把这些页面打开",
        "links.lead": "下面是配置会用到的入口。原作者项目放在这里，安装说明也能从项目页找到。",
        "links.github.title": "原作者 MCP 项目",
        "links.trae.title": "Trae 下载入口",
        "links.trae.desc": "优先下载国际版；不方便就用国内版 trae.cn/ide/download。",
        "links.trae.global": "国际版",
        "links.trae.cn": "国内版",
        "links.node.title": "下载 Node.js",
        "steps.title": "MCP 配置步骤",
        "steps.subtitle": "步骤多，但不要跳。点开任意图片后，可以直接切换上一张和下一张。",
        "commands.node.title": "验证 Node",
        "commands.remote.title": "国内网络建议先装 mcp-remote",
        "commands.config.title": "Trae MCP 配置",
        "common.copy": "复制",
        "steps.one.title": "从 URL 加载插件",
        "steps.one.desc": "Blockbench 里打开 Plugins，粘贴原作者提供的插件 URL。",
        "steps.two.title": "看到 MCP 状态",
        "steps.two.desc": "插件加载后，Blockbench 底部会出现 MCP 状态。",
        "steps.three.title": "下载安装 Node.js",
        "steps.three.desc": "选择 Windows Installer，不要选需要手动配置的压缩包。",
        "steps.four.title": "下载安装 Trae",
        "steps.four.desc": "优先国际版；不方便就用国内版下载入口。",
        "steps.five.title": "验证三个命令",
        "steps.five.desc": "三个都有版本号，才说明 Node 安装成功。",
        "steps.six.title": "打开 Trae MCP 设置",
        "steps.six.desc": "进入设置里的 MCP Servers 区域。",
        "steps.seven.title": "选择手动配置",
        "steps.seven.desc": "不要乱填，后面直接粘贴配置文件。",
        "steps.eight.title": "粘贴配置并确认",
        "steps.eight.desc": "点开这张图后，直接复制配置内容。",
        "steps.nine.title": "验证连接",
        "steps.nine.desc": "先让它放一个方块，不要直接做复杂模型。",
        "steps.ten.title": "方块出现就成功",
        "steps.ten.desc": "看到方块后，再开始让 AI 做你的模型。",
        "verify.kicker": "连接验证",
        "verify.title": "验证 AI 是否连上 Blockbench",
        "verify.desc": "方块能被放进 Blockbench，说明连接链路是通的。",
        "verify.copy": "复制连接验证指令",
        "prompt.kicker": "前置指令",
        "prompt.title": "先锁定 Minecraft 方块模型标准",
        "prompt.lead": "推荐复制英文版。看不懂没关系，复制后在末尾写中文需求，例如“做一个小蜗牛”。",
        "prompt.enLabel": "推荐：英文版",
        "prompt.zhLabel": "可选：中文版",
        "prompt.copyEn": "复制英文指令",
        "prompt.copyZh": "复制中文指令",
        "snail.kicker": "工具包案例",
        "snail.title": "工具包做出的蜗牛模型",
        "snail.lead": "右侧就是视频里的蜗牛模型，已经接入网页 3D 预览。拖动后可以直接看结构、比例和材质效果。",
        "snail.format1": "当前展示：GLTF 蜗牛模型",
        "snail.format2": "后续换成 GLB，也能继续使用这个预览区。",
        "snail.hud": "拖动旋转 · 滚轮缩放",
        "toolkit.kicker": "更省事的路线",
        "toolkit.title": "连上 MCP 之后，差距在稳定和成品",
        "toolkit.lead": "你可以先按本页把原作者 MCP 跑通。工具包模型板块处理的是后面的麻烦：更稳的连接、更强的任务约束、更少手动导出。",
        "toolkit.point1": "更强的模型前置指令框架，不用自己反复试长模板",
        "toolkit.point2": "独家的模型材质处理方案，模型不会一进游戏就廉价",
        "toolkit.point3": "增强 MCP：连接更稳，适配更多 AI 工具",
        "toolkit.point4": "支持 AI 自动导出模型文件、材质、动画，少做手工收尾",
        "toolkit.cta": "查看工具包详情",
        "toolkit.panel1.title": "原版 MCP",
        "toolkit.panel1.desc": "适合入门验证，但可能会遇到连接不稳、断开重连、导出仍要自己处理。",
        "toolkit.panel2.title": "工具包路线",
        "toolkit.panel2.desc": "适合直接追成品，把连接、材质、导出这些烦人的步骤压到更短。",
        "footer.meta": "© 星断肃昭 · Minecraft 模组开发入口",
        "footer.desc": "整理懒人包、代码、材质、模型相关内容，方便按阶段进入。",
        "preview.copy": "复制本步骤信息",
        "toast.copy": "已复制"
    },
    "zh-TW": {
        "meta.title": "AI 做模型｜星斷肅昭",
        "nav.home": "首頁",
        "nav.lazypack": "懶人包",
        "nav.code": "程式碼",
        "nav.texture": "材質",
        "nav.model": "模型",
        "menu.platforms": "內容平台",
        "menu.taobao": "淘寶個人店鋪",
        "menu.qq": "加入 QQ 群",
        "hero.eyebrow": "AI 做模型",
        "hero.title": "先把 Blockbench MCP 連上",
        "hero.desc": "本頁先抓最關鍵的一步：讓 AI 能訪問你的 Blockbench。連接跑通後，再讓 AI 放一個方塊驗證，不要一上來就讓它做複雜生物。",
        "hero.primary": "開始配置 MCP",
        "hero.secondary": "MCP 是什麼",
        "route.kicker": "本頁路線",
        "route.title": "先連接，再驗證，最後再做模型",
        "route.one.title": "裝 Blockbench 插件",
        "route.one.desc": "用原作者插件，讓 Blockbench 開出本地 MCP 服務。",
        "route.two.title": "讓 Trae 連過去",
        "route.two.desc": "Node、npm、npx 和 mcp-remote 是連接鏈路。",
        "route.three.title": "先放一個方塊",
        "route.three.desc": "方塊能出現，才說明 AI 真的連上了 Blockbench。",
        "mcp.title": "MCP 是什麼",
        "mcp.subtitle": "你不需要研究原理，只要記住：MCP 就是 AI 和 Blockbench 之間的連接線。",
        "mcp.card1.title": "Blockbench 開門",
        "mcp.card1.desc": "插件會在本機開啟一個地址：localhost:3000/bb-mcp。",
        "mcp.card2.title": "Trae 走這條線",
        "mcp.card2.desc": "Trae 通過 npx mcp-remote 連到這個地址。",
        "mcp.card3.title": "強 AI 更重要",
        "mcp.card3.desc": "MCP 只是手。模型做得好不好，主要看 AI 會不會拆結構、控比例、安排骨骼。",
        "links.kicker": "準備入口",
        "links.title": "先把這些頁面打開",
        "links.lead": "下面是配置會用到的入口。原作者項目放在這裡，安裝說明也能從項目頁找到。",
        "links.github.title": "原作者 MCP 項目",
        "links.trae.title": "Trae 下載入口",
        "links.trae.desc": "優先下載國際版；不方便就用國內版 trae.cn/ide/download。",
        "links.trae.global": "國際版",
        "links.trae.cn": "國內版",
        "links.node.title": "下載 Node.js",
        "steps.title": "MCP 配置步驟",
        "steps.subtitle": "步驟多，但不要跳。點開任意圖片後，可以直接切換上一張和下一張。",
        "commands.node.title": "驗證 Node",
        "commands.remote.title": "國內網路建議先裝 mcp-remote",
        "commands.config.title": "Trae MCP 配置",
        "common.copy": "複製",
        "steps.one.title": "從 URL 載入插件",
        "steps.one.desc": "Blockbench 裡打開 Plugins，貼上原作者提供的插件 URL。",
        "steps.two.title": "看到 MCP 狀態",
        "steps.two.desc": "插件載入後，Blockbench 底部會出現 MCP 狀態。",
        "steps.three.title": "下載安裝 Node.js",
        "steps.three.desc": "選擇 Windows Installer，不要選需要手動配置的壓縮包。",
        "steps.four.title": "下載安裝 Trae",
        "steps.four.desc": "優先國際版；不方便就用國內版下載入口。",
        "steps.five.title": "驗證三個命令",
        "steps.five.desc": "三個都有版本號，才說明 Node 安裝成功。",
        "steps.six.title": "打開 Trae MCP 設置",
        "steps.six.desc": "進入設置裡的 MCP Servers 區域。",
        "steps.seven.title": "選擇手動配置",
        "steps.seven.desc": "不要亂填，後面直接貼上配置文件。",
        "steps.eight.title": "貼上配置並確認",
        "steps.eight.desc": "點開這張圖後，直接複製配置內容。",
        "steps.nine.title": "驗證連接",
        "steps.nine.desc": "先讓它放一個方塊，不要直接做複雜模型。",
        "steps.ten.title": "方塊出現就成功",
        "steps.ten.desc": "看到方塊後，再開始讓 AI 做你的模型。",
        "verify.kicker": "連接驗證",
        "verify.title": "驗證 AI 是否連上 Blockbench",
        "verify.desc": "方塊能被放進 Blockbench，說明連接鏈路是通的。",
        "verify.copy": "複製連接驗證指令",
        "prompt.kicker": "前置指令",
        "prompt.title": "先鎖定 Minecraft 方塊模型標準",
        "prompt.lead": "推薦複製英文版。看不懂沒關係，複製後在末尾寫中文需求，例如「做一個小蝸牛」。",
        "prompt.enLabel": "推薦：英文版",
        "prompt.zhLabel": "可選：中文版",
        "prompt.copyEn": "複製英文指令",
        "prompt.copyZh": "複製中文指令",
        "snail.kicker": "工具包案例",
        "snail.title": "工具包做出的蝸牛模型",
        "snail.lead": "右側就是影片裡的蝸牛模型，已經接入網頁 3D 預覽。拖動後可以直接看結構、比例和材質效果。",
        "snail.format1": "當前展示：GLTF 蝸牛模型",
        "snail.format2": "後續換成 GLB，也能繼續使用這個預覽區。",
        "snail.hud": "拖動旋轉 · 滾輪縮放",
        "toolkit.kicker": "更省事的路線",
        "toolkit.title": "連上 MCP 之後，差距在穩定和成品",
        "toolkit.lead": "你可以先按本頁把原作者 MCP 跑通。工具包模型板塊處理的是後面的麻煩：更穩的連接、更強的任務約束、更少手動導出。",
        "toolkit.point1": "更強的模型前置指令框架，不用自己反覆試長模板",
        "toolkit.point2": "獨家的模型材質處理方案，模型不會一進遊戲就廉價",
        "toolkit.point3": "增強 MCP：連接更穩，適配更多 AI 工具",
        "toolkit.point4": "支持 AI 自動導出模型文件、材質、動畫，少做手工收尾",
        "toolkit.cta": "查看工具包詳情",
        "toolkit.panel1.title": "原版 MCP",
        "toolkit.panel1.desc": "適合入門驗證，但可能會遇到連接不穩、斷開重連、導出仍要自己處理。",
        "toolkit.panel2.title": "工具包路線",
        "toolkit.panel2.desc": "適合直接追成品，把連接、材質、導出這些煩人的步驟壓到更短。",
        "footer.meta": "© 星斷肅昭 · Minecraft 模組開發入口",
        "footer.desc": "整理懶人包、程式碼、材質、模型相關內容，方便按階段進入。",
        "preview.copy": "複製本步驟資訊",
        "toast.copy": "已複製"
    },
    en: {
        "meta.title": "AI Models | Xingduan Suzhao",
        "nav.home": "Home",
        "nav.lazypack": "Lazy Pack",
        "nav.code": "Code",
        "nav.texture": "Textures",
        "nav.model": "Models",
        "menu.platforms": "Platforms",
        "menu.taobao": "Taobao Store",
        "menu.qq": "Join QQ",
        "hero.eyebrow": "AI Models",
        "hero.title": "Connect Blockbench MCP first",
        "hero.desc": "This page focuses on one key step: let AI access your Blockbench. After the connection works, ask it to place one cube first instead of starting with a complex creature.",
        "hero.primary": "Configure MCP",
        "hero.secondary": "What MCP means",
        "route.kicker": "Page Route",
        "route.title": "Connect, verify, then build",
        "route.one.title": "Install Blockbench plugin",
        "route.one.desc": "Use the original plugin to start a local MCP service in Blockbench.",
        "route.two.title": "Connect Trae",
        "route.two.desc": "Node, npm, npx, and mcp-remote form the connection chain.",
        "route.three.title": "Place one cube first",
        "route.three.desc": "If the cube appears, AI really reached Blockbench.",
        "mcp.title": "What MCP Means",
        "mcp.subtitle": "You do not need the theory. Just remember: MCP is the wire between AI and Blockbench.",
        "mcp.card1.title": "Blockbench opens a door",
        "mcp.card1.desc": "The plugin starts a local endpoint: localhost:3000/bb-mcp.",
        "mcp.card2.title": "Trae uses the wire",
        "mcp.card2.desc": "Trae connects to it through npx mcp-remote.",
        "mcp.card3.title": "Stronger AI matters",
        "mcp.card3.desc": "MCP is only the hand. Model quality depends on structure, proportion, and bone planning.",
        "links.kicker": "Start Here",
        "links.title": "Open these pages first",
        "links.lead": "These are the setup links. The original project page contains the plugin URL and notes.",
        "links.github.title": "Original MCP project",
        "links.trae.title": "Trae downloads",
        "links.trae.desc": "Use the international version first. If needed, use trae.cn/ide/download.",
        "links.trae.global": "International",
        "links.trae.cn": "China",
        "links.node.title": "Download Node.js",
        "steps.title": "MCP Setup Steps",
        "steps.subtitle": "There are several steps. Click any image and switch directly between previous and next.",
        "commands.node.title": "Verify Node",
        "commands.remote.title": "Install mcp-remote first if network is unstable",
        "commands.config.title": "Trae MCP config",
        "common.copy": "Copy",
        "steps.one.title": "Load plugin from URL",
        "steps.one.desc": "Open Plugins in Blockbench and paste the plugin URL from the original project.",
        "steps.two.title": "Check MCP status",
        "steps.two.desc": "After loading, the MCP status appears at the bottom of Blockbench.",
        "steps.three.title": "Install Node.js",
        "steps.three.desc": "Choose Windows Installer, not the zip package.",
        "steps.four.title": "Install Trae",
        "steps.four.desc": "Use the international version first. Use the China download if needed.",
        "steps.five.title": "Verify three commands",
        "steps.five.desc": "All three must print version numbers.",
        "steps.six.title": "Open Trae MCP settings",
        "steps.six.desc": "Go to the MCP Servers area in settings.",
        "steps.seven.title": "Choose manual config",
        "steps.seven.desc": "Do not fill random fields. Paste the config next.",
        "steps.eight.title": "Paste config and confirm",
        "steps.eight.desc": "Open this image, then copy the config from the modal.",
        "steps.nine.title": "Verify connection",
        "steps.nine.desc": "Ask it to place one cube before trying a complex model.",
        "steps.ten.title": "Cube means success",
        "steps.ten.desc": "Once the cube appears, start your real model.",
        "verify.kicker": "Connection Check",
        "verify.title": "Check whether AI can reach Blockbench",
        "verify.desc": "If the cube appears in Blockbench, the connection is working.",
        "verify.copy": "Copy connection check prompt",
        "prompt.kicker": "Prefix Prompt",
        "prompt.title": "Lock the Minecraft model standard first",
        "prompt.lead": "English is recommended. Copy it, then add a Chinese subject such as 做一个小蜗牛.",
        "prompt.enLabel": "Recommended: English",
        "prompt.zhLabel": "Optional: Chinese",
        "prompt.copyEn": "Copy English prompt",
        "prompt.copyZh": "Copy Chinese prompt",
        "snail.kicker": "Toolkit Case",
        "snail.title": "Snail model made with the toolkit",
        "snail.lead": "This is the snail model from the video, now shown in a web 3D preview. Drag it to inspect the structure, proportions, and texture result.",
        "snail.format1": "Current preview: GLTF snail model",
        "snail.format2": "A later GLB replacement can use the same preview area.",
        "snail.hud": "Drag to rotate · wheel to zoom",
        "toolkit.kicker": "Easier Route",
        "toolkit.title": "After MCP connects, stability and output quality matter",
        "toolkit.lead": "You can connect the original MCP with this page. The toolkit model section handles the next problems: steadier connections, stronger task constraints, and less manual exporting.",
        "toolkit.point1": "Stronger model prompt framework, without trial-and-error long templates",
        "toolkit.point2": "Exclusive model material workflow, so in-game models do not look cheap",
        "toolkit.point3": "Enhanced MCP: steadier connection and broader AI tool support",
        "toolkit.point4": "AI can auto-export model files, textures, and animations",
        "toolkit.cta": "View toolkit details",
        "toolkit.panel1.title": "Original MCP",
        "toolkit.panel1.desc": "Good for first verification, but may hit unstable connection, reconnects, and manual export work.",
        "toolkit.panel2.title": "Toolkit Route",
        "toolkit.panel2.desc": "Better for finished output, with connection, material, and export work compressed.",
        "footer.meta": "© Xingduan Suzhao · Minecraft Mod Development Hub",
        "footer.desc": "Organized entry points for lazy packs, code, textures, and models.",
        "preview.copy": "Copy this step info",
        "toast.copy": "Copied"
    }
};

if ("scrollRestoration" in window.history && !window.location.hash) {
    window.history.scrollRestoration = "manual";
}

const DEFAULT_LANG = "zh-CN";
const LANG_ORDER = ["zh-CN", "zh-TW", "en"];
const LANG_LABEL = {
    "zh-CN": "简",
    "zh-TW": "繁",
    en: "EN"
};

function getInitialLanguage() {
    const saved = window.localStorage.getItem("site-lang") || window.localStorage.getItem("model-lang");
    if (saved && MODEL_I18N[saved]) return saved;
    return DEFAULT_LANG;
}

function applyLanguage(lang) {
    const dict = MODEL_I18N[lang] || MODEL_I18N[DEFAULT_LANG];
    const cycle = document.getElementById("languageCycle");
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
        const key = node.dataset.i18n;
        if (dict[key]) node.textContent = dict[key];
    });

    if (cycle) cycle.textContent = LANG_LABEL[lang] || LANG_LABEL[DEFAULT_LANG];
    document.title = dict["meta.title"];
    window.localStorage.setItem("site-lang", lang);
    window.localStorage.setItem("model-lang", lang);
}

function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function getCurrentDict() {
    const lang = window.localStorage.getItem("site-lang") || DEFAULT_LANG;
    return MODEL_I18N[lang] || MODEL_I18N[DEFAULT_LANG];
}

function setupLanguageCycle() {
    const cycle = document.getElementById("languageCycle");
    if (!cycle) return;

    cycle.addEventListener("click", () => {
        const current = getInitialLanguage();
        const index = LANG_ORDER.indexOf(current);
        const next = LANG_ORDER[(index + 1) % LANG_ORDER.length] || DEFAULT_LANG;
        applyLanguage(next);
    });
}

function setupProfileMenu() {
    const menu = document.getElementById("profileMenu");
    const trigger = document.getElementById("profileTrigger");
    const panel = document.getElementById("profilePanel");
    if (!menu || !trigger || !panel) return;

    trigger.addEventListener("click", () => {
        const open = menu.classList.toggle("is-open");
        trigger.setAttribute("aria-expanded", String(open));
        panel.hidden = !open;
    });

    document.addEventListener("click", (event) => {
        if (menu.contains(event.target)) return;
        menu.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
        panel.hidden = true;
    });
}

function setupCopyButtons() {
    document.querySelectorAll("[data-copy-target]").forEach((button) => {
        button.addEventListener("click", async () => {
            const target = document.getElementById(button.dataset.copyTarget);
            if (!target) return;

            const text = target.textContent.trim();
            try {
                await navigator.clipboard.writeText(text);
                showToast(getCurrentDict()["toast.copy"]);
            } catch (error) {
                showToast(text);
            }
        });
    });
}

function setupPromptTabs() {
    const tabs = document.querySelectorAll("[data-prompt-tab]");
    const panels = document.querySelectorAll("[data-prompt-panel]");
    if (!tabs.length || !panels.length) return;

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const lang = tab.dataset.promptTab;
            tabs.forEach((item) => {
                const active = item === tab;
                item.classList.toggle("is-active", active);
                item.setAttribute("aria-selected", String(active));
            });
            panels.forEach((panel) => {
                panel.hidden = panel.dataset.promptPanel !== lang;
            });
        });
    });
}

function setupImagePreview() {
    const preview = document.getElementById("imagePreview");
    const image = document.getElementById("imagePreviewImg");
    const title = document.getElementById("imagePreviewTitle");
    const copyButton = preview?.querySelector("[data-preview-copy]");
    const prevButton = preview?.querySelector("[data-preview-prev]");
    const nextButton = preview?.querySelector("[data-preview-next]");
    if (!preview || !image || !title) return;
    const triggers = Array.from(document.querySelectorAll("[data-preview-src]"));
    let currentIndex = 0;

    const close = () => {
        preview.hidden = true;
        image.src = "";
        document.body.style.overflow = "";
    };

    const showAt = (index) => {
        currentIndex = (index + triggers.length) % triggers.length;
        const button = triggers[currentIndex];
        if (!button) return;

        image.src = button.dataset.previewSrc;
        image.alt = button.dataset.previewTitle || "";
        title.textContent = `${currentIndex + 1} / ${triggers.length}  ${button.dataset.previewTitle || ""}`;
        if (copyButton) {
            const target = button.dataset.previewCopyTarget || "";
            copyButton.dataset.copyTarget = target;
            copyButton.hidden = !target;
        }
        preview.hidden = false;
        document.body.style.overflow = "hidden";
    };

    copyButton?.addEventListener("click", async () => {
        const target = document.getElementById(copyButton.dataset.copyTarget || "");
        if (!target) return;
        const text = target.textContent.trim();
        try {
            await navigator.clipboard.writeText(text);
            showToast(getCurrentDict()["toast.copy"]);
        } catch (error) {
            showToast(text);
        }
    });

    triggers.forEach((button, index) => {
        button.addEventListener("click", () => {
            showAt(index);
        });
    });

    prevButton?.addEventListener("click", () => showAt(currentIndex - 1));
    nextButton?.addEventListener("click", () => showAt(currentIndex + 1));

    preview.querySelectorAll("[data-preview-close]").forEach((button) => {
        button.addEventListener("click", close);
    });

    document.addEventListener("keydown", (event) => {
        if (preview.hidden) return;
        if (event.key === "Escape") close();
        if (event.key === "ArrowLeft") showAt(currentIndex - 1);
        if (event.key === "ArrowRight") showAt(currentIndex + 1);
    });
}

function drawCanvasFallback(canvas) {
    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const scale = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.floor(rect.width * scale));
    canvas.height = Math.max(1, Math.floor(rect.height * scale));
    context.scale(scale, scale);
    context.fillStyle = "#0b2736";
    context.fillRect(0, 0, rect.width, rect.height);
    context.fillStyle = "#436f2a";
    context.fillRect(rect.width * 0.32, rect.height * 0.54, rect.width * 0.42, rect.height * 0.12);
    context.fillStyle = "#8a6428";
    context.fillRect(rect.width * 0.43, rect.height * 0.34, rect.width * 0.22, rect.height * 0.22);
    context.fillStyle = "#b98b42";
    context.fillRect(rect.width * 0.48, rect.height * 0.39, rect.width * 0.12, rect.height * 0.12);
    context.fillStyle = "#5d8f3e";
    context.fillRect(rect.width * 0.24, rect.height * 0.48, rect.width * 0.18, rect.height * 0.15);
    context.fillStyle = "#d7f36d";
    context.fillRect(rect.width * 0.2, rect.height * 0.38, rect.width * 0.03, rect.height * 0.12);
    context.fillRect(rect.width * 0.3, rect.height * 0.36, rect.width * 0.03, rect.height * 0.13);
}

async function initSnailViewer() {
    const canvas = document.getElementById("snailCanvas");
    if (!canvas) return;

    let THREE;
    let GLTFLoader;
    try {
        THREE = await import("https://esm.sh/three@0.160.0");
        ({ GLTFLoader } = await import("https://esm.sh/three@0.160.0/examples/jsm/loaders/GLTFLoader.js"));
    } catch (error) {
        drawCanvasFallback(canvas);
        return;
    }

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    let distance = 5.8;
    camera.position.set(4.4, 3.2, distance);

    const ambient = new THREE.AmbientLight(0xfff0d2, 1.4);
    const directional = new THREE.DirectionalLight(0xffffff, 1.3);
    directional.position.set(4, 6, 3);
    scene.add(ambient, directional);

    const grid = new THREE.GridHelper(7.5, 15, 0x5f5f5f, 0x343434);
    grid.position.y = -0.05;
    scene.add(grid);

    const group = new THREE.Group();
    scene.add(group);
    let mixer = null;
    const clock = new THREE.Clock();

    const makeBox = (size, position, color) => {
        const geometry = new THREE.BoxGeometry(size[0], size[1], size[2]);
        const material = new THREE.MeshLambertMaterial({ color });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(position[0], position[1], position[2]);
        group.add(mesh);
        return mesh;
    };

    function buildFallbackSnail() {
        makeBox([2.4, 0.34, 0.8], [0.15, 0.18, 0], 0x4f8b36);
        makeBox([0.9, 0.52, 0.74], [-1.12, 0.42, 0], 0x5f9c41);
        makeBox([0.18, 0.9, 0.16], [-1.4, 1.0, -0.22], 0x6caf47);
        makeBox([0.18, 0.9, 0.16], [-1.4, 1.0, 0.22], 0x6caf47);
        makeBox([0.18, 0.18, 0.18], [-1.4, 1.48, -0.22], 0xf4ead9);
        makeBox([0.18, 0.18, 0.18], [-1.4, 1.48, 0.22], 0xf4ead9);
        makeBox([1.15, 1.15, 0.72], [0.45, 0.88, 0], 0x8b5a22);
        makeBox([0.72, 0.72, 0.78], [0.45, 0.88, 0], 0xb8873b);
        makeBox([0.32, 0.32, 0.84], [0.45, 0.88, 0], 0x5c3616);
        makeBox([0.5, 0.24, 0.74], [1.26, 0.32, 0], 0x3f762b);

        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(7, 4.5),
            new THREE.MeshLambertMaterial({ color: 0x1f2f19 })
        );
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -0.02;
        scene.add(floor);
    }

    async function loadExternalSnail() {
        const url = canvas.dataset.modelSrc;
        try {
            await new Promise((resolve, reject) => {
                const loader = new GLTFLoader();
                const handleLoad = (gltf) => {
                    const model = gltf.scene;
                    model.traverse((node) => {
                        if (node.isMesh) {
                            node.castShadow = false;
                            node.receiveShadow = false;
                            if (node.material && node.material.map) {
                                node.material.map.magFilter = THREE.NearestFilter;
                                node.material.map.minFilter = THREE.NearestFilter;
                            }
                        }
                    });

                    const box = new THREE.Box3().setFromObject(model);
                    const center = box.getCenter(new THREE.Vector3());
                    const size = box.getSize(new THREE.Vector3());
                    const maxAxis = Math.max(size.x, size.y, size.z) || 1;
                    model.position.sub(center);
                    model.scale.setScalar(2.6 / maxAxis);
                    group.add(model);
                    if (gltf.animations?.length) {
                        mixer = new THREE.AnimationMixer(model);
                        gltf.animations.forEach((clip) => mixer.clipAction(clip).play());
                    }
                    resolve();
                };

                if (window.SNAIL_GLTF_JSON) {
                    loader.parse(JSON.stringify(window.SNAIL_GLTF_JSON), "", handleLoad, reject);
                    return;
                }

                if (!url) {
                    reject(new Error("Missing model source"));
                    return;
                }

                loader.load(url, handleLoad, undefined, reject);
            });
            return true;
        } catch (error) {
            return false;
        }
    }

    const hasModel = await loadExternalSnail();
    if (!hasModel) buildFallbackSnail();

    let targetRotX = -0.14;
    let targetRotY = 2.6;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;

    function resize() {
        const rect = canvas.getBoundingClientRect();
        const width = Math.max(1, Math.floor(rect.width));
        const height = Math.max(1, Math.floor(rect.height));
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }

    function updateCamera() {
        camera.position.set(0, 2.2, distance);
        camera.lookAt(0, 0.55, 0);
    }

    canvas.addEventListener("pointerdown", (event) => {
        dragging = true;
        lastX = event.clientX;
        lastY = event.clientY;
        canvas.setPointerCapture(event.pointerId);
    });

    canvas.addEventListener("pointermove", (event) => {
        if (!dragging) return;
        const dx = event.clientX - lastX;
        const dy = event.clientY - lastY;
        lastX = event.clientX;
        lastY = event.clientY;
        targetRotY += dx * 0.01;
        targetRotX = Math.max(-0.9, Math.min(0.45, targetRotX + dy * 0.006));
    });

    canvas.addEventListener("pointerup", (event) => {
        dragging = false;
        canvas.releasePointerCapture(event.pointerId);
    });

    canvas.addEventListener("wheel", (event) => {
        event.preventDefault();
        distance = Math.max(3.6, Math.min(8, distance + event.deltaY * 0.004));
        updateCamera();
    }, { passive: false });

    function animate() {
        resize();
        if (mixer) mixer.update(clock.getDelta());
        if (!dragging) targetRotY += 0.004;
        group.rotation.x += (targetRotX - group.rotation.x) * 0.08;
        group.rotation.y += (targetRotY - group.rotation.y) * 0.08;
        updateCamera();
        renderer.render(scene, camera);
        window.requestAnimationFrame(animate);
    }

    animate();
}

document.addEventListener("DOMContentLoaded", () => {
    if (!window.location.hash) {
        window.scrollTo(0, 0);
    }
    setupLanguageCycle();
    setupProfileMenu();
    setupCopyButtons();
    setupPromptTabs();
    setupImagePreview();
    applyLanguage(getInitialLanguage());
    initSnailViewer();
});
