'use strict';

define(function () {
  require(['require-config'], function () {
    require(['jquery'], function ($) {
      require(['bootstrap'], function () {
        // jquery document ready
        // domReady requirejs plugin is not necessary here
        $(function () {
          // Section module
          if (
            sectionModule &&
            typeof sectionModule === 'string' &&
            sectionModule !== ''
          ) {
            require(['main_module', sectionModule], function (
              main_module,
              _sectionModule_,
            ) {
              mainPageLoading(main_module, function () {
                if (
                  _sectionModule_ &&
                  _sectionModule_.run &&
                  typeof _sectionModule_.run === 'function'
                ) {
                  _sectionModule_.run();
                }
              });
            });
          } else {
            require(['main_module'], function (main_module) {
              mainPageLoading(main_module);
            });
          }
        });
      });
    });
  });

  function mainPageLoading(module, callback) {
    module.setPageLoading(false, function () {
      // Callback
      if (typeof callback === 'function') {
        callback();
      }
    });
  }
});
