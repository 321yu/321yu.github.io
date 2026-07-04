import { navbar } from "vuepress-theme-hope";

// 导航栏无法像侧边栏一样自动构建，需要自己写。一般是文章多了之后，写一个大的目录来包裹。实际上是放目录到导航，而不是文章。
export const zhNavbar = navbar([
  "/zh/",
  // "/zh/demo/",
  // {
  //   text: "博文",
  //   icon: "pen-to-square",
  //   prefix: "/zh/posts/",
  //   children: [
  //     {
  //       text: "CAN",
  //       icon: "pen-to-square",
  //       prefix: "apple/",
  //       children: [
  //         { text: "一文搞懂 ⌊CAN 总线 ⌉ ：从物理结构到实际接线", icon: "pen-to-square", link: "一文搞懂 ⌊CAN 总线 ⌉ ：从物理结构到实际接线" },
  //         { text: "XXX", icon: "pen-to-square", link: "2" },
  //       ],
  //     },

  //     { text: "demo2", icon: "pen-to-square", link: "cherry" },
  //     { text: "demo3", icon: "pen-to-square", link: "dragonfruit" },
  //   ],
  // }
]);
