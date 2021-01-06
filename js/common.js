$(document).ready(function() {
  new WOW().init();

  var wHeight = $(window).height(),
      wWidth = $(window).width();
  $(window).on('resize', function() {
        wHeight = $(window).height();
        wWidth = $(window).width();
  });
  $(document).on('scroll', function(e) {
    var scrollTop = $(window).scrollTop()
        wBottom = scrollTop + wHeight,
        elTop = $('.line-info').offset().top - 100,
        posEl = elTop - wBottom;
        pos = (posEl>=0?0:Math.abs(posEl)) * (wWidth / wHeight);

    $('.line-info__text--left').css('left', 'calc(100vw - 80px - ' + pos + 'px)');
    $('.line-info__text--right').css('right', 'calc(100vw - 80px - ' + pos + 'px)');

    if(scrollTop>=300) {
      $('.sidebar__to-top').addClass('sidebar__to-top--visible');
      $('.sidebar__menu-trigger').addClass('sidebar__menu-trigger--visible');
    }else{
      $('.sidebar__to-top').removeClass('sidebar__to-top--visible');
      $('.sidebar__menu-trigger').removeClass('sidebar__menu-trigger--visible');
    }
  });

  $('a.scroll-to').on('click', function(e) {
    e.preventDefault();
    if($('.navigation--over').length) {
      $('.sidebar__menu-trigger').trigger('click');
    }
    var to = $(this).attr('href'),
        top = 0;
    if($(to).length){
      top = $(to).offset().top - 100;
    }
    $("html, body").stop().animate({scrollTop:top}, 800);
  });

  var slider = tns({
    container: '.review',
    items:2,
    gutter:50,
    nav:false,
    controlsText: ['<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1" fill="none" stroke-linejoin="round" class="s-icon"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>', '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1" fill="none" stroke-linejoin="round" class="s-icon"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>'],
    responsive:{
      890: {
        gutter: 18,
        items: 2
      },
      0: {
        items:1
      },
    }
  });

  $(".btn--point").on("mouseover", function(e){
      var x = e.clientX,
          y = e.clientY,
          wOffset = $(window).scrollTop(),
          offst = $(this).offset(),
          point = $(this).find(".btn__point"),
          fY = y-(offst.top-wOffset);
      point.css({"left":x-offst.left,"top":y-(offst.top-wOffset)});
      $(this).find(".btn__point").addClass("btn__point--active");
  });

  $(".btn--point").on("mouseout", function(e){
      var x = e.clientX,
          y = e.clientY,
          wOffset = $(window).scrollTop(),
          offst = $(this).offset(),
          point = $(this).find(".btn__point"),
          fY = y-(offst.top-wOffset);
      point.css({"left":x-offst.left,"top":fY});
      $(this).find(".btn__point").removeClass("btn__point--active");
  });

  $('.sidebar__menu-trigger').on('click', function() {
    var nav = $('.navigation');
    if(nav.hasClass('navigation--over')){
      $(this).removeClass('sidebar__menu-trigger--active');
      $(this).html('<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="s-icon"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>');
      nav.removeClass('navigation--over');
    }else{
      $(this).addClass('sidebar__menu-trigger--active');
      $(this).html('<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="s-icon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');
      nav.addClass('navigation--over');
    }
  });
});
