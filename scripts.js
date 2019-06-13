
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


$(window).on('load', function () {

  // setInterval will be happen until page found google translate toolbar
  var intervalId = setInterval(function () {
    var lang = 'Arabic'

    var $frame = $('.goog-te-menu-frame:first');
    // if frame is not defined page didn't fetch translate toolbar yet
    if (!$frame) {
      return false;
    }
    // if frame is not defined page didn't fetch translate toolbar yet
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



})



})(jQuery);
