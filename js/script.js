$(function () {
    // when the page refreshed again save mode
    var modes = localStorage.getItem("mode");
    if (modes === "dark") {
        darkmode();
    } else lightmode();
    // modes effects
    $(".dark-mode").click(function () {
        darkmode();
    })
    // remove all effects when return to light mode 
    $(".light-mode").click(function () {
        lightmode()
    })
    // dark mode function 
    function darkmode() {
        $(".layout-active-mode").addClass("translate-mode");
        $("html").css({
            'filter': 'invert(1) hue-rotate(180deg)',
            'transition': 'all 0s'
        })
        $("img").css({
            'filter': 'invert(1) hue-rotate(180deg)'
        })
        // save the current mode in local storge for refresh
        localStorage.setItem("mode", "dark");
    }
    // light mode function 
    function lightmode() {
        $(".layout-active-mode").removeClass("translate-mode");
        $("html").css({
            'filter': 'none',
            'transition': 'all 0.8s'
        })
        $("img").css({
            'filter': 'none'
        })
        // save the current mode in local storge for refresh
        localStorage.setItem("mode", "light");
    }
    // language's info block 
    $(".lang-icon").click(function () {
        $(".arrow").slideToggle(500)
        $(".lang-option").slideToggle(500)
    })
})
