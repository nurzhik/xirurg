$(document).ready(function() {
    function t(t) {
        $(t.sliderObject).parent().find(".iosSliderButtons .button").removeClass("selected"), $(t.sliderObject).parent().find(".iosSliderButtons .button:eq(" + (t.currentSlideNumber - 1) + ")").addClass("selected")
    }

    function e(t) {
        return t.slideChanged ? ($(t.sliderObject).find(".text1, .text2").attr("style", ""), $(t.currentSlideObject).children(".text1").animate({
            right: "50%",
            opacity: "1"
        }, 400, "easeOutQuint"), void $(t.currentSlideObject).children(".text2").delay(200).animate({
            right: "50%",
            opacity: "1",
        }, 400, "easeOutQuint")) : !1
    }

    function n(t) {
        $(t.sliderObject).find(".text1, .text2").attr("style", ""), $(t.currentSlideObject).children(".text1").animate({
            right: "50%",
            opacity: "1",
        }, 400, "easeOutQuint"), $(t.currentSlideObject).children(".text2").delay(200).animate({
            right: "50%",
            opacity: "1"
        }, 400, "easeOutQuint"), $(t.sliderObject).parent().find(".iosSliderButtons .button").removeClass("selected"), $(t.sliderObject).parent().find(".iosSliderButtons .button:eq(" + (t.currentSlideNumber - 1) + ")").addClass("selected")
    }
    $(".iosSlider").iosSlider({
        autoSlide: !0,
        scrollbar: !0,
        snapToChildren: !0,
        desktopClickDrag: !0,
        scrollbarLocation: "top",
        scrollbarMargin: "10px 10px 0 10px",
        scrollbarBorderRadius: "0",
        responsiveSlideWidth: !0,
        navSlideSelector: $(".iosSliderButtons .button"),
        infiniteSlider: !0,
        startAtSlide: "1",
        onSlideChange: t,
        onSlideComplete: e,
        onSliderLoaded: n
    })
});