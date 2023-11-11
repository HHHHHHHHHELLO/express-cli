const dotenv = require("dotenv");
const path = require("path");
// 获取npm run dev 后面的参数
// const args = process.argv.slice(2);
// let environment = args[0] || "development";
const environment = process.env.NODE_ENV.toString();
console.log("environment", environment);

const dotenvPaths = new Map([
    ["development", "../.env.development"],
    ["production", "../.env.production"]
]);

const selectedPath = dotenvPaths.get(environment);
console.log("selectedPath",selectedPath)
if (selectedPath) {
    console.log(`正在使用 ${environment} 环境`);
    const dotenv = require("dotenv");
    const path = require("path");
    dotenv.config({
        path: path.resolve(__dirname, selectedPath)
    });
} else {
    console.error("Invalid environment specified.");
}


module.exports = dotenv