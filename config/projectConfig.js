const projectName = require('./project')

const config = {
    //活动1
    projectA: {
        localPath: './src/projects/projectA/',
        uploadPath: '/h5/test/cb/',
    },
    //活动2
    projectB: {
        localPath: './src/projects/projectB/',
        uploadPath: '/h5/act/tf/',
    },
}

const configObj = config[projectName.name]
module.exports = configObj