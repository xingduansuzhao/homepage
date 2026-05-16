const CODE_I18N = {
    "zh-CN": {
        "meta.title": "AI 写代码｜星断肃昭",
        "nav.home": "首页",
        "nav.lazypack": "懒人包",
        "nav.code": "代码",
        "nav.texture": "材质",
        "nav.model": "模型",
        "menu.platforms": "内容平台",
        "menu.taobao": "淘宝个人店铺",
        "menu.qq": "加入 QQ 群",
        "hero.eyebrow": "AI 写代码",
        "hero.title": "用 AI 跑出你的第一个模组功能",
        "hero.desc": "这页先帮你把最基础的链路跑通：接入 AI、提出一个小功能、把代码放回工程里验证。你不需要一开始就懂很多 Java，先看到功能在游戏里动起来。",
        "hero.primary": "先看运行效果",
        "hero.secondary": "开始基础教程",
        "demo.kicker": "实战效果",
        "demo.title": "AI 辅助写出的「制箭台」模组",
        "demo.desc": "页面下面的基础教程，就是为了让你先跑通类似这样的小功能。看得见效果，学习才不会变成空讲概念。",
        "demo.primary": "跟着基础路线试",
        "demo.secondary": "了解工具包路线",
        "start.title": "先选你的开始方式",
        "start.subtitle": "两种方式都能开始。IDEA 插件更贴近工程，网页版千问更适合随手问概念、问报错和改小段代码。",
        "idea.kicker": "方式一",
        "idea.title": "在 IntelliJ IDEA 里接入通义灵码",
        "idea.desc": "适合已经用懒人包或模板打开了模组工程的人。下面三步图可以点开看大图，不用对着缩略图硬猜。",
        "idea.step1Title": "安装插件",
        "idea.step1": "在 Plugins 搜索 Lingma，安装后重启 IDEA。",
        "idea.step2Title": "登录账号",
        "idea.step2": "打开插件面板，按提示登录账号。",
        "idea.step3Title": "开始提问",
        "idea.step3": "切到对话或智能体模式，从解释代码和修改小功能开始。",
        "idea.preview": "点击查看大图",
        "web.kicker": "方式二",
        "web.title": "用网页版千问讨论 Minecraft 问题",
        "web.desc": "网页版适合低门槛提问：解释概念、分析报错、让 AI 改一小段代码、整理下一步该做什么。它的局限也很明确：不能直接操作你的模组文件，你需要手动复制代码并运行验证。",
        "web.cta": "打开 chat.qwen.ai",
        "web.rule1": "先说清楚 MC 版本、加载器、你正在改哪个功能。",
        "web.rule2": "让 AI 输出文件路径和完整代码片段，不要只给零散说明。",
        "web.rule3": "复制进工程后立刻运行，报错再把日志和相关文件贴回去。",
        "prompt.kicker": "第一个功能",
        "prompt.title": "先让 AI 做一个小功能",
        "prompt.lead": "不要一上来要求 AI 做完整系统。先让它做一个能在游戏里验证的小变化，你会更快知道这条路线是不是跑通了。",
        "prompt.copy": "复制提问模板",
        "prompt.next": "看常见卡点",
        "prompt.boxTitle": "可复制模板",
        "prompt.template": "我正在做一个 Minecraft 模组，请先按下面信息理解项目，再帮我实现一个最小功能。\n\n版本与加载器：\n- Minecraft 版本：填写你的版本\n- 加载器：Forge / Fabric / NeoForge 三选一\n- 当前工程状态：能否正常 runClient\n\n我要实现的功能：\n- 用一句话说明功能，不要一次写太大\n\n请你输出：\n1. 需要新增或修改的文件路径\n2. 每个文件的完整代码或关键修改片段\n3. 我应该运行什么命令验证\n4. 如果报错，我应该把哪些日志发给你继续排查",
        "flow.one.title": "先描述小功能",
        "flow.one.desc": "例如：玩家站在某个方块上时，每秒触发一个简单效果。",
        "flow.two.title": "让 AI 给路径",
        "flow.two.desc": "不要只要代码。路径、注册位置、资源文件都要说清楚。",
        "flow.three.title": "复制后立刻跑",
        "flow.three.desc": "一次只验证一个变化，别攒一堆代码再排查。",
        "pitfalls.title": "常见卡点",
        "pitfalls.subtitle": "这些问题不需要一次全学会。遇到哪类问题，再回来看对应卡片。",
        "pitfall.one.title": "版本混在一起",
        "pitfall.one.desc": "每次提问都写清楚 MC 版本和加载器，不要让 AI 自己猜。",
        "pitfall.two.title": "只贴一句报错",
        "pitfall.two.desc": "把完整错误、关键文件、你刚改了什么一起发出去。",
        "pitfall.three.title": "一次需求太大",
        "pitfall.three.desc": "先做可验证的小功能，再让 AI 继续加效果和细节。",
        "pitfall.four.title": "没有运行验证",
        "pitfall.four.desc": "AI 写完不等于完成。能进游戏、能触发效果，才算过了一步。",
        "pitfall.five.title": "文件路径不清楚",
        "pitfall.five.desc": "要求 AI 标出路径，否则新手很容易把代码放错位置。",
        "pitfall.six.title": "对话拖太长",
        "pitfall.six.desc": "回答变乱时，整理当前工程状态，开一个新对话继续。",
        "toolkit.kicker": "继续往下做",
        "toolkit.title": "当你想把 AI 写代码变成长期工作流",
        "toolkit.lead": "这个页面解决的是第一次上手。AI 模组开发效率工具包的代码板块，整理的是更长期的开发方式：怎么选工具、怎么保持 AI 使用续航、怎么把常见模组功能做成可复用流程。",
        "toolkit.point1.title": "写模组更快的 AI",
        "toolkit.point1.desc": "不是只问一个网页聊天框，而是按模组开发场景选择更合适的 AI 工具。",
        "toolkit.point2.title": "0 成本长时间使用 AI",
        "toolkit.point2.desc": "解决写到一半额度不够、工具断掉、反复切换的麻烦。",
        "toolkit.point3.title": "更多现成代码流程",
        "toolkit.point3.desc": "方块、物品、实体、界面等常见开发方向，不用每次从空白开始组织。",
        "toolkit.cta": "查看工具包详情",
        "footer.meta": "© 星断肃昭 · Minecraft 模组开发入口",
        "footer.desc": "整理懒人包、代码、材质、模型相关内容，方便按阶段进入。",
        "toast.copy": "提问模板已复制"
    },
    "zh-TW": {
        "meta.title": "AI 寫程式碼｜星斷肅昭",
        "nav.home": "首頁",
        "nav.lazypack": "懶人包",
        "nav.code": "程式碼",
        "nav.texture": "材質",
        "nav.model": "模型",
        "menu.platforms": "內容平台",
        "menu.taobao": "淘寶個人店鋪",
        "menu.qq": "加入 QQ 群",
        "hero.eyebrow": "AI 寫程式碼",
        "hero.title": "用 AI 跑出你的第一個模組功能",
        "hero.desc": "這頁先幫你把最基礎的鏈路跑通：接入 AI、提出一個小功能、把程式碼放回工程裡驗證。你不需要一開始就懂很多 Java，先看到功能在遊戲裡動起來。",
        "hero.primary": "先看運行效果",
        "hero.secondary": "開始基礎教程",
        "demo.kicker": "實戰效果",
        "demo.title": "AI 輔助寫出的「製箭台」模組",
        "demo.desc": "頁面下面的基礎教程，就是為了讓你先跑通類似這樣的小功能。看得見效果，學習才不會變成空講概念。",
        "demo.primary": "跟著基礎路線試",
        "demo.secondary": "了解工具包路線",
        "start.title": "先選你的開始方式",
        "start.subtitle": "兩種方式都能開始。IDEA 插件更貼近工程，網頁版千問更適合隨手問概念、問報錯和改小段程式碼。",
        "idea.kicker": "方式一",
        "idea.title": "在 IntelliJ IDEA 裡接入通義靈碼",
        "idea.desc": "適合已經用懶人包或模板打開了模組工程的人。下面三步圖可以點開看大圖，不用對著縮略圖硬猜。",
        "idea.step1Title": "安裝插件",
        "idea.step1": "在 Plugins 搜尋 Lingma，安裝後重啟 IDEA。",
        "idea.step2Title": "登入帳號",
        "idea.step2": "打開插件面板，按提示登入帳號。",
        "idea.step3Title": "開始提問",
        "idea.step3": "切到對話或智能體模式，從解釋程式碼和修改小功能開始。",
        "idea.preview": "點擊查看大圖",
        "web.kicker": "方式二",
        "web.title": "用網頁版千問討論 Minecraft 問題",
        "web.desc": "網頁版適合低門檻提問：解釋概念、分析報錯、讓 AI 改一小段程式碼、整理下一步該做什麼。它的限制也很明確：不能直接操作你的模組檔案，你需要手動複製程式碼並運行驗證。",
        "web.cta": "打開 chat.qwen.ai",
        "web.rule1": "先說清楚 MC 版本、載入器、你正在改哪個功能。",
        "web.rule2": "讓 AI 輸出檔案路徑和完整程式碼片段，不要只給零散說明。",
        "web.rule3": "複製進工程後立刻運行，報錯再把日誌和相關檔案貼回去。",
        "prompt.kicker": "第一個功能",
        "prompt.title": "先讓 AI 做一個小功能",
        "prompt.lead": "不要一上來要求 AI 做完整系統。先讓它做一個能在遊戲裡驗證的小變化，你會更快知道這條路線是不是跑通了。",
        "prompt.copy": "複製提問模板",
        "prompt.next": "看常見卡點",
        "prompt.boxTitle": "可複製模板",
        "prompt.template": "我正在做一個 Minecraft 模組，請先按下面資訊理解專案，再幫我實現一個最小功能。\n\n版本與載入器：\n- Minecraft 版本：填寫你的版本\n- 載入器：Forge / Fabric / NeoForge 三選一\n- 目前工程狀態：能否正常 runClient\n\n我要實現的功能：\n- 用一句話說明功能，不要一次寫太大\n\n請你輸出：\n1. 需要新增或修改的檔案路徑\n2. 每個檔案的完整程式碼或關鍵修改片段\n3. 我應該執行什麼命令驗證\n4. 如果報錯，我應該把哪些日誌發給你繼續排查",
        "flow.one.title": "先描述小功能",
        "flow.one.desc": "例如：玩家站在某個方塊上時，每秒觸發一個簡單效果。",
        "flow.two.title": "讓 AI 給路徑",
        "flow.two.desc": "不要只要程式碼。路徑、註冊位置、資源檔案都要說清楚。",
        "flow.three.title": "複製後立刻跑",
        "flow.three.desc": "一次只驗證一個變化，別攢一堆程式碼再排查。",
        "pitfalls.title": "常見卡點",
        "pitfalls.subtitle": "這些問題不需要一次全學會。遇到哪類問題，再回來看對應卡片。",
        "pitfall.one.title": "版本混在一起",
        "pitfall.one.desc": "每次提問都寫清楚 MC 版本和載入器，不要讓 AI 自己猜。",
        "pitfall.two.title": "只貼一句報錯",
        "pitfall.two.desc": "把完整錯誤、關鍵檔案、你剛改了什麼一起發出去。",
        "pitfall.three.title": "一次需求太大",
        "pitfall.three.desc": "先做可驗證的小功能，再讓 AI 繼續加效果和細節。",
        "pitfall.four.title": "沒有運行驗證",
        "pitfall.four.desc": "AI 寫完不等於完成。能進遊戲、能觸發效果，才算過了一步。",
        "pitfall.five.title": "檔案路徑不清楚",
        "pitfall.five.desc": "要求 AI 標出路徑，否則新手很容易把程式碼放錯位置。",
        "pitfall.six.title": "對話拖太長",
        "pitfall.six.desc": "回答變亂時，整理目前工程狀態，開一個新對話繼續。",
        "toolkit.kicker": "繼續往下做",
        "toolkit.title": "當你想把 AI 寫程式碼變成長期工作流",
        "toolkit.lead": "這個頁面解決的是第一次上手。AI 模組開發效率工具包的程式碼板塊，整理的是更長期的開發方式：怎麼選工具、怎麼保持 AI 使用續航、怎麼把常見模組功能做成可複用流程。",
        "toolkit.point1.title": "寫模組更快的 AI",
        "toolkit.point1.desc": "不是只問一個網頁聊天框，而是按模組開發場景選擇更合適的 AI 工具。",
        "toolkit.point2.title": "0 成本長時間使用 AI",
        "toolkit.point2.desc": "解決寫到一半額度不夠、工具斷掉、反覆切換的麻煩。",
        "toolkit.point3.title": "更多現成程式碼流程",
        "toolkit.point3.desc": "方塊、物品、實體、介面等常見開發方向，不用每次從空白開始組織。",
        "toolkit.cta": "查看工具包詳情",
        "footer.meta": "© 星斷肅昭 · Minecraft 模組開發入口",
        "footer.desc": "整理懶人包、程式碼、材質、模型相關內容，方便按階段進入。",
        "toast.copy": "提問模板已複製"
    },
    en: {
        "meta.title": "AI Coding | Xingduan Suzhao",
        "nav.home": "Home",
        "nav.lazypack": "Lazy Pack",
        "nav.code": "Code",
        "nav.texture": "Textures",
        "nav.model": "Models",
        "menu.platforms": "Platforms",
        "menu.taobao": "Taobao Store",
        "menu.qq": "Join QQ",
        "hero.eyebrow": "AI Coding",
        "hero.title": "Use AI to run your first mod feature",
        "hero.desc": "This page helps you complete the basic loop first: connect AI, describe one small feature, put the code back into the project, and verify it. You do not need to know a lot of Java first. Start by seeing something move in game.",
        "hero.primary": "See the result first",
        "hero.secondary": "Start the basics",
        "demo.kicker": "Working Demo",
        "demo.title": "An AI-assisted fletching table mod",
        "demo.desc": "The basic guide below is designed to help you run a small feature like this first. Seeing an effect in game is better than reading abstract explanations.",
        "demo.primary": "Try the basic path",
        "demo.secondary": "Learn the toolkit path",
        "start.title": "Choose your start path first",
        "start.subtitle": "Both paths work. The IDEA plugin stays closer to your project, while Qwen Web is better for quick concepts, error questions, and small code edits.",
        "idea.kicker": "Path One",
        "idea.title": "Connect Tongyi Lingma in IntelliJ IDEA",
        "idea.desc": "Best for people who already opened a mod project with a lazy pack or template. Click the screenshots to view them clearly.",
        "idea.step1Title": "Install plugin",
        "idea.step1": "Search Lingma in Plugins, install it, then restart IDEA.",
        "idea.step2Title": "Sign in",
        "idea.step2": "Open the plugin panel and sign in as prompted.",
        "idea.step3Title": "Start asking",
        "idea.step3": "Use chat or agent mode. Start with explaining code and editing small features.",
        "idea.preview": "Click to preview",
        "web.kicker": "Path Two",
        "web.title": "Use Qwen Web for Minecraft questions",
        "web.desc": "The web version is good for low-friction questions: concepts, errors, small code edits, and next-step planning. Its limit is clear: it cannot directly operate your mod files, so you need to copy code into the project and run it yourself.",
        "web.cta": "Open chat.qwen.ai",
        "web.rule1": "State the MC version, loader, and the feature you are editing.",
        "web.rule2": "Ask for file paths and complete snippets, not scattered advice.",
        "web.rule3": "Paste into the project, run it, then send logs and files back if it fails.",
        "prompt.kicker": "First Feature",
        "prompt.title": "Ask AI for one small feature first",
        "prompt.lead": "Do not ask AI for a full system right away. Start with one small change you can verify in game, then you will know whether the path is working.",
        "prompt.copy": "Copy prompt template",
        "prompt.next": "See common blockers",
        "prompt.boxTitle": "Copyable Template",
        "prompt.template": "I am making a Minecraft mod. Please understand the project information below first, then help me implement one minimal feature.\n\nVersion and loader:\n- Minecraft version: fill in your version\n- Loader: Forge / Fabric / NeoForge\n- Current project state: whether runClient works\n\nFeature I want:\n- Describe it in one sentence. Do not make it too large.\n\nPlease output:\n1. File paths to add or modify\n2. Complete code or key edits for each file\n3. What command I should run to verify it\n4. If it fails, what logs I should send back for debugging",
        "flow.one.title": "Describe a small feature",
        "flow.one.desc": "Example: trigger a simple effect every second when a player stands on a certain block.",
        "flow.two.title": "Ask AI for paths",
        "flow.two.desc": "Do not ask for code only. Ask for paths, registration locations, and resource files.",
        "flow.three.title": "Run immediately",
        "flow.three.desc": "Verify one change at a time. Do not stack many edits before debugging.",
        "pitfalls.title": "Common Blockers",
        "pitfalls.subtitle": "You do not need to learn all of these at once. Come back to the matching card when you hit that kind of issue.",
        "pitfall.one.title": "Mixed versions",
        "pitfall.one.desc": "State the MC version and loader every time. Do not make AI guess.",
        "pitfall.two.title": "Only one error line",
        "pitfall.two.desc": "Send the full error, relevant files, and what you just changed.",
        "pitfall.three.title": "Request is too large",
        "pitfall.three.desc": "Build a verifiable small feature, then add effects and details.",
        "pitfall.four.title": "No run check",
        "pitfall.four.desc": "AI output is not completion. Entering the game and seeing the effect is one real step.",
        "pitfall.five.title": "Unclear file paths",
        "pitfall.five.desc": "Ask AI to mark paths, otherwise beginners often paste code into the wrong place.",
        "pitfall.six.title": "Conversation is too long",
        "pitfall.six.desc": "When answers get messy, summarize the project state and start a new chat.",
        "toolkit.kicker": "Keep Going",
        "toolkit.title": "When you want AI coding to become a long-term workflow",
        "toolkit.lead": "This page handles first-time use. The code section of the AI Mod Development Efficiency Toolkit organizes the longer-term workflow: how to choose tools, keep AI usage going, and turn common mod features into reusable development flows.",
        "toolkit.point1.title": "Faster AI for mod coding",
        "toolkit.point1.desc": "Do not rely on one web chat. Choose better AI tools by mod-development scenario.",
        "toolkit.point2.title": "Long AI usage at zero cost",
        "toolkit.point2.desc": "Reduce interruptions from quotas, tool breaks, and constant switching.",
        "toolkit.point3.title": "More ready coding flows",
        "toolkit.point3.desc": "Blocks, items, entities, screens, and other common directions do not need to start from a blank page every time.",
        "toolkit.cta": "View toolkit details",
        "footer.meta": "© Xingduan Suzhao · Minecraft Mod Development Hub",
        "footer.desc": "Organized entry points for lazy packs, code, textures, and models.",
        "toast.copy": "Prompt template copied"
    }
};

const DEFAULT_LANG = "zh-CN";
const LANG_ORDER = ["zh-CN", "zh-TW", "en"];
const LANG_LABEL = {
    "zh-CN": "简",
    "zh-TW": "繁",
    en: "EN"
};

function getInitialLanguage() {
    const saved = window.localStorage.getItem("site-lang") || window.localStorage.getItem("code-lang");
    if (saved && CODE_I18N[saved]) return saved;
    return DEFAULT_LANG;
}

function applyLanguage(lang) {
    const dict = CODE_I18N[lang] || CODE_I18N[DEFAULT_LANG];
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
        const key = node.dataset.i18n;
        if (dict[key]) node.textContent = dict[key];
    });

    document.querySelectorAll(".language-tabs__button").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.lang === lang);
    });

    const cycle = document.getElementById("languageCycle");
    if (cycle) cycle.textContent = LANG_LABEL[lang] || LANG_LABEL[DEFAULT_LANG];
    document.title = dict["meta.title"];
    window.localStorage.setItem("site-lang", lang);
    window.localStorage.setItem("code-lang", lang);
}

function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
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

function setupPromptCopy() {
    const button = document.querySelector("[data-copy-prompt]");
    const prompt = document.getElementById("starterPrompt");
    if (!button || !prompt) return;

    button.addEventListener("click", async () => {
        const lang = window.localStorage.getItem("site-lang") || window.localStorage.getItem("code-lang") || DEFAULT_LANG;
        const dict = CODE_I18N[lang] || CODE_I18N[DEFAULT_LANG];
        const text = prompt.textContent.trim();

        try {
            await navigator.clipboard.writeText(text);
            showToast(dict["toast.copy"]);
        } catch (error) {
            showToast(text);
        }
    });
}

function setupImagePreview() {
    const preview = document.getElementById("imagePreview");
    const image = document.getElementById("imagePreviewImg");
    const title = document.getElementById("imagePreviewTitle");
    if (!preview || !image || !title) return;

    const close = () => {
        preview.hidden = true;
        image.src = "";
        document.body.style.overflow = "";
    };

    document.querySelectorAll("[data-preview-src]").forEach((button) => {
        button.addEventListener("click", () => {
            image.src = button.dataset.previewSrc;
            image.alt = button.dataset.previewTitle || "";
            title.textContent = button.dataset.previewTitle || "";
            preview.hidden = false;
            document.body.style.overflow = "hidden";
        });
    });

    preview.querySelectorAll("[data-preview-close]").forEach((button) => {
        button.addEventListener("click", close);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !preview.hidden) close();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupLanguageCycle();
    setupProfileMenu();
    setupPromptCopy();
    setupImagePreview();

    document.querySelectorAll(".language-tabs__button").forEach((button) => {
        button.addEventListener("click", () => applyLanguage(button.dataset.lang));
    });

    applyLanguage(getInitialLanguage());
});
