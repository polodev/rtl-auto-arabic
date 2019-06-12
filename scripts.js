
// default call back function 
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
      pageLanguage: 'auto',
      includedLanguages: 'ar,en',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false
  }, 'google_translate_element');
}


/**
 * for changing to arabic
 */
;(function ($) {
"use strict";

// var is_changed = true;

// var lang_change = {
//   init: function (lang) {
//     if (is_changed) {
//       this.changeLang(lang)
//       is_changed = false;
//     }
//   },
//   changeLang: function (lang) {
//     var $frame = $('.goog-te-menu-frame:first');
//     console.log('$frame', $frame)
//     if (!$frame.size()) {
//       console.log("Error: Could not find Google translate frame.");
//       return false;
//     }
//     .find('span.text:contains('+lang+')').get(0).click();
//     console.log('changed')
//     return false;
//   },

// }





$(window).on('load', function () {

  var intervalId = setInterval(function () {
    var $frame = $('.goog-te-menu-frame:first');
    var lang = 'Arabic'
    if (!$frame) {
      return false;
    }
    var $frame_menu_item =  $frame.contents().find('.goog-te-menu2-item') ;
    if (!$frame_menu_item) {
      return false;
    }
    var $lang = $frame_menu_item.find('span.text:contains('+lang+')').get(0);
    if ($lang) {
      $lang.click();
    }
    clearInterval(intervalId);
    console.log('inteval cleared')
  }, 2000)



  // setTimeout(function () {
  //   lang_change.init('Arabic');
  // }, 2000)



})



})(jQuery);
