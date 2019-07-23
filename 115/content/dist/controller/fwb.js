layui.define(['jquery','layedit', 'form','enhanceform'], function (exports) {
    var $ = layui.jquery,
        layedit = layui.layedit,
        layer = layui.layer,
        enhanceForm = layui.enhanceform;
        form = layui.form;

    var fwb = {
        elem: ["#fwbEditForm","#LAY_demo_editor1"],
        setValues: "",//高亮状态
        editindex:"",//富文本编辑器编号
        url:"",//传输图片的接口
        type:"post",//传输图片的方式默认为post
        getValues: function () {
            return this.editindex;
        },
        render: function (option) {
            if (!option) {
                return layer.msg('请传入必要的配置信息!');
            }
            var that = this;
            //覆盖默认值
            this.elem = option.elem || ["#fwbEditForm","#LAY_demo_editor1"];
            this.setValues = option.setValues || "";
            this.url = option.url || "";
            this.type = option.type || "post";
            this.unite();

        },
        unite: function () {//进行数据的渲染
            var that=this;
            var formid=this.elem[0];
            var editid=this.elem[1].replace("#","");

            var enhance = new enhanceForm({
                elem: formid //表单选择器
            });
            var jsonData = {
                "content": that.setValues//(富文本，textarea,字符串)
            };
            layedit.set({//设置图片接口
                uploadImage: {
                    url:that.url //接口url
                    ,type:that.type //默认post
                }
            });
            enhance.filling(jsonData);//其中jsonData为表单数据的json对象,对象属性名为标签的name名,若包含给富文本编辑器赋初始值，必须在其layedit.build之前生成
            var editindex = layedit.build(editid);//创建一个富文本编辑器,若要给其赋初始值，必须先执行enhance.filling方法给其先赋值，再执行此步骤
            //重置富文本编辑器的信息
            var reset=formid+" "+"button[type=reset]";
            $(reset).click(function () {
                $('#LAY_layedit_' + editindex).contents().find('body').html('');

            });
            that.editindex=editindex;
        }
    };
    exports('fwb', fwb);
});





