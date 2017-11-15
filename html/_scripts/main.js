var App = {
  debug: false,
  log: function(what)   { if(App.debug) { console.log(what); } },
  exists: function(el)  { if($(el).length > 0) { return true; } },

  init: function() {
    this.initApp();
  },
  initApp: function () {
    console.log('You have your app up and running');
  }

} || {};

;(function ($, window, undefined) {
  'use strict';

  $(document).ready(function() {
    App.init();
  });

})(jQuery, this);