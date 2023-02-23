import { defineConfig } from "vitepress";
export default defineConfig({
  title: "Wabibapujs",
  titleTemplate: ":title",
  description: "Wabibapujs Docs.",
  cleanUrls: true,
  lastUpdated: true,
  // lang: "en",
  locales: {
    zh: {
      label: "Chinese",
      lang: "zh",
      link: "/zh/",
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
    },
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/259f68bf2d76430c9d70236d4057e6dc~tplv-k3u1fbpfcp-watermark.image?",
      },
    ],
  ],
  themeConfig: {
    logo: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/259f68bf2d76430c9d70236d4057e6dc~tplv-k3u1fbpfcp-watermark.image?",
    i18nRouting: true,
    siteTitle: "Wabibapujs",
    lastUpdatedText: "Updated Date",
    aside: true,
    // nav: [
    //   { text: "Guide", link: "/guide" },
    //   {
    //     text: "Menu Test",
    //     items: [
    //       {
    //         text: "ItemA",
    //         link: "/item-1",
    //       },
    //     ],
    //   },
    // ],
    sidebar: [
      { text: "Preface", items: [{ text: "Preface", link: "/zh/preface" }] },
      {
        text: "Project",
        items: [
          {
            text: "Project Blueprint",
            link: "/zh/project/project_blueprint",
          },
          {
            text: "Project Division",
            link: "/zh/project/project_division",
          },
          {
            text: "Project Development History",
            link: "/zh/project/project_development_history",
          },
          {
            text: "Project Architecture Design",
            link: "/zh/project/project_architecture_design",
          },
          {
            text: "Project Summary and Reflection",
            link: "/zh/project/project_summary_and_reflection",
          },
        ],
      },
      {
        text: "Question In Develop",
        items: [
          {
            text: "Project problem solving",
            link: "/zh/question/project_problem_solving",
          },
          {
            text: "Answers to Canvas relevant questions",
            link: "/zh/question/answer_to_canvas_relevant",
          },
          {
            text: "Answers to Project problems",
            link: "/zh/question/answer_to_project_problems",
          },
          {
            text: "Answers to Project relevants",
            link: "/zh/question/answer_to_project_relevants",
          },
        ],
      },
      {
        text: "Team",
        items: [
          { text: "Team Page", link: "/team_page" },
          {
            text: "Team & Project Knowledge Space",
            link: "/team_knowledge_space",
          },
        ],
      },
      // {
      //   text: "项目分工",
      //   link: "/project/project_division",
      // },
      // {
      //   text: "项目发展进程",
      //   link: "/project/development_history",
      // },
      // {
      //   text: "项目架构设计",
      //   link: "/project/archtecture_design",
      // },
      // { text: "团队", items: [{ text: "Team Page", link: "/team_page" }] },
    ],
  },
});
// 技术选型与相关开发文档
// 可以补充场景分析环节，明确要解决的问题和前提假设，比如按当前选型和架构总体预计需要xxx存储空间，xxx台服务器......。

// 二、项目分工
// 好的团队协作可以酌情加分哟～请组长和组员做好项目分工与监督。

// 3.2 架构设计
// 可以补充场景分析环节，明确要解决的问题和前提假设，比如预计0.5%的用户属于大V，粉丝很多，也会经常上传视频，当前架构的解决方案是xxx。

// 3.3 项目代码介绍
