$(function(){
    var isMobile;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true;

    // Mobile height fix
    $('.height-fix').each(function() {
      var h = $(this).height();
      $(this).height(h);
    });
  }

  // RESIZE RESETS
  $(window).resize(function() {
    posFilterBar($('.filter').first());
  });

  // NAV POSITION
  var navPos = $('nav').position().top;
  var lastPos = 0;
  var lockTimer;

  $(window).on('scroll', function() {
    var pos = $(window).scrollTop();
    var pos2 = pos + 50;
    var scrollBottom = pos + $(window).height();

    if (!isMobile) {
      lastPos = pos;
    }
    
        // Link Highlighting
        if (pos2 > $('#home').offset().top) {
          highlightLink('home-nav');
        }
        if (pos2 > $('#about').offset().top) {
          highlightLink('about-nav');
        }
        if (pos2 > $('#projects').offset().top) {
          highlightLink('projects-nav');
        }
        if (pos2 > $('#blogs').offset().top) {
          highlightLink('blogs-nav');
        }
        if (pos2 > $('#skills').offset().top) {
          highlightLink('skills-nav');
        }
        if (
          pos2 > $('#contact').offset().top) {
          highlightLink('contact-nav');
        }
    });
    function highlightLink(anchor) {
        console.log(anchor);
        $('.active').removeClass('active');
        $('nav')
          .find('[dest="' + anchor + '"]')
          .addClass('active');
      }

      $('.links').click(function() {
        var anchor = $(this).attr('dest');
        $('.link-wrap').removeClass('visible');
        if(anchor){
            $('.active').removeClass('active');
            $('nav')
            .find('[dest="' + anchor + '"]')
            .addClass('active');
        }
      });


    $('.mdi-menu').click(function() {
        $('.link-wrap').toggleClass('visible');
      });

    $('.links').click(function() {
        $('.link-wrap').removeClass('visible');
    });
});
