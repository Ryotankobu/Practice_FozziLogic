/**
 * Mombo – Multipurpose Template + UI Kit
 * Copyright 2023 pxdraft
 * Theme core scripts
 * 
 * @author pxdraft
 * @version 1
 */

"use strict";
const d = document;
var e = {
    isVariableDefined: function (el) {
        return typeof !!el && (el) != 'undefined' && el != null;
    },
    select: function (selectors) {
        return document.querySelector(selectors);
    },
    selectAll: function(selectors) {
        return document.querySelectorAll(selectors);
    }
};
d.addEventListener("DOMContentLoaded", function(event) {

    // Plceholder
    var preloader = d.querySelector('.loading-preloader');
    if (preloader) {
        setTimeout(function() {
            preloader.classList.add('d-none');
        }, 1000);
    }

    // Headroom
    if (d.querySelector('.headroom')) {
        var headroom = new Headroom(document.querySelector(".header-main"), {
            offset: 50,
            tolerance: {
                up: 0,
                down: 0
            },
        });
        headroom.init();
    }

    // Parallax Background
    if (d.querySelector('.parallax')) {
      var par_bg = e.select('.parallax');
      if (e.isVariableDefined(par_bg)) {
          jarallax(e.selectAll('.parallax'), {
              speed: 0.6
          });
      }
    }
    // END: Parallax Background

    // GLightbox
    // var light = e.select('[data-glightbox]');
    // if (e.isVariableDefined(light)) {
    //     var lb = GLightbox({
    //         selector: '*[data-glightbox]',
    //         openEffect: 'fade',
    //         closeEffect: 'fade'
    //     });
    // }

    // Tooltips
    var ToolTipTrigger = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = ToolTipTrigger.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // Popovers
    var PopoverTrigger = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = PopoverTrigger.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })


    // Swiper
    var sliderSelector = '.swiper-container',
        defaultOptions = {
            breakpointsInverse: true,
            observer: true
        };

    var nSlider = document.querySelectorAll(sliderSelector);

    [].forEach.call(nSlider, function(slider, index, arr) {
        var data = slider.getAttribute('data-swiper-options') || {};

        if (data) {
            var dataOptions = JSON.parse(data);
        }

        slider.options = Object.assign({}, defaultOptions, dataOptions);

        var swiper = new Swiper(slider, slider.options);

        //console.log(slider.options.autoplay)

        /* stop on hover */
        if (typeof slider.options.autoplay !== 'undefined' && slider.options.autoplay !== false) {
            slider.addEventListener('mouseenter', function(e) {
                swiper.autoplay.stop();
                //console.log('stop')
            });

            slider.addEventListener('mouseleave', function(e) {
                swiper.autoplay.start();
                //console.log('start')
            });
        }
    });



    new PureCounter();

    // Or you can customize it for override the default config.
    // Here is the default configuration for all element with class 'filesizecount'
    new PureCounter({
        // Setting that can't' be overriden on pre-element
        selector: ".purecounter", // HTML query selector for spesific element

        // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
        start: 0, // Starting number [uint]
        end: 100, // End number [uint]
        duration: 2, // The time in seconds for the animation to complete [seconds]
        delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
        once: true, // Counting at once or recount when the element in view [boolean]
        pulse: false, // Repeat count for certain time [boolean:false|seconds]
        decimals: 0, // How many decimal places to show. [uint]
        legacy: true, // If this is true it will use the scroll event listener on browsers
        filesizing: false, // This will enable/disable File Size format [boolean]
        currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
        formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
        separator: false, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
    });

});