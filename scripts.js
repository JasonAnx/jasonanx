
var windowWdth;

$(document).ready(function () {
    // var options = [
    //   {
    //     selector: '#projects', offset: 400, callback: function (el) {
    //       Materialize.toast("Clic/tap the images to zoom them", 2500);
    //     }
    //   },
    // ];
    // Materialize.scrollFire(options);

    html2canvas(document.querySelector("#app")).then(canvas => {
        var bgimgS = document.getElementById('origimg');

        ctx = canvas.getContext("2d");

        bgimgS.src = canvas.toDataURL("image/jpeg", 0.1)
        var cvs = document.getElementById('canvas');
        blurNAV(bgimgS, cvs)
    });

    windowWdth = window.innerWidth

    $(".anxmenu").sideNav();
    $(".button-collapse").sideNav();

    var ctnt = document.getElementById('content');
    var app = document.getElementById('app');
    var root = document.getElementById('root');
    window.requestAnimationFrame(function () {

        $(".navbar-fixed").fadeIn(3000)
        if (root.clientWidth > 992) {
            // console.log(root.innerWidth)
            // $('.parallax').parallax();
        }

        // ctntMgn = app.clientWidth - ctnt.clientWidth
        // $("#content>header>.parallax-container").css('margin-left',-ctntMgn/2+'px');
        // $("#content>header>.parallax-container").css('margin-right',-ctntMgn/2+'px');
        // 

    })
    $('#canvasHolder').height($('.navbar-fixed').height())
})

$(window).on('scroll', function () {
    $('#canvasHolder').scrollTop($(this).scrollTop());
});

window.onresize = function (event) {
    // recalculate blur nav
    if (window.innerWidth !== windowWdth &&
        (window.innerWidth - windowWdth > 30 || windowWdth - window.innerWidth > 30)
    ) {
        windowWdth = window.innerWidth
        $('.navbar-fixed nav').removeClass('translucid');
    }
    $('#canvasHolder').height($('.navbar-fixed').height())
};

function blurNAV(img, canvas) {
    // http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html

    window.requestAnimationFrame(function () {
        stackBlurImage(img, canvas, 75);
        // boxBlurImage(img, cvs, 100, 3)
        // $("#canvasHolder").fadeIn(3000)
        $('.navbar-fixed nav').addClass('translucid');
    })
}