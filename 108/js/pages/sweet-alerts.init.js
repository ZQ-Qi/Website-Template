!
function(t) {
    "use strict";
    var n = function() {};
    n.prototype.init = function() {
        t("#sa-basic").on("click",
        function() {
            swal({
                title: "一个傻瓜都会使用电脑，蛤蛤！",
                confirmButtonClass: "btn btn-confirm mt-2"
            }).
            catch(swal.noop)
        }),
        t("#sa-title").click(function() {
            swal({
                title: "互联网？",
                text: "那东西还在吗？",
                type: "question",
                confirmButtonClass: "btn btn-confirm mt-2"
            })
        }),
        t("#sa-success").click(function() {
            swal({
                title: "干得漂亮",
                text: "你点击这个按钮",
                type: "success",
                confirmButtonClass: "btn btn-confirm mt-2"
            })
        }),
        t("#sa-warning").click(function() {
            swal({
                title: "你确定吗？",
                text: "你不可能回复这个！",
                type: "warning",
                showCancelButton: !0,
                confirmButtonClass: "btn btn-confirm mt-2",
                cancelButtonClass: "btn btn-cancel ml-2 mt-2",
                confirmButtonText: "是的删除它！"
            }).then(function() {
                swal({
                    title: "删除 !",
                    text: "你的文件被删除！",
                    type: "success",
                    confirmButtonClass: "btn btn-confirm mt-2"
                })
            })
        }),
        t("#sa-params").click(function() {
            swal({
                title: "你确定吗？",
                text: "你不可能回复这个！",
                type: "warning",
                showCancelButton: !0,
                confirmButtonText: "是的，删除它！",
                cancelButtonText: "不，取消！",
                confirmButtonClass: "btn btn-success mt-2",
                cancelButtonClass: "btn btn-danger ml-2 mt-2",
                buttonsStyling: !1
            }).then(function() {
                swal({
                    title: "删除 !",
                    text: "你的文件被删除！",
                    type: "success",
                    confirmButtonClass: "btn btn-confirm mt-2"
                })
            },
            function(t) {
                "cancel" === t && swal({
                    title: "取消",
                    text: "你想象中的文件是安全的 :)",
                    type: "error",
                    confirmButtonClass: "btn btn-confirm mt-2"
                })
            })
        }),
        t("#sa-image").click(function() {
            swal({
                title: "标题",
                text: "这里可修改你的图片内容",
                imageUrl: "assets/images/logo-sm.png",
                imageHeight: 50,
                animation: !1,
                confirmButtonClass: "btn btn-confirm mt-2"
            })
        }),
        t("#sa-close").click(function() {
            swal({
                title: "自动关闭弹窗",
                text: "我会在两秒后关闭",
                timer: 2e3,
                confirmButtonClass: "btn btn-confirm mt-2"
            }).then(function() {},
            function(t) {
                "timer" === t && console.log("我被计时器关闭了")
            })
        }),
        t("#custom-html-alert").click(function() {
            swal({
                title: "<i>HTML</i> <u>示例</u>",
                type: "info",
                html: '你可以使用 <b>粗体文字</b>, <a href="//www.tecms.net/">链接</a> 和其他HTML标签',
                showCloseButton: !0,
                showCancelButton: !0,
                confirmButtonClass: "btn btn-confirm mt-2",
                cancelButtonClass: "btn btn-cancel ml-2 mt-2",
                confirmButtonText: '<i class="mdi mdi-thumb-up-outline"></i> NIce!',
                cancelButtonText: '<i class="mdi mdi-thumb-down-outline"></i>'
            })
        }),
        t("#custom-padding-width-alert").click(function() {
            swal({
                title: "自定义宽度，填充，背景。",
                width: 600,
                padding: 100,
                confirmButtonClass: "btn btn-confirm mt-2",
                background: "#fff url(//subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry.png)"
            })
        }),
        t("#ajax-alert").click(function() {
            swal({
                title: "提交电子邮件运行Ajax请求",
                input: "email",
                showCancelButton: !0,
                confirmButtonText: "提交",
                showLoaderOnConfirm: !0,
                confirmButtonClass: "btn btn-confirm mt-2",
                cancelButtonClass: "btn btn-cancel ml-2 mt-2",
                preConfirm: function(t) {
                    return new Promise(function(n, e) {
                        setTimeout(function() {
                            "3494490@qq.com" === t ? e("这封电子邮件已经收到了。") : n()
                        },
                        2e3)
                    })
                },
                allowOutsideClick: !1
            }).then(function(t) {
                swal({
                    type: "成功",
                    title: "AJAX请求完成！",
                    html: "提交电子邮件： " + t,
                    confirmButtonClass: "btn btn-confirm mt-2"
                })
            })
        }),
        t("#chaining-alert").click(function() {
            swal.setDefaults({
                input: "text",
                confirmButtonText: "Next &rarr;",
                showCancelButton: !0,
                animation: !1,
                progressSteps: ["1", "2", "3"],
                confirmButtonClass: "btn btn-confirm mt-2",
                cancelButtonClass: "btn btn-cancel ml-2 mt-2"
            });
            swal.queue([{
                title: "问题 1",
                text: "更换到2很容易"
            },
            "问题 2", "问题 3"]).then(function(t) {
                swal.resetDefaults(),
                swal({
                    title: "都做完了！",
                    confirmButtonClass: "btn btn-confirm mt-2",
                    html: "你的答案: <pre>" + JSON.stringify(t) + "</pre>",
                    confirmButtonText: "Nice!",
                    showCancelButton: !1
                })
            },
            function() {
                swal.resetDefaults()
            })
        }),
        t("#dynamic-alert").click(function() {
            swal.queue([{
                title: "您的公共IP",
                confirmButtonText: "显示我的公共IP",
                confirmButtonClass: "btn btn-confirm mt-2",
                text: "您的公共IP将通过Ajax请求接收",
                showLoaderOnConfirm: !0,
                preConfirm: function() {
                    return new Promise(function(n) {
                        t.get("https://api.ipify.org?format=json").done(function(t) {
                            swal.insertQueueStep(t.ip),
                            n()
                        })
                    })
                }
            }])
        })
    },
    t.SweetAlert = new n,
    t.SweetAlert.Constructor = n
} (window.jQuery),
function(t) {
    "使用严格";
    t.SweetAlert.init()
} (window.jQuery);