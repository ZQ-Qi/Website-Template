layui.define(['jquery', 'form','admin','layedit','form','enhanceform','fwb'], function (exports) {
    var $ = layui.jquery
        , admin = layui.admin
        , layedit = layui.layedit
        , element = layui.element
        ,fwb = layui.fwb
        , enhanceForm = layui.enhanceform,//表单增强插件，给元素赋初始值，因此版本为2.2.6，所以需要用此插件进行给表单赋初始值，从2.3.0开始可直接用form.val('lay-filter的值', object)对表单元素赋初始值;参考网址：http://fly.layui.com/jie/23002/
        layer = layui.layer;
        form = layui.form;

    var forminit = {
        elem: [],
        selectArr: [],//下拉菜单
        checkBoxArr1: [],//复选框1
        checkBoxArr2: [],//复选框2
        radioArr: [],//单选框
        textArr: [],//文本框/文本域
        fwbobj: {},//富文本编辑器
        limitarea:[],//限制文本字数的文本域
        jsonData:{},//重新渲染赋值的初始对象
        enhance:'',//表单选择器
        editindex:'',//富文本编辑器编号
        fwbname:'',//富文本的name名
        render: function (option) {
            if (option.elem==[] || option.elem==undefined ||option.elem=="") {
                return layer.msg('请传入必要的配置信息!');
            }else{
                this.elem = option.elem;
                this.selectArr = option.selectArr;
                this.checkBoxArr1 = option.checkBoxArr1;
                this.checkBoxArr2 = option.checkBoxArr2;
                this.radioArr = option.radioArr;
                this.textAreaArr = option.textAreaArr;
                this.textArr = option.textArr;
                this.fwbobj = option.fwbobj;
                this.limitarea = option.limitarea;
                this.unite();
            }
        },
        unite: function () {//进行数据的渲染
            var that = this;
            that.enhance = new enhanceForm({
               elem: that.elem[0] //表单选择器
            });
            this.inputtest(this.selectArr)? this.setSelect():"";
            this.inputtest(this.checkBoxArr1)? this.setCheckB1():"";
            this.inputtest(this.checkBoxArr2)? this.setCheckB2():"";
            this.inputtest(this.textArr)? this.setText():"";
            this.inputtest(this.radioArr)? this.setRadio():"";
            this.fwbobj!=undefined?this.setFwb():"";
            this.limitarea!=undefined?this.setLimit():"";
        },
        inputtest:function(data){//判断输入的格式
            if(data==[] || data==undefined ||data==""){
                return false;
            }else{
                return true;
            }
        },
        setSelect: function () {//渲染下拉菜单
            var that = this;
           for(var i=0;i<that.selectArr.length;i++){
               var html='html'+i;
               $.each(that.selectArr[i].data, function (infoindex1, info1) {
                   var dis=info1.disabled==true ? "disabled":"";//设定是否禁用
                   html += "<option value=" + info1.value + " "+dis+" >" + info1.key + "</option>"
               });
               html=html.replace("html"+i,"");
              $(that.selectArr[i].id).append(html);
               that.jsonData[that.selectArr[i].name]=that.selectArr[i].initdata;
           }
            form.render('select');
        },
        setCheckB1:function () {//渲染文checkbox数据1
            var that = this;
            var initarr=[];
            for(var i=0;i<that.checkBoxArr1.length;i++){
                var html='html'+i;
                $.each(that.checkBoxArr1[i].data, function (infoindex1, info1) {
                    var namehtml = "check[" + info1.name + "]";
                    var dis=info1.disabled==true ? "disabled":"";//设定是否禁用
                    html += '<input type="checkbox" name=' + namehtml + ' value=' + info1.value + ' '+dis+' title=' + info1.key + '>';
                    if(info1.ischeck){
                        //设置初始值
                        initarr.push('check['+info1.name+']');
                    }
                });
                html=html.replace("html"+i,"");
                $(that.checkBoxArr1[i].id).append(html);
            }
            form.render('checkbox');
            for(var j=0;j<initarr.length;j++){
                that.jsonData[initarr[j]] = true;
            }
            that.enhance.filling(that.jsonData);
        },
        setCheckB2:function () {//渲染文checkbox数据2
            var that = this;
            for(var i=0;i<that.checkBoxArr2.length;i++){
                that.jsonData[that.checkBoxArr2[i].name]=that.checkBoxArr2[i].value;
            }
            that.enhance.filling(that.jsonData);
        },
        setText:function () {//渲染文本框/文本域数据
            var that = this;
            for(var i=0;i<that.textArr.length;i++){
                that.jsonData[that.textArr[i].name]=that.textArr[i].value;
            }
            that.enhance.filling(that.jsonData);
        },
        setRadio:function () {//渲染radio数据
            var that = this;
            for(var i=0;i<that.radioArr.length;i++){
                var html='html'+i;
                $.each(that.radioArr[i].data, function (infoindex1, info1) {
                    var dis=info1.disabled==true ? "disabled":"";//设定是否禁用
                    html += "<input type='radio' name='"+that.radioArr[i].name+"' value=" + info1.value+ " "+dis+" title=" + info1.key + ">"
                });
                html=html.replace("html"+i,"");
                $(that.radioArr[i].id).append(html);
                that.jsonData[that.radioArr[i].name]=that.radioArr[i].initdata;
            }
            form.render('radio');
            that.enhance.filling(that.jsonData);
        },
        setFwb:function () {//渲染富文本数据
            var that = this;
            layedit.set({//设置图片接口
                uploadImage: {
                    url:that.fwbobj.url //接口url
                    ,type:that.fwbobj.type //
                }
            });
            that.jsonData[that.fwbobj.name]=that.fwbobj.value;
            that.enhance.filling(that.jsonData);
            var id=that.fwbobj.id.replace('#','');
            var editindex = layedit.build(id);

            //重置富文本编辑器的信息
            var reset=that.elem+" "+"button[type=reset]";
            $(reset).click(function () {
                $('#LAY_layedit_' + editindex).contents().find('body').html('');
            });
            that.editindex=editindex;
            that.fwbname=that.fwbobj.name;
        },
        getValues: function () {//返回富文本编辑器的索引
            return this.editindex;
        },
        getFwbname:function () {//返回富文本编辑器的name名
            return this.fwbname;
        },
        setLimit:function () {//限制文本域的字数
            var that = this;
            for(var i=0;i<that.limitarea.length;i++){
                var are='textarea[name='+that.limitarea[i].name+']';
                var main=$(that.elem[0]).find(are);
                var a='<div id='+"hhh"+that.limitarea[i].name+'></div>';
                main.parent().append(a);
                main.remove();
                $('#hhh'+that.limitarea[i].name).append(main);
                var box=$('#hhh'+that.limitarea[i].name);
                box.css({"position":"relative"});
                box.find('textera').css({"width":"100%","height":"100%"});
                box.append('<span><em class="inputword">'+that.limitarea[i].max+'</em>/<em class="setword">'+that.limitarea[i].max+'</em></span>');
                box.find('span').css({"position":"absolute","right":"6px","bottom":"6px"});
                box.find('em').css({"fontStyle":"normal"});
                box.find('.inputword').css({"color":"#CC0000"});
                var wordCount = box,
                    textArea = wordCount.find("textarea"),
                    word = wordCount.find(".inputword");
                //调用
                statInputNum(textArea,word);
            }
            function statInputNum(textArea,numItem) {//设置限定字数
                var max = numItem.text(),
                    curLength;
                textArea[0].setAttribute("maxlength", max);
                curLength = textArea.val().length;
                numItem.text(max - curLength);
                if(max<curLength){//如果初始设定数据大于设定的初始值，则截取范围内的值
                    textArea.val(textArea.val().substring(0,max));
                    numItem.text(0);
                }
                textArea.on('input propertychange', function () {
                    numItem.text(max - $(this).val().length);
                });
            }
        }
    };
    exports('forminit', forminit);
});





