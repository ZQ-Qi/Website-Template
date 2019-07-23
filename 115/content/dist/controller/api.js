;layui.define(function (exports) {
    exports('api', {
        ip: {
            a1: 'http://121.42.249.42:1234',//测试地址
            b1: ''//线上地址
        },
        path: {
            api: '/api',
            zx: '/zx',
            stat: '/stat'
        },
        sqStr: {
            str1: "b65f0039416014f",
            str2: "95cce1a0d1904c76b29055d5b0d3692j",
            str3: "2"
        },
        errLog:'',//错误日志收集地址,仅上线后会使用，填写完整的线上地址
        login: {}
    });
});