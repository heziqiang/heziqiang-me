import { execSync } from 'child_process';
import fs from 'fs';

// 检查必要文件
if (!fs.existsSync('output')) {
  console.error('❌ output 目录不存在，请先运行 npm run build');
  process.exit(1);
}

try {
  console.log('🚀 开始部署到 Cloudflare Pages...');
  
  // 使用 wrangler pages deploy
  execSync('npx wrangler pages deploy output --project-name=heziqiang-me', {
    stdio: 'inherit'
  });
  
  console.log('✅ 部署成功！');
} catch (error) {
  console.error('❌ 部署失败:', error.message);
  process.exit(1);
}