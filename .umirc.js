
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'myblog',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  theme: {
    "menu-item-active-bg": "rgba(0, 0, 0, 0)",
  },
  publicPath: "./",
  history: "hash",
  /*proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }
  }*/
}
