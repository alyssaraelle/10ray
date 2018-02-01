$(document).ready(() => {

  // Check for Touch Device

  document.addEventListener('touchstart', function addTouchClass(e) {
  document.documentElement.classList.add('can-touch')
  document.removeEventListener('touchstart', addTouchClass, false)
  }, false)


  // Check Screen Size


  checkScreenSize();

  $(window).resize(function() {
    checkScreenSize();
  });

  function checkScreenSize() {
    var screenWidth = $(window).width();
    if(screenWidth > 500) {

      $('.mobile-nav').hide();
      $('.navigation').show();

      // Homepage Hover Interactions

      $('.halfone').on('mouseenter', () => {
        $('.one').css('background-image', 'url(pictures/tablet_charts.png)');
      });

      $('.halfone').on('mouseleave', () => {
        $('.one').css('background-image', 'url(pictures/tablet_charts_blur.png)');
      })

      $('.halftwo').on('mouseenter', () => {
        $('.two').css('background-image', 'url(pictures/lips.gif)');
      });

      $('.halftwo').on('mouseleave', () => {
        $('.two').css('background-image', 'url(pictures/lips-2.png)');
      })

      // Navigation Scroll

      $(window).scroll(
        {
          previousTop: 0
        },
        () => {
          let currentTop = $(window).scrollTop();
          let screenWidth = $(window).width();
          let headerHeight = 33.53;
          if(($(window).scrollTop() > headerHeight) && (screenWidth > 500) ) {
              $('.navigation').slideUp('slow');
            }
          else if (($(window).scrollTop() < headerHeight) && (screenWidth >500)) {
              $('.navigation').slideDown('slow');
            }
          else {
            $('.navigation').hide();
          }
        });

      } else {

        $('.mobile-nav').show();

        $(window).scroll(
          {
            previousTop: 0
          },
          () => {
            let currentTop = $(window).scrollTop();
            let screenWidth = $(window).width();
            let headerHeight = 10.53;
            if(($(window).scrollTop() > headerHeight) && (screenWidth <= 500) ) {
                $('.mobile-nav').slideUp('slow');
              }
            else if (($(window).scrollTop() < headerHeight) && (screenWidth <= 500)) {
                $('.mobile-nav').slideDown('slow');
              }
            else {
              $('.mobile-nav').hide();
            }
          });

      }
    };

  // Navigation Dropdown Desktop

  $('#menu-about').on('mouseenter', () => {
    $('#menu-about').css('border-bottom', '3px solid rgb(244,221,210)');
    $('.first').slideDown();
  });

  $('#menu-services').on('mouseenter', () => {
    $('#menu-services').css('border-bottom', '3px solid rgb(244,221,210)');
    $('.second').slideDown();
  })

  $('.dropdown').on('mouseleave', () => {
    $('#menu-about').css('border-bottom', 'none');
    $('.first').slideUp('fast');
    $('#menu-services').css('border-bottom', 'none');
    $('.second').slideUp('fast');
  })

  // Navigation Dropdown mobile

  $('.menu-icon').on('click touch', () => {
    $('.mobile-dropdown').slideToggle();
    $('.second-space').toggle();
  });

  $('#mobile-about').on('click touch', () => {
    $('.about-drop').slideToggle('fast');
  });

  $('#mobile-services').on('click touch', () => {
    $('.services-drop').slideToggle('fast');
  });

  $('#mobile-contact').on('click touch', () => {
    $('.contact-drop').slideToggle('fast');
  });


  // Homepage Click Interactions


  $('.halfone').on('click touch'), () => {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Button',
      eventAction: 'Click',
      eventLabel: 'Homepage Analytics Benefits'
    });
  }

  $('.halftwo').on('click touch'), () => {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Button',
      eventAction: 'Click',
      eventLabel: 'Homepage Social Media Benefits'
    });
  }

  // Is 10Ray Right - Show Questions

  $('#s-four-analytics').on('click touch', () => {
    $('#s-four-social-media').css('text-decoration', 'none');
    $('#s-four-analytics').css('text-decoration', 'underline');
    $('.s-six').slideUp('slow');
    $('.s-five').slideToggle();
    ga('send', {
      hitType: 'event',
      eventCategory: 'Show',
      eventAction: 'Click',
      eventLabel: 'Chose Analytics'
    });
  });


  $('#s-four-social-media').on('click touch', () => {
    $('#s-four-analytics').css('text-decoration', 'none');
    $('#s-four-social-media').css('text-decoration', 'underline');
    $('.s-five').slideUp('slow');
    $('.s-six').slideToggle();
    ga('send', {
      hitType: 'event',
      eventCategory: 'Show',
      eventAction: 'Click',
      eventLabel: 'Chose Social Media'
    });
  });



  // Social Media Show Answers

  $('.question').on('click touch', (event) => {
    $(event.currentTarget).siblings().toggle();
    ga('send', {
      hitType: 'event',
      eventCategory: 'Show',
      eventAction: 'Click',
      eventLabel: event.currentTarget.id
    });
  })


  // Services Show & Switch Services

  $('#analytics-link').on('click touch', () => {
    $('.shortcut li').css('text-decoration', 'none');
    $('#analytics-link').css('text-decoration', 'underline');
    $('.service').hide();
    $('#analytics-service').show();
    ga('send', {
      hitType: 'event',
      eventCategory: 'Internal Link',
      eventAction: 'Click',
      eventLabel: 'Services - Analytics'
    });
  })

  $('#strategy-link').on('click touch', () => {
    $('.shortcut li').css('text-decoration', 'none');
    $('#strategy-link').css('text-decoration', 'underline');
    $('.service').hide();
    $('#strategy-service').show();
    ga('send', {
      hitType: 'event',
      eventCategory: 'Internal Link',
      eventAction: 'Click',
      eventLabel: 'Services - Analytics Strategy'
    });
  })

  $('#social-link').on('click touch', () => {
    $('.shortcut li').css('text-decoration', 'none');
    $('#social-link').css('text-decoration', 'underline');
    $('.service').hide();
    $('#social-service').show();
    ga('send', {
      hitType: 'event',
      eventCategory: 'Internal Link',
      eventAction: 'Click',
      eventLabel: 'Services - Social Media'
    });
  })

  $('#posts-link').on('click touch', () => {
    $('.shortcut li').css('text-decoration', 'none');
    $('#posts-link').css('text-decoration', 'underline');
    $('.service').hide();
    $('#takeover-service').show();
    ga('send', {
      hitType: 'event',
      eventCategory: 'Internal Link',
      eventAction: 'Click',
      eventLabel: 'Services - Social Media Takeover'
    });
  })

  // Additional GA Tracks

  $('.future-button').on('click touch', () => {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Button',
      eventAction: 'Click',
      eventLabel: 'Article - The Future'
    });
  })

  $('.analytics').on('click touch', () => {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Button',
      eventAction: 'Click',
      eventLabel: 'About - Analytics'
    });
  })

  $('.social-media').on('click touch', () => {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Button',
      eventAction: 'Click',
      eventLabel: 'About - Social Media'
    });
  })

  $('.b-a').on('click touch', () => {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Button',
      eventAction: 'Click',
      eventLabel: 'Benefits Analytics - Services'
    });
  })

  $('.b-sm').on('click touch', () => {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Button',
      eventAction: 'Click',
      eventLabel: 'Benefits Social Media - Services'
    });
  })

  $('.helps-button').on('click touch', () => {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Button',
      eventAction: 'Click',
      eventLabel: 'Helps - About'
    });
  })

  $('.book').on('click touch', () => {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Button',
      eventAction: 'Click',
      eventLabel: 'Book Initial Consult'
    });
  })

  $('.submit').on('click touch', () => {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Form',
      eventAction: 'Click',
      eventLabel: 'Submit'
    });
  })

});
