$(document).ready(function() { var e = !0,
            i = null;
        $(this).on("mousewheel DOMMouseScroll", function(s) { if (!$(".outer-nav").hasClass("is-vis")) { s.preventDefault(); var t = s.originalEvent.wheelDelta ? -s.originalEvent.wheelDelta : 20 * s.originalEvent.detail;
                t > 50 && e ? (e = !1, clearTimeout(i), i = setTimeout(function() { e = !0 }, 800), r(1)) : t < -50 && e && (e = !1, clearTimeout(i), i = setTimeout(function() { e = !0 }, 800), r(-1)) } }), $(".side-nav li, .outer-nav li").click(function() { if (!$(this).hasClass("is-active")) { var e = $(this),
                    i = e.parent().find(".is-active"),
                    s = e.parent().children().index(i),
                    t = e.parent().children().index(e),
                    r = $(this).parent().children().length - 1;
                l(t), a(s, t, r) } }), $(".cta").click(function() { var e = $(".side-nav").find(".is-active"),
                i = $(".side-nav").children().index(e),
                s = $(".side-nav").children().length - 1,
                t = s;
            l(s), a(i, t, s) }); var s = document.getElementById("viewport"),
            t = new Hammer(s);

        function r(e) { var i = $(".side-nav").find(".is-active"),
                s = $(".side-nav").children().index(i),
                t = $(".side-nav").children().length - 1,
                r = 0; "swipeup" === e.type || 40 === e.keyCode || e > 0 ? s !== t ? (l(r = s + 1), a(s, r, t)) : (l(r), a(s, r, t)) : ("swipedown" === e.type || 38 === e.keyCode || e < 0) && (0 !== s ? (l(r = s - 1), a(s, r, t)) : (l(r = t), a(s, r, t))) }

        function l(e) { $(".side-nav, .outer-nav").children().removeClass("is-active"), $(".side-nav").children().eq(e).addClass("is-active"), $(".outer-nav").children().eq(e).addClass("is-active") }

        function a(e, i, s) {
            $(".main-content").children().removeClass("section--is-active"), $(".main-content").children().eq(i).addClass("section--is-active"), $(".main-content .section").children().removeClass("section--next section--prev"), e === s && 0 === i || 0 === e && i === s ? $(".main-content .section").children().removeClass("section--next section--prev") : e < i ? $(".main-content").children().eq(e).children().addClass("section--next") : $(".main-content").children().eq(e).children().addClass("section--prev"), 0 !== i && i !== s ? $(".header--cta").addClass("is-active") : $(".header--cta").removeClass("is-active")
        }
        t.get("swipe").set({
        direction: Hammer.DIRECTION_VERTICAL
        }), t.on("swipeup swipedown", function (e) {
        r(e)
        }), $(document).keyup(function (e) {
        $(".outer-nav").hasClass("is-vis") || (e.preventDefault(), r(e))
        }), $(".header--nav-toggle").click(function () {
        $(".perspective").addClass("perspective--modalview"), setTimeout(function () {
            $(".perspective").addClass("effect-rotate-left--animate")
        }, 25), $(".outer-nav, .outer-nav li, .outer-nav--return").addClass("is-vis")
        }), $(".outer-nav--return, .outer-nav li").click(function () {
        $(".perspective").removeClass("effect-rotate-left--animate"), setTimeout(function () {
            $(".perspective").removeClass("perspective--modalview")
        }, 400), $(".outer-nav, .outer-nav li, .outer-nav--return").removeClass("is-vis")
        }), $(".slider--prev, .slider--next").click(function () {
        var e = $(this),
            i = $(".slider").find(".slider--item-left"),
            s = $(".slider").children().index(i),
            t = $(".slider").find(".slider--item-center"),
            r = $(".slider").children().index(t),
            l = $(".slider").find(".slider--item-right"),
            a = $(".slider").children().index(l),
            d = $(".slider").children().length,
            n = $(".slider--item-left"),
            o = $(".slider--item-center"),
            c = $(".slider--item-right"),
            m = $(".slider--item");
        $(".slider").animate({
            opacity: 0
        }, 400), setTimeout(function () {
            e.hasClass("slider--next") ? s < d - 1 && r < d - 1 && a < d - 1 ? (n.removeClass("slider--item-left").next().addClass("slider--item-left"), o.removeClass("slider--item-center").next().addClass("slider--item-center"), c.removeClass("slider--item-right").next().addClass("slider--item-right")) : s === d - 1 ? (m.removeClass("slider--item-left").first().addClass("slider--item-left"), o.removeClass("slider--item-center").next().addClass("slider--item-center"), c.removeClass("slider--item-right").next().addClass("slider--item-right")) : r === d - 1 ? (n.removeClass("slider--item-left").next().addClass("slider--item-left"), m.removeClass("slider--item-center").first().addClass("slider--item-center"), c.removeClass("slider--item-right").next().addClass("slider--item-right")) : (n.removeClass("slider--item-left").next().addClass("slider--item-left"), o.removeClass("slider--item-center").next().addClass("slider--item-center"), m.removeClass("slider--item-right").first().addClass("slider--item-right")) : 0 !== s && 0 !== r && 0 !== a ? (n.removeClass("slider--item-left").prev().addClass("slider--item-left"), o.removeClass("slider--item-center").prev().addClass("slider--item-center"), c.removeClass("slider--item-right").prev().addClass("slider--item-right")) : 0 === s ? (m.removeClass("slider--item-left").last().addClass("slider--item-left"), o.removeClass("slider--item-center").prev().addClass("slider--item-center"), c.removeClass("slider--item-right").prev().addClass("slider--item-right")) : 0 === r ? (n.removeClass("slider--item-left").prev().addClass("slider--item-left"), m.removeClass("slider--item-center").last().addClass("slider--item-center"), c.removeClass("slider--item-right").prev().addClass("slider--item-right")) : (n.removeClass("slider--item-left").prev().addClass("slider--item-left"), o.removeClass("slider--item-center").prev().addClass("slider--item-center"), m.removeClass("slider--item-right").last().addClass("slider--item-right"))
        }, 400), $(".slider").animate({
            opacity: 1
        }, 400)
        }), $(".work-request--information input").focusout(function () {
        "" === $(this).val() ? $(this).removeClass("has-value") : $(this).addClass("has-value"), window.scrollTo(0, 0)
        })
    });
