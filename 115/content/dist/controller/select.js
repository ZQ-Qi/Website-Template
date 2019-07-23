layui.define(['jquery'], function (exports) {
    //do something
    var $ = layui.jquery,
        layer = layui.layer;

    var select = {
        elem: '#select',
        mode: 'multiple',//单选'single',多选'multiple',
        url: '',//json配置地址
        dataArr: [],
        setValues: [],//高亮状态
        getValues: function () {
            var dom = $(this.elem);
            var temp = [];
            dom.find('.select-table-section').each(function () {
                var item = {};
                var domOne = $(this).find('.select-one');
                domOne.each(function(){
                    if ($(this).hasClass('layui-form-checked')) {
                        item.id = $(this).attr('data-id');
                        item.value = $.trim($(this).text());
                        //检测子栏目
                        var arr = [];
                        var domTwo = $(this).parents('.select-table-section').find('.select-two');
                        domTwo.each(function () {
                            if ($(this).hasClass('layui-form-checked')) {
                                arr.push({
                                    id: $(this).attr('data-id'),
                                    value: $.trim($(this).text())
                                });
                            }
                        });
                        item.childs = arr;
                        temp.push(item);
                    }
                });

            });
            return temp
        },
        render: function (option) {
            if (!option) {
                return layer.msg('请传入必要的配置信息!');
            }
            var that = this;
            //覆盖默认值
            this.elem = option.elem || '#select';
            this.mode = option.elem.mode || 'multiple';
            this.dataArr = option.dataArr || [];
            this.url = option.url || '';//json配置地址
            this.setValues = option.setValues || [];

            if (this.url) {
                $.getJSON(this.url, function (res) {
                    that.dataArr = res.data;
                    that.unite();
                });
            } else {
                return layer.msg('请传入必要的json数据!');
            }

        },
        unite: function () {
            // if (this.setValues && this.setValues.length > 0) {
            //     //一级循环
            //     for (var x = 0; x < this.dataArr.length; x++) {
            //         for (var m = 0; m < this.setValues.length; m++) {
            //             if (this.dataArr[x].id == this.setValues[m].id) {
            //                 this.dataArr[x].selected = true;//两个数组之间到，则增加一个选中字段
            //                 if (this.dataArr[x].childs && this.dataArr[x].childs.length > 0) {
            //                     for (var y = 0; y < this.dataArr[x].childs.length; y++) {
            //                         if (this.setValues[m].childs && this.setValues[m].childs.length > 0) {
            //                             for (var n = 0; n < this.setValues[m].childs.length; n++) {
            //                                 if (this.dataArr[x].childs[y].id == this.setValues[m].childs[n].id) {
            //                                     this.dataArr[x].childs[y].selected = true;
            //                                 }
            //                             }
            //                         }
            //                     }
            //                 }
            //             }
            //         }
            //
            //     }
            // }
            var that = this;
            var html = '';//最终模板
            var direct_controlled = '';//直辖市
            var province = '';//省份
            for (var i = 0; i < this.dataArr.length; i++) {
                //1，先缺陷是否是直辖市
                if (this.dataArr[i].id == 10 || this.dataArr[i].id == 11 || this.dataArr[i].id == 30 || this.dataArr[i].id == 60) {
                    direct_controlled +=
                        '<div class="layui-unselect layui-form-checkbox select-one" data-id="' + this.dataArr[i].id + '" lay-skin="primary">' +
                        '      <span><b>' + this.dataArr[i].value + '</b></span><i class="layui-icon layui-icon-ok"></i>' +
                        '</div>';
                } else {
                    province+=
                        '<div class="layui-row select-table-section">' +
                        '                    <div class="select-table-label layui-col-md2 ">' +
                        '                        <div class="layui-unselect layui-form-checkbox select-one" data-id="' + this.dataArr[i].id + '" lay-skin="primary">' +
                        '                            <span><b>' + this.dataArr[i].value + '</b></span><i class="layui-icon layui-icon-ok"></i>' +
                        '                        </div>' +
                        '                    </div>' +
                        '                    <div class="select-table-content layui-col-md10">' +
                        function () {
                            if (this.dataArr[i].childs && this.dataArr[i].childs.length > 0) {
                                var temp = '';
                                for (var j = 0; j < this.dataArr[i].childs.length; j++) {
                                    temp +=
                                        '                        <div class="layui-unselect layui-form-checkbox select-two" data-id="' + this.dataArr[i].childs[j].id + '" lay-skin="primary">' +
                                        '                            <span>' + this.dataArr[i].childs[j].value + '</span><i class="layui-icon layui-icon-ok"></i>' +
                                        '                        </div>';
                                }
                                return temp;
                            } else {
                                return '';
                            }
                        }.bind(this)() +
                        '                    </div>' +
                        '                </div>';
                }
            }
            html +=
                '<div class="layui-row select-table-section">' +
                '<div class="select-table-label layui-col-md12 ">'+
                direct_controlled +
                '</div>' +
                '</div>' +
                province;
            var dom = $(this.elem);
            //渲染页面
            dom.html(html);
            // //添加高亮
            if (this.setValues && this.setValues.length > 0) {
                dom.find('.select-table-section').each(function () {
                    var $one = $(this).find('.select-one');
                    var $two = $(this).find('.select-two');
                    // for (var i = 0; i < that.setValues.length; i++) {
                    //     if ($one.attr('data-id') == that.setValues[i]) {
                    //         $one.addClass('layui-form-checked');
                    //     }
                    // }
                    $one.each(function () {
                        for (var i = 0; i < that.setValues.length; i++) {
                            if ($(this).attr('data-id') == that.setValues[i]) {
                                $(this).addClass('layui-form-checked');
                            }
                        }
                    });
                    $two.each(function () {
                        var isChecked = false;//省份是否被选中
                        for (var j = 0; j < that.setValues.length; j++) {
                            if ($(this).attr('data-id') == that.setValues[j]) {
                                $(this).addClass('layui-form-checked');
                                if (!isChecked) {
                                    $(this).parents('.select-table-section').find('.select-one').addClass('layui-form-checked');
                                    isChecked = true;
                                }
                            }
                        }
                    });
                });
            }
            //绑定一级事件
            dom.find('.select-table-section').on('click', '.select-one', function () {
                if ($(this).hasClass('layui-form-checked')) {
                    $(this).removeClass('layui-form-checked').parents('.select-table-section').find('.select-two').removeClass('layui-form-checked');

                } else {
                    $(this).addClass('layui-form-checked').parents('.select-table-section').find('.select-two').addClass('layui-form-checked');
                }
            });
            //绑定二级事件
            dom.find('.select-table-section').on('click', '.select-two', function () {
                if ($(this).hasClass('layui-form-checked')) {
                    if($(this).removeClass('layui-form-checked').parents('.select-table-content').has('.layui-form-checked').length == 0){
                        $(this).parents('.select-table-section').find('.select-one').removeClass('layui-form-checked');
                    }
                } else {
                    $(this).addClass('layui-form-checked').parents('.select-table-section').find('.select-one').addClass('layui-form-checked');
                }

                // if ($(this).parents('.select-table-section').find('.select-one').hasClass('layui-form-checked')) {
                //     if ($(this).hasClass('layui-form-checked')) {
                //         $(this).removeClass('layui-form-checked');
                //     } else {
                //         $(this).addClass('layui-form-checked');
                //     }
                // } else {
                //     layer.msg('选择二级栏目时，请先开启一起栏目！');
                // }
            });
        }
    };

    exports('select', select);
});