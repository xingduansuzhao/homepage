// 首页可编辑配置：
// 1. 修改首屏模块切换：heroStates
// 2. 修改四大入口文案：entries
// 3. 修改作者介绍：author
// 4. 修改平台链接：platforms
// 5. 修改 QQ 群号：qqGroups
const HOMEPAGE_CONFIG = {
    profileName: "星断肃昭",
    taobaoUrl: "https://m.tb.cn/h.7rYrnwT3m2rNXjD",
    githubUrl: "https://github.com/xingduansuzhao/",
    bilibiliUrl: "https://space.bilibili.com/3537121929332753",
    heroStates: [
        {
            id: "overview",
            name: "总览",
            isDefault: true,
            heroImage: "assets/images/homepage-hero-overview.png",
            thumbImage: "assets/images/homepage-hero-overview.png",
            title: "星断肃昭的模组开发入口",
            description: "从想法到实现，先选你现在最需要的模块。环境、代码、材质、模型四条路径分开走，少绕路，直接进入下一步。",
            primaryButtonText: "进入四大模块总览",
            primaryButtonUrl: "#modules-overview"
        },
        {
            id: "lazypack",
            name: "懒人包",
            eyebrow: "环境配置",
            heroImage: "assets/images/homepage-hero-workshop.png",
            thumbImage: "assets/images/homepage-hero-workshop.png",
            title: "先把环境跑起来",
            description: "解决新手最容易卡住的版本、依赖和启动问题。你不需要先和配置搏斗，先让开发环境能稳定打开。",
            primaryButtonText: "进入懒人包",
            primaryButtonUrl: "lazypack.html",
            secondaryButtonText: "观看代表视频",
            secondaryButtonUrl: "https://space.bilibili.com/3537121929332753"
        },
        {
            id: "code",
            name: "代码",
            eyebrow: "AI 生成代码",
            heroImage: "assets/images/homepage-hero-overview.png",
            thumbImage: "assets/images/homepage-hero-overview.png",
            title: "把功能真正做出来",
            description: "从第一个可运行功能开始，围绕提示词、Java 代码和模组工程推进。重点不是堆概念，而是把想法落到游戏里。",
            primaryButtonText: "进入代码模块",
            primaryButtonUrl: "aimod-dev.html",
            secondaryButtonText: "观看代表视频",
            secondaryButtonUrl: "https://space.bilibili.com/3537121929332753"
        },
        {
            id: "texture",
            name: "材质",
            eyebrow: "AI 绘制材质",
            heroImage: "assets/images/homepage-hero-maker.png",
            thumbImage: "assets/images/homepage-hero-maker.png",
            title: "让资源看起来能用",
            description: "处理像素贴图、调色、尺寸和资源规范。目标不是生成一张好看的图，而是做出能放进 Minecraft 的材质。",
            primaryButtonText: "进入材质模块",
            primaryButtonUrl: "texture.html",
            secondaryButtonText: "观看代表视频",
            secondaryButtonUrl: "https://space.bilibili.com/3537121929332753"
        },
        {
            id: "model",
            name: "模型",
            eyebrow: "AI 制作模型",
            heroImage: "assets/images/homepage-hero-reference.png",
            thumbImage: "assets/images/homepage-hero-reference.png",
            title: "把实体做成形",
            description: "从 Blockbench 建模到展示效果，梳理实体、道具和动画的制作路径。先掌握流程，再去打磨细节。",
            primaryButtonText: "进入模型模块",
            primaryButtonUrl: "model.html",
            secondaryButtonText: "观看代表视频",
            secondaryButtonUrl: "https://space.bilibili.com/3537121929332753"
        }
    ],
    entries: [
        {
            title: "懒人包",
            eyebrow: "环境配置",
            description: "一键启动开发环境，优先解决新手最容易卡住的安装、版本和依赖问题。",
            tags: ["整合包", "启动器", "环境搭建"],
            cta: "进入懒人包",
            href: "lazypack.html",
            tone: "green",
            posterTitle: "LAZY PACK",
            posterMeta: "Forge / Fabric"
        },
        {
            title: "代码",
            eyebrow: "AI 生成代码",
            description: "围绕模组开发主流程组织教程、示例工程和常用工具，减少从想法到实现的损耗。",
            tags: ["教程文档", "示例工程", "开发工具"],
            cta: "进入代码模块",
            href: "aimod-dev.html",
            tone: "blue",
            posterTitle: "CODE",
            posterMeta: "Prompt / API / Java"
        },
        {
            title: "材质",
            eyebrow: "AI 绘制材质",
            description: "处理贴图制作、像素统一和资源输出，让视觉风格和游戏内表现保持一致。",
            tags: ["贴图教程", "材质包", "资源规范"],
            cta: "进入材质模块",
            href: "texture.html",
            tone: "amber",
            posterTitle: "PIXEL",
            posterMeta: "Texture / Palette"
        },
        {
            title: "模型",
            eyebrow: "AI 制作模型",
            description: "从 Blockbench 建模到动画预览，把实体、道具和展示效果串成完整流程。",
            tags: ["Blockbench", "模型流程", "动画预览"],
            cta: "进入模型模块",
            href: "model.html",
            tone: "stone",
            posterTitle: "MODEL",
            posterMeta: "Blockbench / Rig"
        }
    ],
    author: {
        name: "星断肃昭",
        text: "我是一名专注于 Minecraft 模组开发教学的创作者，主要分享懒人包、AI 写代码、AI 画材质和 AI 做模型相关内容。这个首页不是商店目录，而是把不同学习路径整理成清晰入口，方便你按自己现在的阶段直接进入。"
    },
    platforms: [
        {
            eyebrow: "教程平台",
            title: "哔哩哔哩",
            description: "完整视频教程与系列内容。",
            icon: "assets/images/bilibili.png",
            href: "https://space.bilibili.com/3537121929332753",
            frame: "wood"
        },
        {
            eyebrow: "教程平台",
            title: "抖音",
            description: "短视频更新与演示内容。",
            icon: "assets/images/douyin.png",
            href: "https://www.douyin.com/user/MS4wLjABAAAAZQfWj15fBLrPBch-VEHqMnedWKUx4QPXYcTV1DIiShOI3E8LlvSHZQLET2nRU_IH?from_tab_name=main",
            frame: "wood"
        },
        {
            eyebrow: "材质分享",
            title: "小红书",
            description: "材质、头像与灵感分享。",
            icon: "assets/images/xiaohongshu.png",
            href: "https://xhslink.com/m/60Vb7ahz7JE",
            frame: "wood"
        },
        {
            eyebrow: "商店",
            title: "淘宝个人店铺",
            description: "查看店铺与相关内容。",
            href: "https://m.tb.cn/h.7rYrnwT3m2rNXjD",
            frame: "wood",
            taobao: true
        },
        {
            eyebrow: "教程源码",
            title: "GitHub",
            description: "查看源码与项目文件。",
            icon: "assets/images/github.png",
            href: "https://github.com/xingduansuzhao/",
            frame: "stone"
        }
    ],
    qqGroups: [
        { title: "QQ 群 1", number: "897257355" },
        { title: "QQ 群 2", number: "792419382" },
        { title: "QQ 群 3", number: "750065527" }
    ]
};

function isExternalUrl(url) {
    return /^https?:\/\//.test(url);
}

function renderHeroSwitcher() {
    const states = HOMEPAGE_CONFIG.heroStates;
    const image = document.getElementById("heroStateImage");
    const title = document.getElementById("heroStateTitle");
    const desc = document.getElementById("heroStateDesc");
    const actions = document.getElementById("heroStateActions");
    const strip = document.getElementById("moduleStrip");
    const root = document.querySelector(".hero-switcher");
    let activeStateId = states.find((state) => state.isDefault)?.id || states[0].id;

    const moduleStates = states.filter((state) => !state.isDefault);

    const renderActions = (state) => {
        actions.innerHTML = "";

        const primary = document.createElement("a");
        primary.className = "hero-info__button hero-info__button--primary";
        primary.href = state.primaryButtonUrl;
        primary.textContent = state.primaryButtonText;
        if (isExternalUrl(state.primaryButtonUrl)) {
            primary.target = "_blank";
            primary.rel = "noopener";
        }
        actions.appendChild(primary);

        if (state.secondaryButtonText && state.secondaryButtonUrl) {
            const secondary = document.createElement("a");
            secondary.className = "hero-info__button hero-info__button--secondary";
            secondary.href = state.secondaryButtonUrl;
            secondary.textContent = state.secondaryButtonText;
            if (isExternalUrl(state.secondaryButtonUrl)) {
                secondary.target = "_blank";
                secondary.rel = "noopener";
            }
            actions.appendChild(secondary);
        }
    };

    const setState = (stateId) => {
        const state = states.find((item) => item.id === stateId) || states[0];
        activeStateId = state.id;

        root.dataset.activeState = state.id;
        image.classList.add("is-switching");
        window.setTimeout(() => image.classList.remove("is-switching"), 180);

        image.src = state.heroImage;
        image.alt = `${state.name}模块横幅图`;
        title.textContent = state.title;
        desc.textContent = state.description;
        renderActions(state);

        strip.querySelectorAll(".module-thumb").forEach((button) => {
            const isActive = button.dataset.stateId === activeStateId;
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });
    };

    strip.innerHTML = "";
    moduleStates.forEach((state) => {
        const button = document.createElement("button");
        button.className = `module-thumb module-thumb--${state.id}`;
        button.type = "button";
        button.dataset.stateId = state.id;
        button.setAttribute("aria-pressed", "false");
        const thumbUrl = new URL(state.thumbImage, window.location.href).href;
        button.style.setProperty("--thumb-image", `url("${thumbUrl}")`);
        button.innerHTML = `
            <span class="module-thumb__media" aria-hidden="true"></span>
            <span class="module-thumb__copy">
                <span class="module-thumb__eyebrow">${state.eyebrow}</span>
                <span class="module-thumb__title">${state.name}</span>
            </span>
        `;
        button.addEventListener("click", () => setState(state.id));
        strip.appendChild(button);
    });

    setState(activeStateId);
}

function renderEntries() {
    const grid = document.getElementById("entryGrid");
    grid.innerHTML = "";

    HOMEPAGE_CONFIG.entries.forEach((entry) => {
        const card = document.createElement("a");
        card.className = `entry-card entry-card--${entry.tone}`;
        card.href = entry.href;
        card.innerHTML = `
            <div class="entry-card__media">
                <div class="entry-card__poster">
                    <div class="entry-card__poster-meta">${entry.posterMeta}</div>
                    <div class="entry-card__poster-title">${entry.posterTitle}</div>
                </div>
            </div>
            <div class="entry-card__body">
                <div class="entry-card__eyebrow">${entry.eyebrow}</div>
                <h2 class="entry-card__title">${entry.title}</h2>
                <p class="entry-card__desc">${entry.description}</p>
                <div class="entry-card__tags">
                    ${entry.tags.map((tag) => `<span class="entry-card__tag">${tag}</span>`).join("")}
                </div>
                <div class="entry-card__cta">
                    <span>${entry.cta}</span>
                    <span class="entry-card__cta-arrow" aria-hidden="true">→</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderAuthor() {
    document.getElementById("profileName").textContent = HOMEPAGE_CONFIG.profileName;
    document.getElementById("authorName").textContent = HOMEPAGE_CONFIG.author.name;
    document.getElementById("authorText").textContent = HOMEPAGE_CONFIG.author.text;
}

function renderPlatforms() {
    const grid = document.getElementById("platformGrid");
    grid.innerHTML = "";

    HOMEPAGE_CONFIG.platforms.forEach((platform) => {
        const card = document.createElement("a");
        card.className = `platform-card ${platform.frame === "stone" ? "platform-card--stone" : ""}`;
        card.href = platform.href;
        card.target = "_blank";
        card.rel = "noopener";

        const iconMarkup = platform.taobao
            ? `<div class="platform-card__icon-wrap platform-card__icon-wrap--taobao">淘</div>`
            : `<div class="platform-card__icon-wrap"><img class="platform-card__icon" src="${platform.icon}" alt="${platform.title}"></div>`;

        card.innerHTML = `
            <div class="platform-card__eyebrow">${platform.eyebrow}</div>
            ${iconMarkup}
            <div class="platform-card__title">${platform.title}</div>
            <div class="platform-card__desc">${platform.description}</div>
        `;

        grid.appendChild(card);
    });
}

function renderQQGroups() {
    const grid = document.getElementById("qqGrid");
    grid.innerHTML = "";

    HOMEPAGE_CONFIG.qqGroups.forEach((group) => {
        const card = document.createElement("div");
        card.className = "qq-card";
        card.innerHTML = `
            <img class="qq-card__icon" src="assets/images/qq.png" alt="QQ">
            <div class="qq-card__content">
                <h3 class="qq-card__title">${group.title}</h3>
                <p class="qq-card__number">${group.number}</p>
            </div>
            <button class="qq-card__copy" type="button" data-copy="${group.number}">点击复制</button>
        `;
        grid.appendChild(card);
    });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("is-visible");

    window.clearTimeout(showToast._timer);
    showToast._timer = window.setTimeout(() => {
        toast.classList.remove("is-visible");
    }, 1800);
}

function setupCopyButtons() {
    document.addEventListener("click", async (event) => {
        const button = event.target.closest("[data-copy]");
        if (!button) {
            return;
        }

        const text = button.getAttribute("data-copy");
        try {
            await navigator.clipboard.writeText(text);
            showToast(`已复制群号 ${text}`);
        } catch (error) {
            showToast("复制失败，请手动复制");
        }
    });
}

function setupProfileMenu() {
    const root = document.getElementById("profileMenu");
    const trigger = document.getElementById("profileTrigger");
    const panel = document.getElementById("profilePanel");

    const openMenu = () => {
        root.classList.add("is-open");
        panel.hidden = false;
        trigger.setAttribute("aria-expanded", "true");
    };

    const closeMenu = () => {
        root.classList.remove("is-open");
        panel.hidden = true;
        trigger.setAttribute("aria-expanded", "false");
    };

    trigger.addEventListener("click", (event) => {
        event.stopPropagation();
        if (root.classList.contains("is-open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    panel.addEventListener("click", () => {
        closeMenu();
    });

    document.addEventListener("click", (event) => {
        if (!root.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}

function applyStaticLinks() {
    document.getElementById("menuTaobao").href = HOMEPAGE_CONFIG.taobaoUrl;
    document.getElementById("menuGithub").href = HOMEPAGE_CONFIG.githubUrl;
}

document.addEventListener("DOMContentLoaded", () => {
    applyStaticLinks();
    renderHeroSwitcher();
    renderEntries();
    renderAuthor();
    renderPlatforms();
    renderQQGroups();
    setupProfileMenu();
    setupCopyButtons();
});
