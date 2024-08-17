import { defineConfig } from '@umijs/max';

debugger;
export default defineConfig({
  locale: {
    antd: true,
    baseNavigator: true, //开启浏览器语言检测
    default: 'zh-CN', //语言（Language）与国家（Country） 之间的分割符
    baseSeparator: '-',
    title: false, //开启标题国际化
    useLocalStorage: true, //自动使用 localStorage 保存当前使用的语言
  },
  antd: {
    configProvider: {},
    dark: true,
    compact: true,
    import: false,
    style: 'less',
    theme: {},
    appConfig: {},
    momentPicker: true,
    styleProvider: {
      hashPriority: 'high',
      legacyTransformer: true,
    },
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '定制化管理系统',
  },
  // plugins: [
  //   './src/plugins/generateIndexPlugin',
  // ],
  routes: [
    {
      name: '数据可视化',
      path: '/DataV',
      routes: [
        {
          name: 'demo1',
          path: '/DataV/demo1',
          code: 'demo1',
          component: '@/pages/DataV/Demo1',
        },
        {
          name: 'demo2',
          path: '/DataV/demo2',
          code: 'demo2',
          component: '@/pages/DataV/Demo2',
        },
        {
          name: 'demo3',
          path: '/DataV/demo3',
          code: 'demo3',
          component: '@/pages/DataV/Demo3',
        },
      ],
    },
    {
      name: '表格功能',
      path: '/Table',
      // component: '@/pages/Layouts',
      routes: [
        {
          name: '表格列表',
          path: '/Table/tableShow',
          code: 'tableShow',
          component: '@/pages/Table',
        },
        // {
        //   name: "操作任务",
        //   path: "/DevOps/operationTask",
        //   code: "operationTask",
        //   component: "@/pages/DevOps/Task",
        // },
        // {
        //   name: "创建表格",
        //   path: "/Table/createTask",
        //   code: "createTask",
        //   component: "@/pages/Table/Task/components/CreateTask",
        //   hideInMenu: true,
        // },
        // {
        //   name: "编辑表格",
        //   path: "/Table/editTask",
        //   code: "editTask",
        //   component: "@/pages/Table/Task/components/CreateTask",
        //   hideInMenu: true,
        // },
        // {
        //   name: "表格详情",
        //   path: "/Table/tableDetail",
        //   code: "tableDetail",
        //   component: "@/pages/Table/Task/components/TaskDetail",
        //   hideInMenu: true,
        // },
      ],
    },
    {
      name: '404',
      path: '/404',
      component: '@/pages/Error',
      hideInMenu: true,
    },
    {
      name: 'noAuth',
      path: '/noAuth',
      component: '@/pages/NoAuth',
      hideInMenu: true,
    },
    {
      from: '*',
      to: '/noAuth',
      // exact: false,
    },
  ],
  npmClient: 'pnpm',
});
