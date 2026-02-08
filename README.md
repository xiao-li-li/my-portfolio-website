
# Li Xiang - Architectural Portfolio | 建筑作品集网站

这是一个为建筑设计师李翔量身定制的个人作品集网站。项目采用现代化的前端技术栈构建，旨在通过流畅的交互动画和极简的视觉风格，完美呈现建筑设计与遗产保护领域的专业作品。

## 🌟 核心特性

-   **沉浸式交互**：利用 Framer Motion 实现丝滑的页面过渡、滚动动画和手势交互。
-   **响应式设计**：完美适配桌面端和移动端设备，针对不同屏幕尺寸优化了布局和触摸体验。
-   **多语言支持**：内置中英文一键切换功能，满足国际化展示需求。
-   **作品展示**：
    -   首页采用全屏滚动（Snap Scroll）展示 7 个精选项目。
    -   支持点击进入详情页，查看高清大图和深度设计解析。
    -   集成自定义灯箱（Lightbox），支持手势滑动查看图集。
-   **简历页面**：结构化的在线简历，支持 PDF 下载及与首页的无缝跳转。

## 🛠 技术栈

本项目基于 React 生态系统构建，注重代码的清晰度与性能。

-   **核心框架**: [React 19](https://react.dev/)
-   **路由管理**: [React Router 7](https://reactrouter.com/)
-   **动画引擎**: [Framer Motion](https://www.framer.com/motion/)
-   **样式库**: [Tailwind CSS](https://tailwindcss.com/)
-   **图标库**: [Lucide React](https://lucide.dev/)
-   **字体**: Google Fonts (Inter, Noto Serif SC, Playfair Display)

## 📂 目录结构

```
/
├── components/          # 可复用组件
│   ├── CustomCursor.tsx # 自定义鼠标光标逻辑
│   ├── FloatingElements.tsx # 悬浮导航栏（语言切换、联系方式）
│   ├── Lightbox.tsx     # [New] 通用全屏图片查看器
│   └── ProjectSection.tsx # 首页单项目展示区块
├── pages/               # 页面级组件
│   ├── Home.tsx         # 首页（全屏滚动流）
│   ├── ProjectDetail.tsx# 项目详情页
│   └── Resume.tsx       # 简历页
├── constants.ts         # 静态数据（项目列表、简历内容）
├── types.ts             # TypeScript 类型定义
├── App.tsx              # 路由入口
└── index.html           # 入口 HTML
```

## 🚀 快速开始

1.  **安装依赖**
    ```bash
    npm install
    ```

2.  **启动开发服务器**
    ```bash
    npm start
    ```

3.  **构建生产版本**
    ```bash
    npm run build
    ```

## 🎨 设计细节

-   **视觉风格**：以黑、白、高级灰为主色调，辅以一种标志性的建筑红（#cc2d2d）作为强调色。
-   **字体排印**：中英文混排优化，衬线体（Title）与无衬线体（Body）结合，营造学术与现代感并存的氛围。
-   **用户体验**：增加了回到顶部、全屏灯箱、移动端适配的导航箭头等细节功能，提升浏览舒适度。

---

© 2025 Li Xiang. All Rights Reserved.
