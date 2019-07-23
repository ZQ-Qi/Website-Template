layui.define(['jquery', 'form'], function (exports) {
    var $ = layui.jquery,
        layer = layui.layer;
    form = layui.form;

    var cityselect = {
        elem: ["#provid", "#cityid", "#xian2"],
        elembox:"cityselect",
        url: '',//json配置地址
        dataArr: [],//获取数据信息
        setValues: [],//高亮状态
        render: function (option) {
            if (!option) {
                return layer.msg('请传入必要的配置信息!');
            }
            var that = this;
            //覆盖默认值
            if (option.elem.length == "3") {
                this.elem = option.elem || ["#provid", "#cityid", "#xian2"];
            }
            if (option.elem.length == "2") {
                this.elem = option.elem || ["#provid", "#cityid"];
            }
            this.dataArr = option.dataArr || [];
            this.elembox = option.elembox || "cityselect";
            this.url = option.url || '';//json配置地址
            this.setValues = option.setValues || [];
            if (this.url) {
                $.getJSON(this.url, function (res) {
                    that.dataArr = res;
                    that.unite();
                });
            } else {
                return layer.msg('请传入必要的json数据!');
            }
        },
        unite: function () {//进行数据的渲染
            var that = this;
            var provhtml = '';
            var cityhtml = '';
            var xianhtml = '';//定义省份,城市,县;
            if (that.elem.length == "2") {
                $.each(that.dataArr, function (infoIndex, info) {
                    provhtml += "<option value=" + info.code + ">" + info.name + "</option>";
                    $.each(info.childs, function (infoIndex1, info1) {
                        cityhtml += "<option value=" + info1.code + ">" + info1.name + "</option>";
                    });
                });
                $(that.elem[0]).append(provhtml);
                form.render('select',that.elembox);
                $(that.elem[1]).append(cityhtml);
                form.render('select',that.elembox);
            }
            if (that.elem.length == "3") {
                $.each(that.dataArr, function (infoIndex, info) {
                    provhtml += "<option value=" + info.code + ">" + info.name + "</option>";
                    $.each(info.childs, function (infoIndex1, info1) {
                        cityhtml += "<option value=" + info1.code + ">" + info1.name + "</option>";
                        $.each(info1.childs, function (infoIndex1, info2) {
                            xianhtml += "<option value=" + info2.code + ">" + info2.name + "</option>"
                        });
                    });
                });
                $(that.elem[0]).append(provhtml);
                form.render('select',that.elembox);
                $(that.elem[1]).append(cityhtml);
                form.render('select',that.elembox);
                $(that.elem[2]).append(xianhtml);
                form.render('select',that.elembox);
            }
            ;
            if (that.setValues[2] == "") {
                if (that.setValues[1] == "") {
                    if (that.setValues[0] == "") {
                    } else {
                        that.getValues1();
                    }
                } else {
                    that.getValues2();
                }
            } else {
                that.getValues3();
            }
        },
        getValues1: function () {//只传入省
            var that = this;
            var pro = $(this.elem[0]);
            var city = $(this.elem[1]);
            var xian = $(this.elem[2]);
            for (var i = 0; i < that.dataArr.length; i++) {//根据城市找出对应的省份
                if (that.dataArr[i].code == that.setValues[0]) {
                    pro.val(that.dataArr[i].code);
                    form.render('select',that.elembox);
                    relaypro(that.dataArr[i].childs);
                    return;
                }
            }
            function relaypro(citydata) {//根据省，渲染市和县
                var cityhtml = '';
                var xianhtml = '';//城市,县;
                if (citydata.length > 0) {
                    $.each(citydata, function (infoIndex1, info1) {
                        cityhtml += "<option value=" + info1.code + ">" + info1.name + "</option>";
                        $.each(info1.childs, function (infoIndex1, info2) {
                            xianhtml += "<option value=" + info2.code + ">" + info2.name + "</option>"
                        });
                    });
                    $(that.elem[1]).html('');
                    $(that.elem[2]).html('');
                    $(that.elem[1]).append('<option value="">请选择市</option>');
                    $(that.elem[1]).append(cityhtml);
                    form.render('select',that.elembox);
                    $(that.elem[2]).append('<option value="">请选择县</option>');
                    $(that.elem[2]).append(xianhtml);
                    form.render('select',that.elembox);
                } else {
                    $(that.elem[1]).html('');
                    $(that.elem[2]).html('');
                }
            }

            this.watch();
        },
        getValues2: function () {//传入无县有市
            var that = this;
            var pro = $(this.elem[0]);
            var city = $(this.elem[1]);
            var xian = $(this.elem[2]);
            for (var i = 0; i < that.dataArr.length; i++) {//根据城市找出对应的省份
                for (var j = 0; j < that.dataArr[i].childs.length; j++) {
                    if (that.dataArr[i].childs[j].code == that.setValues[1]) {
                        prorend(i);
                        xianred(that.dataArr[i].childs[j].childs);
                    }
                }
            }

            function prorend(val) {//渲染省份
                pro.val(that.dataArr[val].code);
                form.render('select',that.elembox);
                return;
            }

            function cityrend() {//渲染城市
                city.val(that.setValues[1]);
                form.render('select',that.elembox);
            }

            cityrend();

            function xianred(xiandata) {//渲染县区
                var xianhtml = '';//县;
                if (xiandata.length > 0) {
                    $.each(xiandata, function (infoIndex1, info2) {
                        xianhtml += "<option value=" + info2.code + ">" + info2.name + "</option>"
                    });
                    $(that.elem[2]).html('');
                    $(that.elem[2]).append('<option value="">请选择县</option>');
                    $(that.elem[2]).append(xianhtml);
                    form.render('select',that.elembox);
                } else {
                    $(that.elem[2]).html('');
                    form.render('select',that.elembox);
                }
            }

            this.watch();
        },
        getValues3: function () {//传入有县
            var that = this;
            var pro = $(this.elem[0]);
            var city = $(this.elem[1]);
            var xian = $(this.elem[2]);
            for (var i = 0; i < that.dataArr.length; i++) {//根据城市找出对应的省份
                for (var j = 0; j < that.dataArr[i].childs.length; j++) {
                    for (var k = 0; k < that.dataArr[i].childs[j].childs.length; k++) {
                        if (that.dataArr[i].childs[j].childs[k].code == that.setValues[2]) {
                            prorend(i);
                            cityrend(i, j);
                            xianred(that.dataArr[i].childs[j].childs[k].code);
                        }
                    }
                }
            }

            function prorend(val) {//渲染省份
                pro.val(that.dataArr[val].code);
                form.render('select',that.elembox);
                return;
            }

            function cityrend(val1, val2) {//渲染城市
                city.val(that.dataArr[val1].childs[val2].code);
                form.render('select',that.elembox);
                return;
            }

            function xianred(val) {//渲染县区
                xian.val(val);
                form.render('select',that.elembox);
                return;
            };
            this.watch();
        },
        watch: function () {//监听选择
            var that = this;
            var provid = this.elem[0].replace('#', '');
            var cityid = this.elem[1].replace('#', '');
            var xianid = this.elem[2].replace('#', '');
            var pro = $(this.elem[0]);
            var city = $(this.elem[1]);
            var xian = $(this.elem[2]);
            form.on('select(' + provid + ')', function (data) {//监听省份
                var selectpro = data.value;
                for (var i = 0; i < that.dataArr.length; i++) {//根据省份找出对应的城市
                    if (that.dataArr[i].code == selectpro) {
                        cityxian(that.dataArr[i].childs);
                    }
                }
                function cityxian(citydata) {//重新渲染城市和县区
                    var city2 = '';
                    var xian2 = '';
                    if (citydata.length > 0) {
                        for (var i = 0; i < citydata.length; i++) {
                            city2 += "<option value=" + citydata[i].code + ">" + citydata[i].name + "</option>";
                            for (var j = 0; j < citydata[i].childs.length; j++) {
                                xian2 += "<option value=" + citydata[i].childs[j].code + ">" + citydata[i].childs[j].name + "</option>";
                            }
                        }
                        city.html('');
                        xian.html('');
                        city.append('<option value="">请选择市</option>');
                        xian.append('<option value="">请选择县</option>');
                        city.append(city2);
                        xian.append(xian2);
                        form.render('select',that.elembox);
                    } else {
                        city.html('');
                        xian.html('');
                        form.render('select',that.elembox);
                    }
                };
            });
            form.on('select(' + cityid + ')', function (data) {//监听城市
                var selectcity = data.value;
                var xian2 = '';
                for (var i = 0; i < that.dataArr.length; i++) {//根据城市找出对应的省份
                    for (var j = 0; j < that.dataArr[i].childs.length; j++) {
                        if (that.dataArr[i].childs[j].code == selectcity) {
                            pro.val(that.dataArr[i].code);
                            form.render('select',that.elembox);
                            for (var k = 0; k < that.dataArr[i].childs[j].childs.length; k++) {
                                xian2 += "<option value=" + that.dataArr[i].childs[j].childs[k].code + ">" + that.dataArr[i].childs[j].childs[k].name + "</option>";

                            }
                            xian.html('');
                            xian.append('<option value="">请选择县</option>');
                            xian.append(xian2);
                            form.render('select',that.elembox);
                        }
                    }
                }
            });
            form.on('select(' + xianid + ')', function (data) {//监听县区
                var selectxian = data.value;
                for (var i = 0; i < that.dataArr.length; i++) {//根据城市找出对应的省份
                    for (var j = 0; j < that.dataArr[i].childs.length; j++) {
                        for (var k = 0; k < that.dataArr[i].childs[j].childs.length; k++) {
                            if (that.dataArr[i].childs[j].childs[k].code == selectxian) {
                                pro.val(that.dataArr[i].code);
                                form.render('select',that.elembox);
                                city.val(that.dataArr[i].childs[j].code);
                                form.render('select',that.elembox);
                            }
                        }
                    }
                }
            });
        }
    };
    exports('cityselect', cityselect);
});





