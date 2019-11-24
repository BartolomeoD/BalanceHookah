import FullPage from 'fullpage.js';
var Inputmask = require('inputmask');
var $ = require("jquery");
import MicroModal from 'micromodal';

$(document).ready(function (e) {
    $('#slide1 .anchor').click(function (e) {
        $.fn.fullpage.moveTo(3);
    });
    $(".to-slide").click(function (e) {
        e.preventDefault();
        var slide = $(this).attr("data-slide");
        $.fn.fullpage.moveTo(slide);
    })
    $('#full-page-wrapper').fullpage({
        menu: '#scroll-nav',
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage', '8thPage', '9thPage'],
        afterLoad: function (anchorLink, index) {
            var name = $('#' + anchorLink + '-menu-title').attr('data-rus-name');
            var layoutColor = $('#' + anchorLink + '-menu-title').attr('data-layout-color');
            $('.top-layout').attr('class', 'top-layout');
            $('.left-layout').attr('class', 'left-layout');
            $('.top-layout').addClass(layoutColor);
            $('.left-layout').addClass(layoutColor);
        }
    });

    $("#slide1 .button").click(function (e) {
        MicroModal.show('modal-form');
    })

    $("form").on("submit", function (e) {
        e.preventDefault();
        console.log("sended");
        MicroModal.close('modal-form');
        MicroModal.show('modal-success');
    })

    var selector = document.getElementsByClassName("input-text");

    var im = new Inputmask("+7 (999) 999-99-99");
    im.mask(selector);


    $('#slide1 #next').click(function () {
        $.fn.fullpage.moveSectionDown();
    })


    $(".fp-tableCell").css('height', '100%');
    $('.fp-next').html("<i class='icon-right'></i>");

    $(".call-me").click(function (e) {
        e.preventDefault();
        if ($('.menu .call-me').hasClass("active")) {
            closeWindow();
            $('.menu .call-me ').removeClass("active");
            $('.menu .call-me i').animate(
                {
                    opacity: 0
                }, 500, function (e) {
                    $('.menu .call-me i').removeClass("icon-cancel");
                    $('.menu .call-me i').addClass("icon-phone");
                    $('.menu .call-me i').animate(
                        {
                            opacity: 1
                        }, 500
                    );
                }
            )
        } else {

            $('.window-bg').css("display", "block");
            setTimeout(function (e) {
                $('.window-bg').addClass("active");
            }, 1);
            $(".window-bg .window").slideDown(1000);
            $('.menu .call-me ').addClass("active");
            $('.menu .call-me i').animate(
                {
                    opacity: 0
                }, 500, function (e) {
                    $('.menu .call-me i').removeClass("icon-phone");
                    $('.menu .call-me i').addClass("icon-cancel");
                    $('.menu .call-me i').animate(
                        {
                            opacity: 1
                        }, 500
                    );
                }
            )
        }
    });
    $(".window-bg").click(function (e) {
        console.log($('.window-bg .container').get()[0]);
        if (e.target != this && $('.window-bg .container').get()[0] != e.target) return;
        closeWindow();
    });
});

function closeWindow() {
    $(".window-bg .window").slideUp(1000);
    $('.window-bg').removeClass("active");
    setTimeout(function (e) {
        $('.window-bg').css("display", "none");
    }, 1000);
}
