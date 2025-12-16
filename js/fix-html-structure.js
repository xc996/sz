const fs = require('fs');
const path = require('path');

// 获取attractions目录下的所有HTML文件
const attractionsDir = path.join(__dirname, '..', 'attractions');
const files = fs.readdirSync(attractionsDir)
    .filter(file => file.endsWith('.html'));

// 修复HTML结构问题的正则表达式
const htmlStructureRegex = /<\/div><\/div>/g;

// 批量处理所有文件
files.forEach(file => {
    const filePath = path.join(attractionsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 修复HTML结构
    const fixedContent = content.replace(htmlStructureRegex, '</div>\n            </div>');
    
    // 只有在内容发生变化时才写入文件
    if (content !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`Fixed HTML structure in: ${file}`);
    }
});

console.log('All files processed successfully!');
