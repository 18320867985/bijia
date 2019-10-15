matter

/*=============================js的module主打包入口模块列表 模块列表====================================== */


var jsObj = {
    list: [
        "index",    // 默认主模块
        "help",     // 帮助中心
        "member",   // 会员中心
        "login",    // 登录
        "pricevs",
        "xuelian",
        "matter"

    ],

    dir: "./src/view/",     // 默认文件父级
    watch: "matter"          // 监听和打包当前的模块，
};


/*=============================css的style主打包入口 模块列表====================================== */

var cssObj = {
    list: [
        "index",        // 默认主模块，
        "help",         // 帮助中心
        "member",       // 会员中心
        "login",        // 登录
        "pricevs",
        "xuelian"

    ],

    dir: "./src/view/",         // 默认文件父级
    watch: "matter"              // 监听和打包当前的模块，

};


module.exports = {
    jsObj,
    cssObj
};
