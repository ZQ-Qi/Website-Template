$(function() {
    var t, o = -1,
    e = 0;
    $("#showtoast").click(function() {
        var a, n, s = $("#toastTypeGroup input:radio:checked").val(),
        i = $("#message1").val(),
        r = $("#title").val() || "",
        l = $("#showDuration"),
        c = $("#hideDuration"),
        p = $("#timeOut"),
        d = $("#extendedTimeOut"),
        h = $("#showEasing"),
        u = $("#hideEasing"),
        g = $("#showMethod"),
        v = $("#hideMethod"),
        k = e++,
        f = $("#addClear").prop("checked");
        toastr.options = {
            closeButton: $("#closeButton").prop("checked"),
            debug: $("#debugInfo").prop("checked"),
            newestOnTop: $("#newestOnTop").prop("checked"),
            progressBar: $("#progressBar").prop("checked"),
            positionClass: $("#positionGroup input:radio:checked").val() || "toast-top-right",
            preventDuplicates: $("#preventDuplicates").prop("checked"),
            onclick: null
        },
        $("#addBehaviorOnToastClick").prop("checked") && (toastr.options.onclick = function() {
            alert("你可以在祝酒辞结束后表演一些定制的动作。")
        }),
        l.val().length && (toastr.options.showDuration = l.val()),
        c.val().length && (toastr.options.hideDuration = c.val()),
        p.val().length && (toastr.options.timeOut = f ? 0 : p.val()),
        d.val().length && (toastr.options.extendedTimeOut = f ? 0 : d.val()),
        h.val().length && (toastr.options.showEasing = h.val()),
        u.val().length && (toastr.options.hideEasing = u.val()),
        g.val().length && (toastr.options.showMethod = g.val()),
        v.val().length && (toastr.options.hideMethod = v.val()),
        f && (a = (a = i) || "清除本身吗？", i = a += '<br /><br /><button type="button" class="btn btn-default clear">是的</button>', toastr.options.tapToDismiss = !1),
        i || (++o === (n = ["我是日本人。钓鱼岛是中国的！", "你是六指男人吗？", "不可思议的!", "我不认为这意味着你认为它意味着什么。", "在城堡里玩得开心！"]).length && (o = 0), i = n[o]),
        $("#toastrOptions").text('Command: toastr["' + s + '"]("' + i + (r ? '", "' + r: "") + '")\n\ntoastr.options = ' + JSON.stringify(toastr.options, null, 2));
        var m = toastr[s](i, r);
        t = m,
        void 0 !== m && (m.find("#okBtn").length && m.delegate("#okBtn", "click",
        function() {
            alert("you clicked me. i was toast #" + k + ". goodbye!"),
            m.remove()
        }), m.find("#surpriseBtn").length && m.delegate("#surpriseBtn", "click",
        function() {
            alert("Surprise! you clicked me. i was toast #" + k + ". You could perform an action here.")
        }), m.find(".clear").length && m.delegate(".clear", "click",
        function() {
            toastr.clear(m, {
                force: !0
            })
        }))
    }),
    $("#clearlasttoast").click(function() {
        toastr.clear(t)
    }),
    $("#cleartoasts").click(function() {
        toastr.clear()
    })
});