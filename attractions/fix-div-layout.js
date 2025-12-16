const fs = require('fs');
const path = require('path');

// 获取attractions目录下的所有HTML文件
const attractionsDir = path.join(__dirname);
const files = fs.readdirSync(attractionsDir)
    .filter(file => file.endsWith('.html'));

// 修复HTML结构问题
files.forEach(file => {
    const filePath = path.join(attractionsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 查找并修复所有</div><!-- 景区详情内容 -->的情况
    const fixedContent = content.replace(/<\/div><!-- 景区详情内容 -->/g, '</div>\n            <!-- 景区详情内容 -->');
    
    // 查找并修复所有</div><!-- 景区信息卡片 -->的情况
    const finalContent = fixedContent.replace(/<\/div><!-- 景区信息卡片 -->/g, '</div>\n            <!-- 景区信息卡片 -->');
    
    // 查找并修复所有</div><!-- 返回按钮 -->的情况
    const finalFinalContent = finalContent.replace(/<\/div><!-- 返回按钮 -->/g, '</div>\n            <!-- 返回按钮 -->');
    
    // 只有在内容发生变化时才写入文件
    if (content !== finalFinalContent) {
        fs.writeFileSync(filePath, finalFinalContent, 'utf8');
        console.log(`Fixed: ${file}`);
    }
});

console.log('All files fixed successfully!');
