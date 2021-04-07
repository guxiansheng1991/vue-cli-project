const fs = require('fs');
const join = require('path').join;

const fileList = [];
const VIEW_PATH = 'src/views';
// 读取文件夹
function readDirs(path) {
    let dirList = fs.readdirSync(path);
    dirList.forEach((item, index) => {
        readFilesOfDir(path, item);
    });
}

// 读取文件
function readFilesOfDir(path, dirName) {
    const dirPath = join(path, dirName);
    const stat = fs.statSync(dirPath);
    // 读取文件夹下的所有文件, 检查是否存在和文件夹名称相同的三个文件(dirName.html, dirName.vue, dirName.js)
    if (stat.isDirectory()) {
        const files = fs.readdirSync(dirPath);
        const filesObj = array2obeject(files, dirName);
        fileList.push(filesObj);
    }
}

// 验证文件夹文件正确性
function vertify(list) {
    let flag = true;
    for (let i = 0, iLen = list.length; i < iLen; i++) {
        const item = list[i];
        const necessaryFiles = [`${item.dirName}.html`, `${item.dirName}.js`, `${item.dirName}.vue`];
        for (let j = 0, jLen = necessaryFiles.length; j < jLen; j++) {
            const subItem = necessaryFiles[j];
            if (!item.hasOwnProperty(subItem)) {
                console.error(`-------------------${item.dirName}缺少文件${subItem}, 请修改!-------------------`);
                flag = false;
                break;
            }
        }
        if (flag) {
            console.log(`${item.dirName}文件夹文件结构验证通过!`);
        }
        if (!flag) {
            break;
        }
    }
    return flag;
}

// 数组转为对象
function array2obeject(list, dirName) {
    const obj = {};
    for (const key in list) {
        obj[list[key]] = list[key];
    }
    obj.dirName = dirName;
    return obj;
}

// 生成pages
function createPageParams() {
    readDirs(VIEW_PATH);
    const flag = vertify(fileList);
    let pages = {};
    if (flag) {
        fileList.forEach(ele => {
            const dirName = ele.dirName;
            pages[dirName] = {
                // page 的入口
                entry: `${VIEW_PATH}/${dirName}/${dirName}.js`,
                // 模板来源
                template: `${VIEW_PATH}/${dirName}/${dirName}.html`,
                // 在 dist/home.html 的输出
                filename: `${dirName}.html`
            }
        });
    }
    return pages;
}

// 生成pages变量
module.exports = {
    createPageParams: createPageParams
}

