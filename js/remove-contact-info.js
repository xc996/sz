const fs = require('fs');
const path = require('path');

// 获取attractions目录下的所有HTML文件
const attractionsDir = path.join(__dirname, '..', 'attractions');
const files = fs.readdirSync(attractionsDir)
    .filter(file => file.endsWith('.html'));

// 删除联系方式卡片的正则表达式
const contactCardRegex = /\s*<div class="info-card">\s*<h3><i class="fas fa-phone"><\/i> 联系方式<\/h3>\s*<p>咨询电话：[\d-]+<\/p>\s*<\/div>/g;

// 修复HTML结构问题
files.forEach(file => {
    const filePath = path.join(attractionsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 删除联系方式卡片
    const fixedContent = content.replace(contactCardRegex, '');
    
    // 只有在内容发生变化时才写入文件
    if (content !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`Fixed: ${file}`);
    }
});

console.log('All contact info cards have been removed successfully!');
