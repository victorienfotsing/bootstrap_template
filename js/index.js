$(document).ready(function() {
    $header = $('#header');
    console.log($(window));
    $(window).scroll(function() {

        if(window.pageYOffset > $header.height() + 70) {
            $header.addClass("position-fixed fadeInDown");
        } else {
            $header.removeClass("position-fixed fadeInDown");
            $header.addClass("position-relative");
        }
    });

    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
});