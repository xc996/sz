const fs = require('fs');
const path = require('path');

// 获取所有详情页HTML文件
function getDetailPages() {
    const attractionsDir = './attractions';
    const files = fs.readdirSync(attractionsDir);
    return files
        .filter(file => file.endsWith('.html'))
        .map(file => path.join(attractionsDir, file));
}

const detailPages = getDetailPages();

// 遍历所有详情页
detailPages.forEach(pagePath => {
    console.log(`Processing ${pagePath}...`);
    
    // 读取文件内容
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // 检查是否需要修复
    if (content.includes('<div class="detail-header"') && content.includes('<div class="detail-meta"') && !content.includes('<div class="detail-meta">\n                    <span class="location">')) {
        console.log(`Fixing ${pagePath}...`);
    } else {
        console.log(`Skipping ${pagePath} (already fixed)`);
        return;
    }
    
    // 提取标题
    const titleMatch = content.match(/<h1 class="detail-title"[^>]*>([\s\S]*?)<\/h1>/);
    if (!titleMatch) {
        console.log(`Skipping ${pagePath} (no title found)`);
        return;
    }
    const title = titleMatch[1];
    
    // 提取位置
    const locationMatch = content.match(/<i class="fas fa-map-marker-alt"><\/i>\s*([^\n<]+)/);
    if (!locationMatch) {
        console.log(`Skipping ${pagePath} (no location found)`);
        return;
    }
    const location = locationMatch[1].trim();
    
    // 提取评分
    const ratingMatch = content.match(/<i class="fas fa-star"><\/i>\s*([^\n<]+)/);
    if (!ratingMatch) {
        console.log(`Skipping ${pagePath} (no rating found)`);
        return;
    }
    const rating = ratingMatch[1].trim();
    
    // 构建新的detail-header
    const newHeader = `            <div class="detail-header" data-aos="fade-up">
                <h1 class="detail-title">${title}</h1>
                <div class="detail-meta">
                    <span class="location"><i class="fas fa-map-marker-alt"></i> ${location}</span>
                    <span class="rating"><i class="fas fa-star"></i> ${rating}</span>
                </div>
            </div>`;
    
    // 替换旧的detail-header
    let fixedContent = content.replace(/<div class="detail-header"[^>]*>([\s\S]*?)<\/div>/, newHeader);
    
    // 移除独立的detail-meta部分
    fixedContent = fixedContent.replace(/\s*<!-- 景区元数据 -->\s*<div class="detail-meta"[^>]*>([\s\S]*?)<\/div>\s*/, '');
    
    // 写入修复后的文件
    fs.writeFileSync(pagePath, fixedContent);
    console.log(`Fixed ${pagePath}`);
});

console.log('All detail pages have been fixed!');