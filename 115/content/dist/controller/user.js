/** layuiAdmin-v1.0.0-beta6 LPPL License By http://www.layui.com/admin/ */
;layui.define("form", function (e) {
    var t = layui.$, i = layui.layer, n = (layui.laytpl, layui.setter, layui.view, layui.admin), s = layui.form,
        a = t("body");
    s.verify({
        nickname: function (e, t) {
            return new RegExp("^[a-zA-Z0-9_一-龥\\s·]+$").test(e) ? /(^\_)|(\__)|(\_+$)/.test(e) ? "用户名首尾不能出现下划线'_'" : /^\d+\d+\d$/.test(e) ? "用户名不能全为数字" : void 0 : "用户名不能有特殊字符"
        }, pass: [/^[\S]{6,12}$/, "密码必须6到12位，且不能出现空格"]
    }), a.on("click", "#LAY-user-getsmscode", function () {
        var e = t("#LAY-user-login-cellphone"), s = e.val();
        return /^1\d{10}$/.test(s) ? void n.req({
            url: "./content/json/user/sms.js", data: {phone: s}, done: function (e) {
                i.msg("验证码已成功发送至您的手机", {offset: "15px", icon: 1, time: 3e3})
            }
        }) : (e.focus(), i.msg("请先输入正确的手机号"))
    }), a.on("click", "#LAY-user-get-vercode", function () {
        t(this);
        this.src = "https://www.oschina.net/action/user/captcha?t=" + (new Date).getTime()
    }), e("user", {})
});