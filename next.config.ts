import type { NextConfig } from "next";
import { resolve } from "path";
const nextConfig: NextConfig = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // 重要：返回修改后的配置
    return config;
  },
  reactStrictMode: true, // 严格模式
  swcMinify: true, // 压缩代码
  optimizeFonts: true, // 优化字体
  optimizeImages: true, // 优化图片
  /* config options here */
  typescript: {
    // !! 警告 !!
    // 允许在项目有类型错误的情况下危险地完成生产构建。
    ignoreBuildErrors: true,
  },
  /* config options here */
  experimental: {
    turbo: {
      resolveAlias: {
        "@components": resolve("app/components"),
        "@hooks": resolve("app/hooks"),
        "@pages": resolve("app/pages"),
        "@layouts": resolve("app/layouts"),
        "@assets": resolve("app/assets"),
        "@states": resolve("app/states"),
        "@service": resolve("app/service"),
        "@utils": resolve("app/utils"),
        "@lib": resolve("app/lib"),
        "@constants": resolve("app/constants"),
        "@connectors": resolve("app/connectors"),
        "@abis": resolve("app/abis"),
        "@types": resolve("app/types"),
        "@routes": resolve("app/routes"),
      },
    },
    //   // typedRoutes: true,// 开启实验性功能
    //   useLightningcss: true, // 使用 lightningcss
    //   // 配置允许从 url网络库 导入包
    //   // urlImports: ['https://example.com/assets/', 'https://cdn.skypack.dev'],
    //   // webVitalsAttribution: ['CLS', 'LCP'], // 配置 web vitals 归因
  },
};

export default nextConfig;
