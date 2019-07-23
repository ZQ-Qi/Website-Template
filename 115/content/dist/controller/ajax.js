;layui.define(['api', 'store', 'jsencrypt'], function (exports) {
    var $ = layui.$,
        setter = layui.setter,
        layer = layui.layer,
        router = layui.router(),
        search = router.search,
        store = layui.store,
        api = layui.api,
        jsencrypt = layui.jsencrypt;

    exports('ajax', function (params) {
        //默认请求方式为get
        if (!params.hasOwnProperty('type') || !params.type) {
            params.type = 'get';
        }
        //默认所有接口都需要验证登录
        if (!params.hasOwnProperty('login')) {
            params.login = true;
        }
        //尝试从本地缓存中得到用户信息
        var zhmf = store.get(setter.tableName);
        //验证是否有access_token
        if (!zhmf.access_token && params.login) {
            request({
                url: (setter.debug ? api.ip.a1 : api.ip.b1) + '/authorize/getAndModifyAccessToken',
                type: 'post',
                data: {
                    a: api.sqStr.str1,
                    b: api.sqStr.str2,
                    userId: zhmf.hasOwnProperty('userId') ? zhmf.userId : ''
                },
                encrypt: ['a', 'b', 'userId'],
                dataPos: false,
                callback: function (data) {
                    if (data) {
                        //写入token信息
                        store.set(setter.tableName, data, new Date().getTime() + data.expires_in * 1000);
                        request(params, data.access_token);
                    }
                },
                failback: function () {
                    layer.msg('获取用户身份失败，请刷新重试！');
                },
                errorback: function () {
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
                params.encrypt.forEach(function (v) {
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
                beforeSend: function () {
                    if (!params.hasOwnProperty('loading') || params.loading) {
                        layer.load();
                    }
                },
                data: params.hasOwnProperty('json') && params.json ? JSON.stringify(Pos == 2 ? params.data : '') : (Pos == 2 ? params.data : ''),
                dataType: 'json',
                contentType: params.hasOwnProperty('json') && params.json ? "application/json" : "application/x-www-form-urlencoded; charset=UTF-8",
                processData: params.hasOwnProperty('json') && params.json ? false : true,
                success: function (data, status, jqXHR) {
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
                            var userInfo = store.get(setter.tableName);
                            userInfo.device_info = window.navigator.userAgent;
                            userInfo.locationHref = window.location.href;
                            userInfo.interfaceUrl = urlData;
                            userInfo.interfaceMethod = params.type;
                            userInfo.interfaceData = sendData;
                            userInfo.interfaceErrorMessage = data.message;
                            userInfo.interfaceErrorType = 'false';
                            request({
                                url: api.errLog,
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
                            store.remove("access_token");
                            //return alert(401);
                            //如果是产品环境则提交错误日志
                            //console.log('401错误,跳授权：'+urlData.slice(0, urlData.length - 1));
                            //跳转授权页面
                            return location.hash = search.redirect ? decodeURIComponent(search.redirect) : '/user/login';
                            // return window.location.href = (setter.debug ? api.ip.a1 : api.ip.b1) + "?returnurl=" + encodeURIComponent(location.href);

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
                error: function (jqXHR, status) {
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
                            var userInfo = store.get(setter.tableName);
                            userInfo.device_info = window.navigator.userAgent;
                            userInfo.locationHref = window.location.href;
                            userInfo.interfaceUrl = urlData;
                            userInfo.interfaceMethod = params.type;
                            userInfo.interfaceData = sendData;
                            userInfo.interfaceErrorMessage = data.message;
                            userInfo.interfaceErrorType = 'error';
                            request({
                                url: api.errLog,
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
                complete: function (jqXHR, status) {
                    if (params.finalback) {
                        params.finalback(jqXHR, status);
                    }
                }
            });
        }

    });
});