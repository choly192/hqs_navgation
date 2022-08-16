export interface Menus {
  path: string;
  name: string;
  text: string;
}
// 详细 nav导航栏
export const menus: Menus[] = [
  {
    path: "/nav",
    name: "always",
    text: "常用",
  },
  {
    path: "/nav/code",
    name: "code",
    text: "编程语言",
  },
  {
    path: "/Pthread",
    name: "Pthread",
    text: "第三方库",
  },
  {
    path: "/recreation",
    name: "recreation",
    text: "娱乐",
  },
  {
    path: "/interview",
    name: "interview",
    text: "面试",
  },
  {
    path: "/SPColumn",
    name: "SPColumn",
    text: "专栏",
  },
];

// home 首页导航
export const recommendNavs = [
  {
    path: "/nav",
    imgUrl: "https://choly192.github.io/image/logo.png",
    name: "sirius 导航",
  },
  {
    path: "https://react.docschina.org/",
    imgUrl: require("static/image/site-logo/react.png"),
    name: "React 官网",
  },
  {
    path: "https://cn.vuejs.org/",
    imgUrl: require("static/image/site-logo/vue.png"),
    name: "VUE 官网",
  },
  {
    path: "https://juejin.cn/",
    imgUrl: require("static/image/site-logo/juejing.png"),
    name: "掘金",
  },
];
