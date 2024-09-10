$(document).ready(function(){
    $(".coconutfibreClick").click(function(){
        $(".coconutPeatData").addClass('d-none');
        $(".growbagData").addClass('d-none');
        $(".coconutPeatClick").removeClass('active');
        $(".growbagClick").removeClass('active');
        if($(".coconutfibreData").hasClass('d-none')){
            $(".coconutfibreData").removeClass('d-none');
            $(".coconutfibreClick").addClass('active');
        };
      });
    $(".coconutPeatClick").click(function(){
        $(".coconutfibreData").addClass('d-none');
        $(".growbagData").addClass('d-none');
        $(".coconutfibreClick").removeClass('active');
        $(".growbagClick").removeClass('active');
        if($(".coconutPeatData").hasClass('d-none')){
            $(".coconutPeatData").removeClass('d-none');
            $(".coconutPeatClick").addClass('active');
        };
      });
    $(".growbagClick").click(function(){
        $(".coconutfibreData").addClass('d-none');
        $(".coconutPeatData").addClass('d-none');
        $(".coconutfibreClick").removeClass('active');
        $(".coconutPeatClick").removeClass('active');
        if($(".growbagData").hasClass('d-none')){
            $(".growbagData").removeClass('d-none');
            $(".growbagClick").addClass('active');
        };        
      });

      var popup_btn = $('.popup-btn');
      popup_btn.magnificPopup({
      type : 'image',
      gallery : {
          enabled : true
      }
      });

      $('.gallery-menu  li').click(function(){
          $('.gallery-menu li').removeClass('active');
          $(this).addClass('active');
        //   alert($(this).attr('data-filter'))
          
          var selector = $(this).attr('data-filter');
          $('.gallery-item').isotope({
              filter:selector
          });
          return  false;
      });

          
    // Initiate the wowjs
    new WOW().init();


      // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

});

