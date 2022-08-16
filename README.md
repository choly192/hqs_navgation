# 鲁大师实验室

## 项目启动

- 项目以`yarn` 作为包管理器，基于 webpack5 搭建，babel 转译；另外项目配置了代码规范的校验规则（eslint+prettier）；代码提交时也有相关的代码提交规范校验。

### 项目初始化

```bash
  yarn install
```

### 项目启动

```bash
  yarn start
```

### 代码格式化

```bash
  yarn lint:fix
```

### 项目搭建技术

`react(hooks)`,`typescript`,`"@reduxjs/toolkit"`,`react-router-dom@6`,`ant-design`,`webpack5`,`less预处理器`

### 代码提交规范

"feat", // 新功能（feature）
"fix", // 修补 bug
"bugfix", // 修补 bug
"docs", // 文档（documentation）
"style", // 格式（不影响代码运行的变动）
"refactor", // 重构（即不是新增功能，也不是修改 bug 的代码变动）
"test", // 增加测试
"revert", // 回滚
"config", // 构建过程或辅助工具的变动
"chore", // 其他改动
"message", //注释&文案更改
例如：

```bash
  git commit -m 'feat:项目初始化'
```

### 文件及命名规范

1. 类型声明文件统一以 type.ts 结尾，如 : xxx.type.ts;
2. 文件夹统一小写字母，单词与单词之间以`-`隔开;
3. components 文件夹下为公用的组件，在 index.tsx 文件中导出;
4. 不在对应组件下新建 css/less 样式文件，样式文件统一放 static/css 目录下;
5. 样式不使用 css Module
