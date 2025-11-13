import { execSync } from "child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import process from "node:process";

const projectName = "heziqiang-me";
const outputDirName = "output";
const outputDir = resolve(process.cwd(), outputDirName);
const wranglerBin = resolve(process.cwd(), "node_modules/.bin/wrangler");

// 检查必要文件
if (!existsSync(outputDir)) {
  console.error("❌ output 目录不存在，请先运行 npm run build");
  process.exit(1);
}

if (!existsSync(wranglerBin)) {
  console.error("❌ 部署工具未安装，请先运行：yarn add -D wrangler");
  process.exit(1);
}

console.log(`开始部署到 Cloudflare Pages 项目：${projectName}`);

try {
  execSync(
    `${wranglerBin} pages deploy ${outputDir} --project-name=${projectName}`,
    { stdio: "inherit" }
  );
  console.log("✅ 部署成功！");
} catch (error) {
  console.error("❌ 部署失败：", error.message);
  process.exit(1);
}
