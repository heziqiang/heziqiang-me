import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // 只在生产环境使用静态导出
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  // 只在生产环境设置输出目录
  distDir: process.env.NODE_ENV === 'production' ? 'output' : '.next',
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
