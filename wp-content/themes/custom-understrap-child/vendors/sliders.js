Sliders = new (function () {
  this.init = function () {
    Sliders.logoSlider();
    Sliders.postTypeSlider();
    Sliders.topBannerSlider();
    Sliders.timelineSlider();
  };

  /**
   * Timeline Slider
   */
  this.timelineSlider = function () {
    jQuery(".timeline-panel .inner-slider").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      prevArrow: '<a class="prev-arrow pointer black"></a>',
      nextArrow: '<a class="next-arrow pointer black"></a>',
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  };

  /**
   * Logo Slider
   */
  this.logoSlider = function () {
    jQuery(".logo-slider-slider").slick({
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      // prevArrow: '<a class="prev-arrow pointer"></a>',
      // nextArrow: '<a class="next-arrow pointer"></a>',
      responsive: [
        // {
        //   breakpoint: 1200,
        //   settings: {
        //     slidesToShow: 4,
        //     slidesToScroll: 1,
        //   },
        // },
        // {
        //   breakpoint: 1025,
        //   settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //   },
        // },
        // {
        //   breakpoint: 769,
        //   settings: {
        //     slidesToShow: 2,
        //     slidesToScroll: 1,
        //   },
        // },
        // {
        //   breakpoint: 501,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //   },
        // },
      ],
    });
  };

  /**
   * Top Banner Slider
   */
  this.topBannerSlider = function () {
    jQuery(".top-banner-slider").slick({
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,
      dots: true,
      arrows: true,
      prevArrow: '<a class="prev-arrow pointer"></a>',
      nextArrow: '<a class="next-arrow pointer"></a>',
    });
  };

  this.postTypeSlider = function () {
    jQuery(".post-type-slider").each(function () {
      var sliderIndex = jQuery(this).data("slider-index");
      jQuery(".slider-wrap-" + sliderIndex).slick({
        autoplay: false,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
        prevArrow: '<a class="pts-prev-arrow pointer"></a>',
        nextArrow: '<a class="pts-next-arrow pointer"></a>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    });
  };
})();

jQuery(function () {
  Sliders.init();
});
