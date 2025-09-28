$(document).ready(function () {

  /**
   *  SWIPER
   */
  var teamSwiper = new Swiper(".teamSwiper", {
    navigation: {
      nextEl: ".team_next",
      prevEl: ".team_prev",
    },
    slidesPerView: 1,   
    spaceBetween: 16,  
    breakpoints: {
      1200: {
        slidesPerView: 3, 
      },
      992: {
        slidesPerView: 2,   
      },
      768: {
        slidesPerView: 1.8,   
      },
      380: {
        slidesPerView: 1.2,
      }
    }
  });

  var newsSwiper = new Swiper(".newsSwiper", {
    navigation: {
      nextEl: ".news_next",
      prevEl: ".news_prev",
    },
    slidesPerView: 1,   
    spaceBetween: 16,  
    breakpoints: {
      1200: {
        slidesPerView: 3, 
      },
      992: {
        slidesPerView: 2,   
      },
      768: {
        slidesPerView: 1.8,   
      },
      380: {
        slidesPerView: 1.2,
      }
    },
    loop: true
  });

  // Modal ochish
  $('.open_custom_modal').on('click', function (e) {
    e.preventDefault();
    var modal_id = $(this).data('bs-target');
    $(modal_id).fadeIn(200);
    $('body').css('overflow', 'hidden');
  });

  // Modal yopish
  $(document).on('click', '.custom_modal_close, .custom_modal_backdrop', function () {
    $(this).closest('.custom_modal').fadeOut(200);
    $('body').css('overflow', '');
  });

  /** -------------------------------
   *  HAMBURGER MENU
   * --------------------------------*/
  $(".hamburger_menu").on('click', function (e) {
    e.preventDefault();
    $(".header_menus").addClass("active");
    $('body').addClass('no_scroll');
  });

  $(".header_close").on('click', function (e) {
    e.preventDefault();
    $(".header_menus").removeClass("active");
    $('body').removeClass('no_scroll');
  });

$(".header_menus li a").on('click', function (e) {
  var href = $(this).attr('href') || '';

  if (href.startsWith('#') && href.length > 1) {
    e.preventDefault();

    $(".header_menus").removeClass("active");
    $('body').removeClass('no_scroll');

    var id = href.replace(/^#/, '');
    var isMobile = window.innerWidth <= 992;

    var $target = isMobile ? $('#' + id + '-mobile') : $('#' + id + '-desktop');
    if (!$target.length) $target = $('#' + id);            
    if (!$target.length) $target = $('[name="' + id + '"]');     

    if ($target.length) {
      var headerH = $('.header').outerHeight() || 0;
      var extra = parseInt($(this).data('offset'), 10);
      if (isNaN(extra)) extra = 0;

      var top = Math.max(0, $target.offset().top - headerH - extra);

      $('html, body').stop().animate({ scrollTop: top }, 500);
    }
  } else {
    $(".header_menus").removeClass("active");
    $('body').removeClass('no_scroll');
  }
});


  $(".menu_item a").on("click", function (e) {
    e.preventDefault();
    $(".menu_item a").removeClass('active');
    $(this).addClass('active');
    const target = $(this).attr("href").replace('#', '');
    const isMobile = window.innerWidth <= 992;
    let sectionId = isMobile ? `#${target}-mobile` : `#${target}-desktop`;
    let $targetEl = $(sectionId);
    if (!$targetEl.length) {
      sectionId = `#${target}`;
      $targetEl = $(sectionId);
    }
    if ($targetEl.length) {
      $("html, body").animate({
        scrollTop: $targetEl.offset().top
      }, 500);
    }
  });

  /* ================================
 *  STICKY HEADER
 * ================================ */
(function($){
  var $header = $('.header');
  if(!$header.length) return;

  // Shadow toggle
  function shadow(){
    if ((window.scrollY||0) > 0) $header.addClass('is-sticky');
    else $header.removeClass('is-sticky');
  }
  shadow();
  $(window).on('scroll', shadow);

  // Sticky qo'llanmasa yoki ota konteynerlar to'sqinlik qilsa -> fixed
  function supportsSticky(){
    var t = document.createElement('div');
    t.style.cssText = 'position:sticky;position:-webkit-sticky;top:0;';
    return /(sticky)/.test(getComputedStyle(t).position);
  }
  var needFixed = !supportsSticky();
  if (needFixed){
    $header.addClass('use-fixed');
    document.body.classList.add('has-fixed-header');
    function setPad(){ document.body.style.setProperty('--header-height', $header.outerHeight()+'px'); }
    setPad(); $(window).on('resize', setPad);
  }
})(jQuery);


});
