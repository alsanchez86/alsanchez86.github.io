'use strict';

define(['require-config'], function () {
  require(['jquery', 'main_module', 'bootstrap'], function ($, main_module) {
    $(function () {
      const dynamicModules =
        typeof window.sectionModule === 'string' &&
        window.sectionModule.trim() !== ''
          ? [window.sectionModule]
          : [];

      require(dynamicModules, function (_sectionModule) {
        main_module.run({
          isLoading: false,
          callback: function () {
            if (typeof _sectionModule?.run === 'function') {
              _sectionModule.run();
            }
          },
        });
      });
    });
  });
});
