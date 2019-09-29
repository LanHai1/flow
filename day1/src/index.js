// 在flow中如果想要为一个数据添加类型

// 一. 通过注释的方式进行添加
// 好处: 不会修改js代码 代码在添加完数据后仍然可以正常运行
// 缺点: 注释太多 代码可读性变差
// 需要给文件添加@flow标记 否则flow不会对文件进行类型检查
// 1.添加@flow标记
// 2.在package.json 中 scripts添加命令 `"flow":"flow"` （全局安装则不需要添加）
// 3.执行命令 `npm run flow init` 创建flow配置文件 （.flowconfig）
/**
 [ignore] 忽略哪些文件进行检查

 [include] 对哪些文件进行检查

 [libs] 第三方库

 [lints] 是否进行代码实时校验

 [options]

 [strict]
 */
// 4. 输入命令 `flow` 就会对文件进行flow检测

// @flow
let a /*:number*/ = 10;
a = "bac";
console.log(a);

// 二. 通过直接改写js代码结构(推荐) 如果要正常运行 需要使用babel进行转码
`var 变量: 数据类型 = 数据;`
let b: number = 10;
b = "123";
console.log(b);
// 1. 修改js结构 编写代码
// 2. 安装babel `npm i babel-cli babel-preset-flow -D`
// 2. 在package.js中 scripts添加命令 `"build":"babel 文件夹(要编译的文件夹) -d 文件夹(编译后的文件夹)"` 如： `"build":"babel build ./src -d ./dist"`
// 3. 新建babel配置文件 `.babelconfig` 里面配置flow => `{"presets": ["flow"]}`