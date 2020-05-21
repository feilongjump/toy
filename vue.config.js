const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        $index: resolve("src/pages/index"),
        $backstage: resolve("src/pages/backstage"),
      }
    }
  },
  devServer: {
    hot: true,
    open: true
  },
  pages: {
    index: {
      // 应用入口配置，相当于单页面应用的main.js，必需项
      entry: 'src/pages/index/main.js',
      // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
      template: 'public/index.html',
      // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
      filename: 'index.html',
      // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
      // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'index page'
      // 包含的模块，可选项
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    backstage: {
      // 应用入口配置，相当于单页面应用的main.js，必需项
      entry: 'src/pages/backstage/main.js',
      // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
      template: 'public/backstage.html',
      // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
      filename: 'backstage.html',
      // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
      // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'backstage page'
      // 包含的模块，可选项
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  }
};
