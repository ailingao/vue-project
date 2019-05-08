# vue-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# 运行项目projectA
npm run d projectA

# 打包项目projectA
npm run b projectA

# 运行项目projectB
npm run d projectB

# 打包项目projectB
npm run b projectB

# 多项目配置路径config/projectConfig.js 示例：
const projectName = require('./project')

const config = {
    //项目projectA
    projectA: {
        localPath: './src/projects/projectA/',//资源目录路径
    },
    //项目projectB
    projectB: {
        localPath: './src/projects/projectB/',//资源目录路径
    },
}

const configObj = config[projectName.name]
module.exports = configObj

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
