;
layui.define(function(exports) {
    var $ = layui.$,
        setter = layui.setter,
        layer = layui.layer,
        router = layui.router(),
        search = router.search;

    exports('zhmf', {
        api: {
            ip: {
                a1: 'http://121.42.249.42:1234', //测试地址
                b1: '' //线上地址
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
            errLog: '', //错误日志收集地址,仅上线后会使用，填写完整的线上地址
            login: {}
        },
        //ajax对外版（参数文档）
        //@url:'', 接口地址（字符串）
        //@type:'get/post/put/delete', 请求方式（字符串）
        //@data:{},请求数据（对象/字符串），默认会把数据拼接到url中并以form形式提交
        //@dataPos:true/false,数据传输位置（不填/布尔），把上面data数据放在url中还是body中，默认是true,如果是false则会把数据放到body传输
        //@encrypt:[a,b,c],加密参数（不填/数组，一般内部调用），[a,b,c]代表把data参数中的key值按照a,b,c的顺序进行加密后替换掉原来的data值后传输到后台
        //@login:true/false,该接口是否验证登录状态（不填/布尔），默认是true验证登录，false不验证登录直接向后台发送请求
        //@loading:true/false,请求接口加载动画（不填/布尔），默认是true显示动画，false关闭动画
        //@failTip:true/false,接口失败（code==200&&result==false）是否显示错误提示，默认是true显示提示，false是不显示
        //@errorTip:true/false,接口错误（500）是否显示错误提示，默认是true显示提示，false是不显示
        //@json:true/false,传输形式（不填/布尔），不写默认是form形式提交，当为true时，以json形式提交
        //@callack:function(data, status, jqXHR){},接口成功回调（code==200&&result==true,非必写）,data是后台传输的数据，status是接口状态，jqXHR当前的ajax请求对象
        //@failback:function(data, status, jqXHR){},接口失败回调（code==200&&result==false,非必写）,data是后台传输的数据，status是接口状态，jqXHR当前的ajax请求对象
        //@errorback:function(jqXHR, status){},接口错误回调(接口500,非必写),jqXHR当前的ajax请求对象,status是接口状态
        //@finalback:function(jqXHR, status){},接口无论成功失败都会执行的回调(非必写),jqXHR当前的ajax请求对象,status是接口状态
        ajax: function(params) {
            //默认请求方式为get
            if (!params.hasOwnProperty('type') || !params.type) {
                params.type = 'get';
            }
            //默认所有接口都需要验证登录
            if (!params.hasOwnProperty('login')) {
                params.login = true;
            }
            //尝试从本地缓存中得到用户信息
            var zhmf = this.store.get(setter.tableName);
            //验证是否有access_token
            if (!zhmf.access_token && params.login) {
                request({
                    url: (setter.debug ? this.api.ip.a1 : this.api.ip.b1) + '/authorize/getAndModifyAccessToken',
                    type: 'post',
                    data: {
                        a: this.api.sqStr.str1,
                        b: this.api.sqStr.str2,
                        userId: zhmf.hasOwnProperty('userId') ? zhmf.userId : ''
                    },
                    encrypt: ['a', 'b', 'userId'],
                    dataPos: false,
                    callback: function(data) {
                        if (data) {
                            //写入token信息
                            this.store.set(setter.tableName, data, new Date().getTime() + data.expires_in * 1000);
                            request(params, data.access_token);
                        }
                    },
                    failback: function() {
                        layer.msg('获取用户身份失败，请刷新重试！');
                    },
                    errorback: function() {
                        layer.msg('获取用户身份失败，请刷新重试！');
                    }
                }, "");
            } else {
                request(params, zhmf.access_token || "");
            }

            function request(params, token) {
                //判断参数是写到url里面还是body里面
                var Pos = 0; //0是不写任何参数，1是写到url里，2是写道body里
                if (params.hasOwnProperty('data')) {
                    if (params.type == 'get' || !params.hasOwnProperty('dataPos') || (params.hasOwnProperty('dataPos') && params.dataPos)) {
                        Pos = 1; //params中方法是get的或者没有dataPos或者dataPos为true时，参数写道url里面
                    } else {
                        Pos = 2; //参数写道body里面
                    }
                }
                var urlData = params.url + '?'; //url地址
                if (Pos == 1) {
                    for (var item in params.data) {
                        urlData += item + '=' + params.data[item] + '&';
                    }
                }
                var sendData = ''; //定义将要上传服务器的数据
                /*当含有加密参数开启*/
                if (params.hasOwnProperty('encrypt') && params.encrypt.length > 0) {
                    params.encrypt.forEach(function(v) {
                        sendData += params.data[v] + '+'
                    });
                    sendData = {
                        '': '#js' + jsencrypt(sendData.slice(0, sendData.length - 1))
                    };
                } else {
                    sendData = params.data;
                }
                $.ajax({
                    url: urlData.slice(0, urlData.length - 1),
                    type: params.type,
                    headers: {
                        'timestamp': '#js' + jsencrypt(parseInt(new Date().getTime() / 1000) + ''),
                        'token': token ? token : '',
                        'access_token': token ? token : ''
                    },
                    beforeSend: function() {
                        if (!params.hasOwnProperty('loading') || params.loading) {
                            layer.load();
                        }
                    },
                    data: params.hasOwnProperty('json') && params.json ? JSON.stringify(Pos == 2 ? params.data : '') : (Pos == 2 ? params.data : ''),
                    dataType: 'json',
                    contentType: params.hasOwnProperty('json') && params.json ? "application/json" : "application/x-www-form-urlencoded; charset=UTF-8",
                    processData: params.hasOwnProperty('json') && params.json ? false : true,
                    success: function(data, status, jqXHR) {
                        if (!params.hasOwnProperty('loading') || params.loading) {
                            layer.closeAll('loading');
                        }
                        if (data.result) {
                            if (params.callback) {
                                params.callback(data.data, status, jqXHR);
                            }
                        } else {
                            //产品环境提交错误日志
                            if (!setter.debug) {
                                var userInfo = this.store.get(setter.tableName);
                                userInfo.device_info = window.navigator.userAgent;
                                userInfo.locationHref = window.location.href;
                                userInfo.interfaceUrl = urlData;
                                userInfo.interfaceMethod = params.type;
                                userInfo.interfaceData = sendData;
                                userInfo.interfaceErrorMessage = data.message;
                                userInfo.interfaceErrorType = 'false';
                                request({
                                    url: this.api.errLog,
                                    type: 'post',
                                    data: {
                                        '': JSON.stringify(userInfo)
                                    },
                                    dataPos: false,
                                    loading: false,
                                    failTip: false,
                                    errorTip: false
                                }, '');
                            }

                            if (data.code == 401) {
                                this.store.remove("access_token");
                                //return alert(401);
                                //如果是产品环境则提交错误日志
                                //console.log('401错误,跳授权：'+urlData.slice(0, urlData.length - 1));
                                //跳转授权页面
                                return location.hash = search.redirect ? decodeURIComponent(search.redirect) : '/user/login';
                                // return window.location.href = (setter.debug ? this.api.ip.a1 : this.api.ip.b1) + "?returnurl=" + encodeURIComponent(location.href);

                            }
                            //提示错误信息
                            if (!params.hasOwnProperty('failTip') || params.failTip) {
                                that.toast(data.message || "未知错误");
                            }
                            if (params.failback) {
                                params.failback(data, status, jqXHR);
                            }
                        }
                    },
                    error: function(jqXHR, status) {
                        if (!params.hasOwnProperty('loading') || params.loading) {
                            layer.closeAll('loading');
                        }
                        //恢复请求状态为true
                        if (setter.debug) {
                            alert("url:" + params.url.slice(0, params.url.length) + "\n data:" + JSON.stringify(jqXHR));
                        } else {
                            //错误提示
                            if (!params.hasOwnProperty('errorTip') || params.errorTip) {
                                layer.msg('服务器繁忙，请刷新再试！');
                                //如果是产品环境则提交错误日志
                                var userInfo = this.store.get(setter.tableName);
                                userInfo.device_info = window.navigator.userAgent;
                                userInfo.locationHref = window.location.href;
                                userInfo.interfaceUrl = urlData;
                                userInfo.interfaceMethod = params.type;
                                userInfo.interfaceData = sendData;
                                userInfo.interfaceErrorMessage = data.message;
                                userInfo.interfaceErrorType = 'error';
                                request({
                                    url: this.api.errLog,
                                    type: 'post',
                                    data: {
                                        '': JSON.stringify(userInfo)
                                    },
                                    dataPos: false,
                                    loading: false,
                                    failTip: false,
                                    errorTip: false
                                }, '');
                            }
                        }
                        if (params.errorback) {
                            params.errorback(jqXHR, status);
                        }
                    },
                    complete: function(jqXHR, status) {
                        if (params.finalback) {
                            params.finalback(jqXHR, status);
                        }
                    }
                });
            }
        },
        //store缓存机制
        //@set(table, info, expires),写入缓存信息，table(字符串),存储到缓存中的表名，info(对象),存储到table中的数据对象，expires(数字)存储到table中的数据再过多长时间过期，单位毫秒
        //@get(table),获取缓存中表table的信息
        //@remove(table, keys),删除表table中键值为keys的这条数据，keys(字符串/数组)，可以是单个key,也可以是多个key的数组
        //@delete(table),删除缓存中表table及其中的所有数据
        store: {
            set: function(table, info, expires) {
                if (table && info) {
                    if (typeof info == 'object') {
                        for (var item in info) {
                            layui.data(table, {
                                key: item,
                                value: info[item]
                            });
                        }
                    } else {
                        return layer.msg('存储的数据格式必须是对象！');
                    }
                    if (expires) {
                        if (typeof expires == 'number') {
                            layui.data(table, {
                                key: 'expires',
                                value: new Date().getTime() + expires //单位毫秒
                            });
                        }
                    }
                } else {
                    layer.msg('存储的数据格式错误！');
                }
            },
            get: function(table) {
                var zhmf = layui.data(table);
                if ('expires' in zhmf && (new Date().getTime() - zhmf.expires > 0)) {
                    //过期后删除access_token和expires
                    this.remove(table, ['access_token', 'expires']);
                    return layui.data(table);
                } else {
                    return zhmf;
                }
            },
            /*
             * @table,表名
             * @keys删除的字段名，支持字符串和数组两种格式*/
            remove: function(table, keys) {
                if (table && keys) {
                    if (typeof keys == 'string') {
                        layui.data(table, {
                            key: keys,
                            remove: true
                        });
                    } else {
                        keys.forEach(function(v) {
                            layui.data(table, {
                                key: v,
                                remove: true
                            });
                        });
                    }
                }
            },
            delete: function(table) {
                layui.data(table, null);
            }
        },
        //定义一些常用的工具函数
        utils: {},
        //加密函数(内部调用)
        jsencrypt: function(message) {
            var key = 'BAE35E15';
            var des = function(key, message, encrypt, mode, iv) {
                var spfunction1 = new Array(0x1010400, 0, 0x10000, 0x1010404, 0x1010004, 0x10404, 0x4, 0x10000, 0x400, 0x1010400, 0x1010404, 0x400, 0x1000404, 0x1010004, 0x1000000, 0x4, 0x404, 0x1000400, 0x1000400, 0x10400, 0x10400, 0x1010000, 0x1010000, 0x1000404, 0x10004, 0x1000004, 0x1000004, 0x10004, 0, 0x404, 0x10404, 0x1000000, 0x10000, 0x1010404, 0x4, 0x1010000, 0x1010400, 0x1000000, 0x1000000, 0x400, 0x1010004, 0x10000, 0x10400, 0x1000004, 0x400, 0x4, 0x1000404, 0x10404, 0x1010404, 0x10004, 0x1010000, 0x1000404, 0x1000004, 0x404, 0x10404, 0x1010400, 0x404, 0x1000400, 0x1000400, 0, 0x10004, 0x10400, 0, 0x1010004);
                var spfunction2 = new Array(-0x7fef7fe0, -0x7fff8000, 0x8000, 0x108020, 0x100000, 0x20, -0x7fefffe0, -0x7fff7fe0, -0x7fffffe0, -0x7fef7fe0, -0x7fef8000, -0x8000000, -0x7fff8000, 0x100000, 0x20, -0x7fefffe0, 0x108000, 0x100020, -0x7fff7fe0, 0, -0x8000000, 0x8000, 0x108020, -0x7ff00000, 0x100020, -0x7fffffe0, 0, 0x108000, 0x8020, -0x7fef8000, -0x7ff00000, 0x8020, 0, 0x108020, -0x7fefffe0, 0x100000, -0x7fff7fe0, -0x7ff00000, -0x7fef8000, 0x8000, -0x7ff00000, -0x7fff8000, 0x20, -0x7fef7fe0, 0x108020, 0x20, 0x8000, -0x8000000, 0x8020, -0x7fef8000, 0x100000, -0x7fffffe0, 0x100020, -0x7fff7fe0, -0x7fffffe0, 0x100020, 0x108000, 0, -0x7fff8000, 0x8020, -0x8000000, -0x7fefffe0, -0x7fef7fe0, 0x108000);
                var spfunction3 = new Array(0x208, 0x8020200, 0, 0x8020008, 0x8000200, 0, 0x20208, 0x8000200, 0x20008, 0x8000008, 0x8000008, 0x20000, 0x8020208, 0x20008, 0x8020000, 0x208, 0x8000000, 0x8, 0x8020200, 0x200, 0x20200, 0x8020000, 0x8020008, 0x20208, 0x8000208, 0x20200, 0x20000, 0x8000208, 0x8, 0x8020208, 0x200, 0x8000000, 0x8020200, 0x8000000, 0x20008, 0x208, 0x20000, 0x8020200, 0x8000200, 0, 0x200, 0x20008, 0x8020208, 0x8000200, 0x8000008, 0x200, 0, 0x8020008, 0x8000208, 0x20000, 0x8000000, 0x8020208, 0x8, 0x20208, 0x20200, 0x8000008, 0x8020000, 0x8000208, 0x208, 0x8020000, 0x20208, 0x8, 0x8020008, 0x20200);
                var spfunction4 = new Array(0x802001, 0x2081, 0x2081, 0x80, 0x802080, 0x800081, 0x800001, 0x2001, 0, 0x802000, 0x802000, 0x802081, 0x81, 0, 0x800080, 0x800001, 0x1, 0x2000, 0x800000, 0x802001, 0x80, 0x800000, 0x2001, 0x2080, 0x800081, 0x1, 0x2080, 0x800080, 0x2000, 0x802080, 0x802081, 0x81, 0x800080, 0x800001, 0x802000, 0x802081, 0x81, 0, 0, 0x802000, 0x2080, 0x800080, 0x800081, 0x1, 0x802001, 0x2081, 0x2081, 0x80, 0x802081, 0x81, 0x1, 0x2000, 0x800001, 0x2001, 0x802080, 0x800081, 0x2001, 0x2080, 0x800000, 0x802001, 0x80, 0x800000, 0x2000, 0x802080);
                var spfunction5 = new Array(0x100, 0x2080100, 0x2080000, 0x42000100, 0x80000, 0x100, 0x40000000, 0x2080000, 0x40080100, 0x80000, 0x2000100, 0x40080100, 0x42000100, 0x42080000, 0x80100, 0x40000000, 0x2000000, 0x40080000, 0x40080000, 0, 0x40000100, 0x42080100, 0x42080100, 0x2000100, 0x42080000, 0x40000100, 0, 0x42000000, 0x2080100, 0x2000000, 0x42000000, 0x80100, 0x80000, 0x42000100, 0x100, 0x2000000, 0x40000000, 0x2080000, 0x42000100, 0x40080100, 0x2000100, 0x40000000, 0x42080000, 0x2080100, 0x40080100, 0x100, 0x2000000, 0x42080000, 0x42080100, 0x80100, 0x42000000, 0x42080100, 0x2080000, 0, 0x40080000, 0x42000000, 0x80100, 0x2000100, 0x40000100, 0x80000, 0, 0x40080000, 0x2080100, 0x40000100);
                var spfunction6 = new Array(0x20000010, 0x20400000, 0x4000, 0x20404010, 0x20400000, 0x10, 0x20404010, 0x400000, 0x20004000, 0x404010, 0x400000, 0x20000010, 0x400010, 0x20004000, 0x20000000, 0x4010, 0, 0x400010, 0x20004010, 0x4000, 0x404000, 0x20004010, 0x10, 0x20400010, 0x20400010, 0, 0x404010, 0x20404000, 0x4010, 0x404000, 0x20404000, 0x20000000, 0x20004000, 0x10, 0x20400010, 0x404000, 0x20404010, 0x400000, 0x4010, 0x20000010, 0x400000, 0x20004000, 0x20000000, 0x4010, 0x20000010, 0x20404010, 0x404000, 0x20400000, 0x404010, 0x20404000, 0, 0x20400010, 0x10, 0x4000, 0x20400000, 0x404010, 0x4000, 0x400010, 0x20004010, 0, 0x20404000, 0x20000000, 0x400010, 0x20004010);
                var spfunction7 = new Array(0x200000, 0x4200002, 0x4000802, 0, 0x800, 0x4000802, 0x200802, 0x4200800, 0x4200802, 0x200000, 0, 0x4000002, 0x2, 0x4000000, 0x4200002, 0x802, 0x4000800, 0x200802, 0x200002, 0x4000800, 0x4000002, 0x4200000, 0x4200800, 0x200002, 0x4200000, 0x800, 0x802, 0x4200802, 0x200800, 0x2, 0x4000000, 0x200800, 0x4000000, 0x200800, 0x200000, 0x4000802, 0x4000802, 0x4200002, 0x4200002, 0x2, 0x200002, 0x4000000, 0x4000800, 0x200000, 0x4200800, 0x802, 0x200802, 0x4200800, 0x802, 0x4000002, 0x4200802, 0x4200000, 0x200800, 0, 0x2, 0x4200802, 0, 0x200802, 0x4200000, 0x800, 0x4000002, 0x4000800, 0x800, 0x200002);
                var spfunction8 = new Array(0x10001040, 0x1000, 0x40000, 0x10041040, 0x10000000, 0x10001040, 0x40, 0x10000000, 0x40040, 0x10040000, 0x10041040, 0x41000, 0x10041000, 0x41040, 0x1000, 0x40, 0x10040000, 0x10000040, 0x10001000, 0x1040, 0x41000, 0x40040, 0x10040040, 0x10041000, 0x1040, 0, 0, 0x10040040, 0x10000040, 0x10001000, 0x41040, 0x40000, 0x41040, 0x40000, 0x10041000, 0x1000, 0x40, 0x10040040, 0x1000, 0x41040, 0x10001000, 0x40, 0x10000040, 0x10040000, 0x10040040, 0x10000000, 0x40000, 0x10001040, 0, 0x10041040, 0x40040, 0x10000040, 0x10040000, 0x10001000, 0x10001040, 0, 0x10041040, 0x41000, 0x41000, 0x1040, 0x1040, 0x40040, 0x10000000, 0x10041000);
                var keys = des_createKeys(key);
                var m = 0,
                    i, j, temp, temp2, right1, right2, left, right, looping;
                var cbcleft, cbcleft2, cbcright, cbcright2;
                var endloop, loopinc;
                var len = message.length;
                var chunk = 0;
                var iterations = keys.length == 32 ? 3 : 9;
                if (iterations == 3) {
                    looping = encrypt ? new Array(0, 32, 2) : new Array(30, -2, -2);
                } else {
                    looping = encrypt ? new Array(0, 32, 2, 62, 30, -2, 64, 96, 2) : new Array(94, 62, -2, 32, 64, 2, 30, -2, -2);
                }
                message += "\0\0\0\0\0\0\0\0";
                var result = "";
                var tempresult = "";
                if (mode == 1) {
                    cbcleft = (iv.charCodeAt(m++) << 24) | (iv.charCodeAt(m++) << 16) | (iv.charCodeAt(m++) << 8) | iv.charCodeAt(m++);
                    cbcright = (iv.charCodeAt(m++) << 24) | (iv.charCodeAt(m++) << 16) | (iv.charCodeAt(m++) << 8) | iv.charCodeAt(m++);
                    m = 0;
                }
                while (m < len) {
                    if (encrypt) {
                        left = (message.charCodeAt(m++) << 16) | message.charCodeAt(m++);
                        right = (message.charCodeAt(m++) << 16) | message.charCodeAt(m++);
                    } else {
                        left = (message.charCodeAt(m++) << 24) | (message.charCodeAt(m++) << 16) | (message.charCodeAt(m++) << 8) | message.charCodeAt(m++);
                        right = (message.charCodeAt(m++) << 24) | (message.charCodeAt(m++) << 16) | (message.charCodeAt(m++) << 8) | message.charCodeAt(m++);
                    }


                    if (mode == 1) {
                        if (encrypt) {
                            left ^= cbcleft;
                            right ^= cbcright;
                        } else {
                            cbcleft2 = cbcleft;
                            cbcright2 = cbcright;
                            cbcleft = left;
                            cbcright = right;
                        }
                    }
                    temp = ((left >>> 4) ^ right) & 0x0f0f0f0f;
                    right ^= temp;
                    left ^= (temp << 4);
                    temp = ((left >>> 16) ^ right) & 0x0000ffff;
                    right ^= temp;
                    left ^= (temp << 16);
                    temp = ((right >>> 2) ^ left) & 0x33333333;
                    left ^= temp;
                    right ^= (temp << 2);
                    temp = ((right >>> 8) ^ left) & 0x00ff00ff;
                    left ^= temp;
                    right ^= (temp << 8);
                    temp = ((left >>> 1) ^ right) & 0x55555555;
                    right ^= temp;
                    left ^= (temp << 1);
                    left = ((left << 1) | (left >>> 31));
                    right = ((right << 1) | (right >>> 31));
                    for (j = 0; j < iterations; j += 3) {
                        endloop = looping[j + 1];
                        loopinc = looping[j + 2];
                        for (i = looping[j]; i != endloop; i += loopinc) {
                            right1 = right ^ keys[i];
                            right2 = ((right >>> 4) | (right << 28)) ^ keys[i + 1];
                            temp = left;
                            left = right;
                            right = temp ^ (spfunction2[(right1 >>> 24) & 0x3f] | spfunction4[(right1 >>> 16) & 0x3f] | spfunction6[(right1 >>> 8) & 0x3f] | spfunction8[right1 & 0x3f] | spfunction1[(right2 >>> 24) & 0x3f] | spfunction3[(right2 >>> 16) & 0x3f] | spfunction5[(right2 >>> 8) & 0x3f] | spfunction7[right2 & 0x3f]);
                        }
                        temp = left;
                        left = right;
                        right = temp;
                    }
                    left = ((left >>> 1) | (left << 31));
                    right = ((right >>> 1) | (right << 31));
                    temp = ((left >>> 1) ^ right) & 0x55555555;
                    right ^= temp;
                    left ^= (temp << 1);
                    temp = ((right >>> 8) ^ left) & 0x00ff00ff;
                    left ^= temp;
                    right ^= (temp << 8);
                    temp = ((right >>> 2) ^ left) & 0x33333333;
                    left ^= temp;
                    right ^= (temp << 2);
                    temp = ((left >>> 16) ^ right) & 0x0000ffff;
                    right ^= temp;
                    left ^= (temp << 16);
                    temp = ((left >>> 4) ^ right) & 0x0f0f0f0f;
                    right ^= temp;
                    left ^= (temp << 4);
                    if (mode == 1) {
                        if (encrypt) {
                            cbcleft = left;
                            cbcright = right;
                        } else {
                            left ^= cbcleft2;
                            right ^= cbcright2;
                        }
                    }
                    if (encrypt) {
                        tempresult += String.fromCharCode((left >>> 24), ((left >>> 16) & 0xff), ((left >>> 8) & 0xff), (left & 0xff), (right >>> 24), ((right >>> 16) & 0xff), ((right >>> 8) & 0xff), (right & 0xff));
                    } else {
                        tempresult += String.fromCharCode(((left >>> 16) & 0xffff), (left & 0xffff), ((right >>> 16) & 0xffff), (right & 0xffff));
                    }
                    encrypt ? chunk += 16 : chunk += 8;
                    if (chunk == 512) {
                        result += tempresult;
                        tempresult = "";
                        chunk = 0;
                    }
                }
                return result + tempresult;
            };
            //密钥生成函数
            var des_createKeys = function(key) {
                var pc2bytes0 = new Array(0, 0x4, 0x20000000, 0x20000004, 0x10000, 0x10004, 0x20010000, 0x20010004, 0x200, 0x204, 0x20000200, 0x20000204, 0x10200, 0x10204, 0x20010200, 0x20010204);
                var pc2bytes1 = new Array(0, 0x1, 0x100000, 0x100001, 0x4000000, 0x4000001, 0x4100000, 0x4100001, 0x100, 0x101, 0x100100, 0x100101, 0x4000100, 0x4000101, 0x4100100, 0x4100101);
                var pc2bytes2 = new Array(0, 0x8, 0x800, 0x808, 0x1000000, 0x1000008, 0x1000800, 0x1000808, 0, 0x8, 0x800, 0x808, 0x1000000, 0x1000008, 0x1000800, 0x1000808);
                var pc2bytes3 = new Array(0, 0x200000, 0x8000000, 0x8200000, 0x2000, 0x202000, 0x8002000, 0x8202000, 0x20000, 0x220000, 0x8020000, 0x8220000, 0x22000, 0x222000, 0x8022000, 0x8222000);
                var pc2bytes4 = new Array(0, 0x40000, 0x10, 0x40010, 0, 0x40000, 0x10, 0x40010, 0x1000, 0x41000, 0x1010, 0x41010, 0x1000, 0x41000, 0x1010, 0x41010);
                var pc2bytes5 = new Array(0, 0x400, 0x20, 0x420, 0, 0x400, 0x20, 0x420, 0x2000000, 0x2000400, 0x2000020, 0x2000420, 0x2000000, 0x2000400, 0x2000020, 0x2000420);
                var pc2bytes6 = new Array(0, 0x10000000, 0x80000, 0x10080000, 0x2, 0x10000002, 0x80002, 0x10080002, 0, 0x10000000, 0x80000, 0x10080000, 0x2, 0x10000002, 0x80002, 0x10080002);
                var pc2bytes7 = new Array(0, 0x10000, 0x800, 0x10800, 0x20000000, 0x20010000, 0x20000800, 0x20010800, 0x20000, 0x30000, 0x20800, 0x30800, 0x20020000, 0x20030000, 0x20020800, 0x20030800);
                var pc2bytes8 = new Array(0, 0x40000, 0, 0x40000, 0x2, 0x40002, 0x2, 0x40002, 0x2000000, 0x2040000, 0x2000000, 0x2040000, 0x2000002, 0x2040002, 0x2000002, 0x2040002);
                var pc2bytes9 = new Array(0, 0x10000000, 0x8, 0x10000008, 0, 0x10000000, 0x8, 0x10000008, 0x400, 0x10000400, 0x408, 0x10000408, 0x400, 0x10000400, 0x408, 0x10000408);
                var pc2bytes10 = new Array(0, 0x20, 0, 0x20, 0x100000, 0x100020, 0x100000, 0x100020, 0x2000, 0x2020, 0x2000, 0x2020, 0x102000, 0x102020, 0x102000, 0x102020);
                var pc2bytes11 = new Array(0, 0x1000000, 0x200, 0x1000200, 0x200000, 0x1200000, 0x200200, 0x1200200, 0x4000000, 0x5000000, 0x4000200, 0x5000200, 0x4200000, 0x5200000, 0x4200200, 0x5200200);
                var pc2bytes12 = new Array(0, 0x1000, 0x8000000, 0x8001000, 0x80000, 0x81000, 0x8080000, 0x8081000, 0x10, 0x1010, 0x8000010, 0x8001010, 0x80010, 0x81010, 0x8080010, 0x8081010);
                var pc2bytes13 = new Array(0, 0x4, 0x100, 0x104, 0, 0x4, 0x100, 0x104, 0x1, 0x5, 0x101, 0x105, 0x1, 0x5, 0x101, 0x105);
                var iterations = key.length >= 24 ? 3 : 1;
                var keys = new Array(32 * iterations);
                var shifts = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0);
                var lefttemp, righttemp, m = 0,
                    n = 0,
                    temp;
                for (var j = 0; j < iterations; j++) {
                    var left = (key.charCodeAt(m++) << 24) | (key.charCodeAt(m++) << 16) | (key.charCodeAt(m++) << 8) | key.charCodeAt(m++);
                    var right = (key.charCodeAt(m++) << 24) | (key.charCodeAt(m++) << 16) | (key.charCodeAt(m++) << 8) | key.charCodeAt(m++);
                    var temp = ((left >>> 4) ^ right) & 0x0f0f0f0f;
                    right ^= temp;
                    left ^= (temp << 4);
                    temp = ((right >>> -16) ^ left) & 0x0000ffff;
                    left ^= temp;
                    right ^= (temp << -16);
                    temp = ((left >>> 2) ^ right) & 0x33333333;
                    right ^= temp;
                    left ^= (temp << 2);
                    temp = ((right >>> -16) ^ left) & 0x0000ffff;
                    left ^= temp;
                    right ^= (temp << -16);
                    temp = ((left >>> 1) ^ right) & 0x55555555;
                    right ^= temp;
                    left ^= (temp << 1);
                    temp = ((right >>> 8) ^ left) & 0x00ff00ff;
                    left ^= temp;
                    right ^= (temp << 8);
                    temp = ((left >>> 1) ^ right) & 0x55555555;
                    right ^= temp;
                    left ^= (temp << 1);
                    temp = (left << 8) | ((right >>> 20) & 0x000000f0);
                    left = (right << 24) | ((right << 8) & 0xff0000) | ((right >>> 8) & 0xff00) | ((right >>> 24) & 0xf0);
                    right = temp;
                    for (var i = 0; i < shifts.length; i++) {
                        if (shifts[i]) {
                            left = (left << 2) | (left >>> 26);
                            right = (right << 2) | (right >>> 26);
                        } else {
                            left = (left << 1) | (left >>> 27);
                            right = (right << 1) | (right >>> 27);
                        }
                        left &= -0xf;
                        right &= -0xf;
                        lefttemp = pc2bytes0[left >>> 28] | pc2bytes1[(left >>> 24) & 0xf] | pc2bytes2[(left >>> 20) & 0xf] | pc2bytes3[(left >>> 16) & 0xf] | pc2bytes4[(left >>> 12) & 0xf] | pc2bytes5[(left >>> 8) & 0xf] | pc2bytes6[(left >>> 4) & 0xf];
                        righttemp = pc2bytes7[right >>> 28] | pc2bytes8[(right >>> 24) & 0xf] | pc2bytes9[(right >>> 20) & 0xf] | pc2bytes10[(right >>> 16) & 0xf] | pc2bytes11[(right >>> 12) & 0xf] | pc2bytes12[(right >>> 8) & 0xf] | pc2bytes13[(right >>> 4) & 0xf];
                        temp = ((righttemp >>> 16) ^ lefttemp) & 0x0000ffff;
                        keys[n++] = lefttemp ^ temp;
                        keys[n++] = righttemp ^ (temp << 16);
                    }
                }
                return keys;
            };
            //将普通的字符串转换成16进制代码的字符串
            var stringToHex = function(s) {
                var r = "";
                var hexes = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
                for (var i = 0; i < (s.length); i++) {
                    r += hexes[s.charCodeAt(i) >> 4] + hexes[s.charCodeAt(i) & 0xf];
                }
                return r;
            };
            //将16进制代码的字符串转换成普通的字符串
            var HexTostring = function(s) {
                var r = "";
                for (var i = 0; i < s.length; i += 2) {
                    var sxx = parseInt(s.substring(i, i + 2), 16);
                    r += String.fromCharCode(sxx);
                }
                return r;
            };
            var ciphertext = stringToHex(des(key, message, 1, 0));
            return ciphertext;
        }
    });
});
