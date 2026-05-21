import "./globals.css";

export const metadata = {
  title: "深孔钻产品官网",
  description: "深孔钻产品单页官网，展示产品优势、应用场景、规格信息与采购咨询入口。",
  openGraph: {
    title: "深孔钻产品官网",
    description: "稳定开孔，顺畅排屑，适合木工板材、家具安装与五金批发渠道。",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
