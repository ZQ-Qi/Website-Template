/** layuiAdmin-v1.0.0-beta6 LPPL License By http://www.layui.com/admin/ */
;layui.define("view", function (e) {
    var a = layui.jquery, i = layui.laytpl, t = layui.element, n = layui.setter, s = layui.view, l = layui.device(),
        r = a(window), o = a("body"), u = a("#" + n.container), d = "layui-show", c = "layui-this", y = "#LAY_app_body",
        m = "LAY_app_flexible", f = "layadmin-side-spread-sm", h = "layadmin-tabsbody-item",
        p = "layui-icon-shrink-right", v = "layui-icon-spread-left", b = "layadmin-side-shrink",
        g = "LAY-system-side-menu", x = {
            v: "1.0.0-beta6", req: s.req, screen: function () {
                var e = r.width();
                return e >= 1200 ? 3 : e >= 992 ? 2 : e >= 768 ? 1 : 0
            }, exit: s.exit, sideFlexible: function (e) {
                var i = u, t = a("#" + m), s = x.screen();
                "spread" === e ? (t.removeClass(v).addClass(p), s < 2 ? i.addClass(f) : i.removeClass(f), i.removeClass(b)) : (t.removeClass(p).addClass(v), s < 2 ? i.removeClass(b) : i.addClass(b), i.removeClass(f)), layui.event.call(this, n.MOD_NAME, "side({*})", {status: e})
            }, on: function (e, a) {
                return layui.onevent.call(this, n.MOD_NAME, e, a)
            }, popup: s.popup, popupRight: function (e) {
                return x.popup.index = layer.open(a.extend({
                    type: 1,
                    id: "LAY_adminPopupR",
                    anim: -1,
                    title: !1,
                    closeBtn: !1,
                    offset: "r",
                    shade: .1,
                    shadeClose: !0,
                    skin: "layui-anim layui-anim-rl layui-layer-adminRight",
                    area: "300px"
                }, e))
            }, theme: function (e) {
                var t = (n.theme, layui.data(n.tableName)), s = "LAY_layadmin_theme", l = document.createElement("style"),
                    r = i([".layui-side-menu,", ".layadmin-pagetabs .layui-tab-title li:after,", ".layadmin-pagetabs .layui-tab-title li.layui-this:after,", ".layui-layer-admin .layui-layer-title,", ".layadmin-side-shrink .layui-side-menu .layui-nav>.layui-nav-item>.layui-nav-child", "{background-color:{{d.color.main}} !important;}", ".layui-nav-tree .layui-this,", ".layui-nav-tree .layui-this>a,", ".layui-nav-tree .layui-nav-child dd.layui-this,", ".layui-nav-tree .layui-nav-child dd.layui-this a", "{background-color:{{d.color.selected}} !important;}", ".layui-layout-admin .layui-logo{background-color:{{d.color.logo || d.color.main}} !important;}}"].join("")).render(e = a.extend({}, t.theme, e)),
                    u = document.getElementById(s);
                "styleSheet" in l ? (l.setAttribute("type", "text/css"), l.styleSheet.cssText = r) : l.innerHTML = r, l.id = s, u && o[0].removeChild(u), o[0].appendChild(l), o.attr("layadmin-themealias", e.color.alias), t.theme = t.theme || {}, layui.each(e, function (e, a) {
                    t.theme[e] = a
                }), layui.data(n.tableName, {key: "theme", value: t.theme})
            }, tabsPage: {}, tabsBody: function (e) {
                return a(y).find("." + h).eq(e || 0)
            }, tabsBodyChange: function (e) {
                x.tabsBody(e).addClass(d).siblings().removeClass(d), C.rollPage("auto", e)
            }, resize: function (e) {
                var a = layui.router(), i = a.path.join("-");
                r.off("resize", x.resizeFn[i]), e(), x.resizeFn[i] = e, r.on("resize", x.resizeFn[i])
            }, resizeFn: {}, runResize: function () {
                var e = layui.router(), a = e.path.join("-");
                x.resizeFn[a] && x.resizeFn[a]()
            }, delResize: function () {
                var e = layui.router(), a = e.path.join("-");
                r.off("resize", x.resizeFn[a]), delete x.resizeFn[a]
            }, correctRouter: function (e) {
                return /^\//.test(e) || (e = "/" + e), e.replace(/^(\/+)/, "/").replace(new RegExp("/" + n.entry + "$"), "/")
            }, closeThisTabs: function () {
                x.tabsPage.index && a(z).eq(x.tabsPage.index).find(".layui-tab-close").trigger("click")
            }
        }, C = x.events = {
            flexible: function (e) {
                var a = e.find("#" + m), i = a.hasClass(v);
                x.sideFlexible(i ? "spread" : null)
            }, refresh: function () {
                layui.index.render()
            }, message: function (e) {
                e.find(".layui-badge-dot").remove()
            }, theme: function () {
                x.popupRight({
                    id: "LAY_adminPopupTheme", success: function () {
                        s(this.id).render("system/theme")
                    }
                })
            }, note: function (e) {
                var a = x.screen() < 2, i = layui.data(n.tableName).note;
                C.note.index = x.popup({
                    title: "便签",
                    shade: 0,
                    offset: ["41px", a ? null : e.offset().left - 250 + "px"],
                    anim: -1,
                    id: "LAY_adminNote",
                    skin: "layadmin-note layui-anim layui-anim-upbit",
                    content: '<textarea placeholder="内容"></textarea>',
                    resize: !1,
                    success: function (e, a) {
                        var t = e.find("textarea"),
                            s = void 0 === i ? "便签中的内容会存储在本地，这样即便你关掉了浏览器，在下次打开时，依然会读取到上一次的记录。是个非常小巧实用的本地备忘录" : i;
                        t.val(s).focus().on("keyup", function () {
                            layui.data(n.tableName, {key: "note", value: this.value})
                        })
                    }
                })
            }, about: function () {
                x.popupRight({
                    id: "LAY_adminPopupAbout", success: function () {
                        s(this.id).render("system/about")
                    }
                })
            }, more: function () {
                x.popupRight({
                    id: "LAY_adminPopupMore", success: function () {
                        s(this.id).render("system/more")
                    }
                })
            }, back: function () {
                history.back()
            }, setTheme: function (e) {
                var a = n.theme, i = e.data("index");
                e.siblings(".layui-this").data("index");
                e.hasClass(c) || (e.addClass(c).siblings(".layui-this").removeClass(c), a.color[i] && (a.color[i].index = i, x.theme({color: a.color[i]})))
            }, rollPage: function (e, i) {
                var t = a("#LAY_app_tabsheader"), n = t.children("li"), s = (t.prop("scrollWidth"), t.outerWidth()),
                    l = parseFloat(t.css("left"));
                if ("left" === e) {
                    if (!l && l <= 0) return;
                    var r = -l - s;
                    n.each(function (e, i) {
                        var n = a(i), s = n.position().left;
                        if (s >= r) return t.css("left", -s), !1
                    })
                } else "auto" === e ? !function () {
                    var e, r = n.eq(i);
                    if (r[0]) {
                        if (e = r.position().left, e < -l) return t.css("left", -e);
                        if (e + r.outerWidth() >= s - l) {
                            var o = e + r.outerWidth() - (s - l);
                            n.each(function (e, i) {
                                var n = a(i), s = n.position().left;
                                if (s + l > 0 && s - l > o) return t.css("left", -s), !1
                            })
                        }
                    }
                }() : n.each(function (e, i) {
                    var n = a(i), r = n.position().left;
                    if (r + n.outerWidth() >= s - l) return t.css("left", -r), !1
                })
            }, leftPage: function () {
                C.rollPage("left")
            }, rightPage: function () {
                C.rollPage()
            }, closeThisTabs: function () {
                x.closeThisTabs()
            }, closeOtherTabs: function (e) {
                var i = "LAY-system-pagetabs-remove";
                "all" === e ? (a(z + ":gt(0)").remove(), a(y).find("." + h + ":gt(0)").remove()) : (a(z).each(function (e, t) {
                    e && e != x.tabsPage.index && (a(t).addClass(i), x.tabsBody(e).addClass(i))
                }), a("." + i).remove())
            }, closeAllTabs: function () {
                C.closeOtherTabs("all"), location.hash = ""
            }, shade: function () {
                x.sideFlexible()
            }
        };
    !function () {
        var e = layui.data(n.tableName);
        e.theme && x.theme(e.theme), o.addClass("layui-layout-body"), x.screen() < 1 && delete n.pageTabs, n.pageTabs || u.addClass("layadmin-tabspage-none"), l.ie && l.ie < 10 && s.error("IE" + l.ie + "下访问可能不佳，推荐使用：Chrome / Firefox / Edge 等高级浏览器", {
            offset: "auto",
            id: "LAY_errorIE"
        })
    }(), x.on("hash(side)", function (e) {
        var i = e.path, t = function (e) {
            return {list: e.children(".layui-nav-child"), name: e.data("name"), jump: e.data("jump")}
        }, n = a("#" + g), s = "layui-nav-itemed", l = function (e) {
            var n = x.correctRouter(i.join("/"));
            e.each(function (e, l) {
                var r = a(l), o = t(r), u = o.list.children("dd"),
                    d = i[0] == o.name || 0 === e && !i[0] || o.jump && n == x.correctRouter(o.jump);
                if (u.each(function (e, l) {
                        var r = a(l), u = t(r), d = u.list.children("dd"),
                            y = i[0] == o.name && i[1] == u.name || u.jump && n == x.correctRouter(u.jump);
                        if (d.each(function (e, l) {
                                var r = a(l), d = t(r),
                                    y = i[0] == o.name && i[1] == u.name && i[2] == d.name || d.jump && n == x.correctRouter(d.jump);
                                if (y) {
                                    var m = d.list[0] ? s : c;
                                    return r.addClass(m).siblings().removeClass(m), !1
                                }
                            }), y) {
                            var m = u.list[0] ? s : c;
                            return r.addClass(m).siblings().removeClass(m), !1
                        }
                    }), d) {
                    var y = o.list[0] ? s : c;
                    return r.addClass(y).siblings().removeClass(y), !1
                }
            })
        };
        n.find("." + c).removeClass(c), x.screen() < 2 && x.sideFlexible(), l(n.children("li"))
    }), t.on("nav(layadmin-system-side-menu)", function (e) {
        e.siblings(".layui-nav-child")[0] && u.hasClass(b) && (x.sideFlexible("spread"), layer.close(e.data("index")))
    }), t.on("nav(layadmin-pagetabs-nav)", function (e) {
        var a = e.parent();
        a.removeClass(c), a.parent().removeClass(d)
    });
    var k = function (e) {
        var a = e.attr("lay-id"), i = e.index();
        x.tabsBodyChange(i), location.hash = a === n.entry ? "/" : a
    }, z = "#LAY_app_tabsheader>li";
    o.on("click", z, function () {
        var e = a(this), i = e.index();
        return x.tabsPage.type = "tab", x.tabsPage.index = i, "iframe" === e.attr("lay-attr") ? x.tabsBodyChange(i) : (k(e), void x.runResize())
    }), t.on("tabDelete(layadmin-layout-tabs)", function (e) {
        var i = a(z + ".layui-this");
        e.index && x.tabsBody(e.index).remove(), k(i), x.delResize()
    }), o.on("click", "*[lay-href]", function () {
        var e = a(this), i = e.attr("lay-href");
        layui.router();
        x.tabsPage.elem = e, location.hash = x.correctRouter(i)
    }), o.on("click", "*[layadmin-event]", function () {
        var e = a(this), i = e.attr("layadmin-event");
        C[i] && C[i].call(this, e)
    }), o.on("mouseenter", "*[lay-tips]", function () {
        var e = a(this);
        if (!e.parent().hasClass("layui-nav-item") || u.hasClass(b)) {
            var i = e.attr("lay-tips"), t = e.attr("lay-offset"), n = e.attr("lay-direction"), s = layer.tips(i, this, {
                tips: n || 1, time: -1, success: function (e, a) {
                    t && e.css("margin-left", t + "px")
                }
            });
            e.data("index", s)
        }
    }).on("mouseleave", "*[lay-tips]", function () {
        layer.close(a(this).data("index"))
    });
    var A = layui.data.resizeSystem = function () {
        layer.closeAll("tips"), A.lock || setTimeout(function () {
            x.sideFlexible(x.screen() < 2 ? "" : "spread"), delete A.lock
        }, 100), A.lock = !0
    };
    r.on("resize", layui.data.resizeSystem), e("admin", x)
});