const fs = require('fs');
const join = require('path').join;

// 读取文件夹
function readDirs(path) {
    let dirList = fs.readdirSync(path);
    dirList.forEach((item, index) => {
        console.log(`path: ${path}${item}`);
        readFilesOfDir(path, item);
    });
}

// 读取文件
function readFilesOfDir(path, dirName) {
    const dirPath = join(path, dirName);
    const stat = fs.statSync(dirPath);
    // 读取文件夹下的所有文件, 检查是否存在和文件夹名称相同的三个文件(dirName.html, dirName.vue, dirName.js)
    if (stat.isDirectory()) {
        const files = fs.readdirSync(path);
        console.log(files);
    }
}

readDirs('src/views/');