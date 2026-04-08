/* ============================================
   QQ群状态配置
   将群号设为 true 表示已满人，页面会自动显示"已满"标签
   ============================================ */
var QQ_GROUP_FULL = {
    '897257355': false,
    '792419382': true,
    '750065527': true,
};

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        const t = document.getElementById('toast');
        t.classList.add('show');
        t.innerHTML = "✅ 群号 " + text + " 已复制！";
        setTimeout(() => t.classList.remove('show'), 2000);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('[data-qq-group]');
    cards.forEach(function(card) {
        var groupId = card.getAttribute('data-qq-group');
        if (QQ_GROUP_FULL[groupId]) {
            var badge = document.createElement('span');
            badge.className = 'qq-full-badge';
            badge.textContent = '已满';
            card.querySelector('.qq-card-text').appendChild(badge);
            card.classList.add('qq-card-full');
        }
    });
});

/* Pixel converter entrance (hardcoded flag)
   Set to `true` to show the entrance on homepage.
   Set to `false` to hide/disable the entrance (tool page still accessible via direct URL). */
var ENABLE_PIXEL_CONVERTER_ENTRANCE = true;
document.addEventListener('DOMContentLoaded', function() {
    if (ENABLE_PIXEL_CONVERTER_ENTRANCE) return;

    var entrance = document.getElementById('pixelConverterEntrance');
    if (!entrance) return;

    entrance.classList.add('entrance-disabled');
    entrance.setAttribute('aria-disabled', 'true');
    entrance.setAttribute('tabindex', '-1');
    entrance.removeAttribute('href');

    // Hide existing texts and replace with a single large label.
    var content = entrance.querySelector('.entrance-content');
    if (content) {
        content.style.display = 'none';
    }
    var disabledLabel = document.createElement('div');
    disabledLabel.className = 'entrance-disabled-label';
    disabledLabel.innerHTML = '16<span class="entrance-mul">&times;</span>16材质AI方案';
    entrance.appendChild(disabledLabel);

    // Make the whole area non-clickable (including accidental event handlers).
    entrance.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
    }, true);
});

/* Prompt 一键复制 */
function copyPrompt(btn) {
    var card = btn.closest('.prompt-card');
    var body = card.querySelector('.prompt-card-body');
    var text = body.textContent || body.innerText;
    navigator.clipboard.writeText(text).then(function() {
        var t = document.getElementById('toast');
        t.classList.add('show');
        t.innerHTML = "✅ Prompt 已复制到剪贴板！";
        setTimeout(function() { t.classList.remove('show'); }, 2000);
        btn.textContent = '✅ 已复制';
        setTimeout(function() { btn.textContent = '📋 一键复制'; }, 2000);
    });
}

/* 千问AI接入指南 Markdown 下载 */
function downloadGuideMarkdown() {
    var content = '# 千问AI接入指南\n\n';
    content += '> 🟢 免费 · 只需3步 · 10分钟完成\n\n';
    content += '## 10分钟搭好AI编程环境\n\n';
    content += '只需三步，即可在IDE中接入AI编程助手（通义灵码 Lingma），开始AI辅助模组开发。\n\n';
    content += '---\n\n';
    content += '## Step 1：安装Lingma插件\n\n';
    content += '打开 IntelliJ IDEA → Settings → Plugins，搜索 "Lingma"，安装通义灵码插件后重启IDE。\n\n';
    content += '---\n\n';
    content += '## Step 2：登录阿里云账号\n\n';
    content += '在Lingma面板中点击登录，选择 "阿里云中国站账号登录"，使用支付宝或阿里云账号即可。\n\n';
    content += '---\n\n';
    content += '## Step 3：开始使用\n\n';
    content += '登录成功后，在对话框中切换到 "智能体" 模式，输入问题即可开始AI辅助编程。\n\n';
    content += '---\n\n';
    content += '## 下一步\n\n';
    content += '- [第一个AI模组 Prompt](free-prompt-first-mod.html) - 用完整Prompt跑出你的第一个可运行模组\n';
    content += '- [AI开发避坑指南](free-guide-pitfalls.html) - 提前了解常见错误，减少调试时间\n';

    downloadTextFile('guide-qianwen-ai.md', content);
}

/* AI开发避坑指南 Markdown 下载 */
function downloadPitfallsMarkdown() {
    var content = '# AI开发避坑指南\n\n';
    content += '> 🟠 免费 · 经验型内容 · 阅读5分钟 · 长期受用\n\n';
    content += 'AI辅助模组开发中最常见的8个坑，每个坑都给出现象、原因和修复方法。\n\n';
    content += '---\n\n';
    content += '## 坑 1：AI生成的代码直接报错\n';
    content += '- **现象**：粘贴AI代码后IDE标红，编译不通过\n';
    content += '- **原因**：AI使用了旧版API或错误的import\n';
    content += '- **修复**：Prompt中明确指定版本号，把报错信息完整给AI\n\n';
    content += '## 坑 2：Mixin注入不生效或崩溃\n';
    content += '- **现象**：Mixin写了但运行没效果，或游戏崩溃\n';
    content += '- **原因**：mixin.json未注册、注入点方法名不匹配\n';
    content += '- **修复**：先用@Inject(at=HEAD)验证，再尝试复杂注入\n\n';
    content += '## 坑 3：注册项找不到 / NullPointer\n';
    content += '- **现象**：运行时NullPointerException\n';
    content += '- **原因**：DeferredRegister注册时机不对\n';
    content += '- **修复**：确保register()在模组构造函数中调用，用Supplier延迟获取\n\n';
    content += '## 坑 4：AI对Minecraft API的"幻觉"\n';
    content += '- **现象**：AI写出看似合理但实际不存在的API\n';
    content += '- **原因**：AI训练数据过时，混淆了不同版本API\n';
    content += '- **修复**：Prompt中提供已有import列表，要求AI标注不确定的API\n\n';
    content += '## 坑 5：Gradle构建失败\n';
    content += '- **现象**：gradlew build 或 runClient 报错\n';
    content += '- **原因**：build.gradle配置错误、Java版本不匹配\n';
    content += '- **修复**：确认Java 21，用官方MDK模板，把完整日志给AI\n\n';
    content += '## 坑 6：资源文件路径写错\n';
    content += '- **现象**：物品显示紫黑色方块或键名\n';
    content += '- **原因**：模型/语言/材质文件路径不正确\n';
    content += '- **修复**：让AI每次给出文件内容时附上完整路径\n\n';
    content += '## 坑 7：AI上下文丢失\n';
    content += '- **现象**：AI后续代码和之前不兼容\n';
    content += '- **原因**：对话太长，AI"忘记"之前代码\n';
    content += '- **修复**：每5~6轮开新对话，重新提供项目上下文\n\n';
    content += '## 坑 8：版本混淆（Forge vs NeoForge vs Fabric）\n';
    content += '- **现象**：AI生成了错误加载器的代码\n';
    content += '- **原因**：AI默认生成Forge代码，NeoForge/Fabric API差异大\n';
    content += '- **修复**：每个Prompt开头写明："NeoForge 1.21（非Forge非Fabric）"\n\n';
    content += '---\n\n';
    content += '## 3条核心原则\n\n';
    content += '1. **Prompt要精确** - 每次都带上版本号、加载器类型、已有代码结构\n';
    content += '2. **报错直接给AI** - 完整报错信息是AI最好的修复线索\n';
    content += '3. **小步验证** - 每写一个功能就运行测试，不要攒一堆再跑\n';

    downloadTextFile('guide-pitfalls.md', content);
}

/* 通用文本文件下载 */
function downloadTextFile(filename, content) {
    var blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    var t = document.getElementById('toast');
    t.classList.add('show');
    t.innerHTML = "✅ " + filename + " 已下载！";
    setTimeout(function() { t.classList.remove('show'); }, 2000);
}
