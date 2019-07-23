;layui.define(function (e) {
    layui.use(["admin", "carousel"], function () {
        var e = layui.$, a = (layui.admin, layui.carousel), t = (layui.element, layui.device());
        e(".layadmin-carousel").each(function () {
            var i = e(this);
            a.render({
                elem: this,
                width: "100%",
                arrow: "none",
                interval: i.data("interval"),
                autoplay: i.data("autoplay") === !0,
                trigger: t.ios || t.android ? "click" : "hover",
                anim: i.data("anim")
            })
        })
    });
    layui.use(["echarts"], function () {
        var e = layui.$, a = layui.echarts, t = [], i = [{
                title: {text: "年度销售变化表", subtext: "纯属虚构"},
                tooltip: {trigger: "axis"},
                legend: {data: ["飞鹰队", "猎豹队"]},
                calculable: !0,
                xAxis: [{
                    type: "category",
                    boundaryGap: !1,
                    data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
                }],
                yAxis: [{type: "value", axisLabel: {formatter: "{value} 万元"}}],
                series: [{
                    name: "飞鹰队",
                    type: "line",
                    data: [11, 11, 15, 13, 12, 13, 20, 12, 14, 25, 11, 24]
                }, {
                    name: "猎豹队",
                    type: "line",
                    data: [10, 30, 21, 15, 23, 12, 9, 14, 13, 18, 16, 20]
                }]
            }],
            n = e("#LAY-index-normline").children("div"),
            l = function (e) {
                t[e] = a.init(n[e],
                    layui.echartsTheme),
                    t[e].setOption(i[e]),
                    window.onresize = t[e].resize
            };
        if (n[0]) {
            l(0);
        }
    });
    e("senior", {});
});