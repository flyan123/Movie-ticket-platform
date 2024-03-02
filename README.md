# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### ant design 依赖
 npm install antd --save
 

### 登入注册依赖
1. 路由：npm install --save react-router-dom √
   
2. 依赖：npm install --save redux √
   
3. npm install --save react-redux √
4. npm install --save-dev redux-devtools-extension √
5. 获取数据
6. 创建服务器 server
   1. 安装依赖 npm i --save express  √
   2. 服务器运行的端口；
7. 使用 validator 校验工具
参考网址：https://wangchujiang.com/validator.js/#install
   npm install validator.tool --save ×
   npm install --save validator √

检验是否为空： loadsh
参考网址：https://www.lodashjs.com/docs/lodash.isEmpty#_isemptyvalue
   npm install --save loadsh √

8. 安装网络请求方案:
   npm install --save axios √

! 如果丢包现象要删除 node modules
重新安装 npm install

9. 打开后台服务器Signup
   1. cd server
   2. node index.js  

npm install querystring-es3

 ## 跨域解决方案
1. 后台：cors第三方
    npm install --save cors √
    server=>index.js
    // 后台跨域配置
      app.use(cors());
2. 前台：设置跨域代理
    参考地址：https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/proxying-api-requests-in-development.md
    npm install http-proxy-middleware --save √
    1.加setupProxy.js文件
    2.去除 utils=>request.js
    // 公共配置
    // baseURL:"http://iwenwiki.com",
 
## 动态处理样式
classnames 第三方库
```js
npm install --save classnames √
import classnames from 'classnames'

<div className=classnames({
    'class1': true,
    'class2': true
    )>
</div>
```
## 链接数据库
npm install --save mysql √
 
 ## 安装 Redux Toolkit
 npm install @reduxjs/toolkit √

 ## 服务器自动更新
 1. npm install -g nodemon √
2. 配置 nodemon.json文件 
3. 启动：nodemon index.js
4. Desktop\求职项目\Movie-ticket-platform\server