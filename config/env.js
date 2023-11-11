const dotenv = require("dotenv");
const path = require("path");
// require("cross-env")
function loadEnvironmentFile(environment) {
    const dotenvPaths = {
        "development": "../.env.development",
        "production": "../.env.production"
    };

    const keys = Object.keys(dotenvPaths);
    const selectedPath = keys.find(key => environment.includes(key));

    if (selectedPath) {
        console.log(`selectedPath: ${dotenvPaths[selectedPath]}`);
        console.log(`正在使用 ${environment} 环境`);
        dotenv.config({
            path: path.resolve(__dirname, dotenvPaths[selectedPath])
        });
    } else {
        console.error("未找到对应的环境路径");
        throw new Error("Invalid environment specified.");
    }
}

// 获取环境变量
const environment = process.env.NODE_ENV.toString();
console.log("environment", environment);

// 检查环境并加载对应的环境文件
if (environment.includes("production")) {
    try {
        loadEnvironmentFile(environment);
    } catch (error) {
        console.error(error.message);
    }
} else {
    console.error("Invalid environment specified.");
}
module.exports = {loadEnvironmentFile}