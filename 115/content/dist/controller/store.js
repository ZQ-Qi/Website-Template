/*
* store是layui缓存系统的二次开发，使其支持大对象存储和支持过期时间
* */
;layui.define(function (exports) {
    var $ = layui.$,
        setter = layui.setter,
        layer = layui.layer;

    exports('store', {
        /*
        * @table,存储到缓存中的表名
        * @info,存储到table中的数据对象
        * @expires存储到table中的数据的过期时间
        * */
        set: function (table, info, expires) {
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
                            value: new Date().getTime() + expires//单位毫秒
                        });
                    }
                }
            } else {
                layer.msg('存储的数据格式错误！');
            }
        },
        get: function (table) {
            var zhmf = layui.data(table);
            if ('expires' in zhmf && (new Date().getTime() - zhmf.expires > 0)) {
                //过期后删除access_token和expires
                this.remove(table,['access_token','expires']);
                return layui.data(table);
            }else{
                return zhmf;
            }
        },
        /*
        * @table,表名
        * @keys删除的字段名，支持字符串和数组两种格式*/
        remove: function (table, keys) {
            if (table && keys) {
                if (typeof keys == 'string') {
                    layui.data(table, {
                        key: keys,
                        remove: true
                    });
                } else {
                    keys.forEach(function (v) {
                        layui.data(table, {
                            key: v,
                            remove: true
                        });
                    });
                }
            }
        },
        delete: function (table) {
            layui.data(table, null);
        }
    });
});