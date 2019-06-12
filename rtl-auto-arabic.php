<?php
namespace App\Github;

/*
Plugin Name: Rtl auto arabic
Plugin URI: https://www.radiustheme.com
Description: rtl-auto-arabic for demo purpose
Version: 1.0
Author: Polo Dev
Author URI: https://www.radiustheme.com
*/

class Rtl_auto_arabic {
  public $version = '1.0';
  public function __construct()
  {
    add_action( 'wp_footer', array($this, 'google_translate_html_code' ) );
    add_action( 'wp_head', array($this, 'hide_google_topbar' ) );
    add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ), 20 );
  }
  public function enqueue_scripts()
  {
    wp_enqueue_script( 'rtl-arabic-scripts', plugins_url( 'scripts.js', __FILE__ ), ['jquery']);
    wp_enqueue_script( 'google-translate', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit', ['jquery', 'rtl-arabic-scripts']);
  }
  public function google_translate_html_code()
  {
    echo '<div id="google_translate_element" style="display: none!important;"></div>';
  }
  public function hide_google_topbar() {
    echo "
    <style>
       body { top: 0px !important; }
      .goog-te-banner-frame.skiptranslate {display: none !important;}
    </style>

    ";
  }
}

new Rtl_auto_arabic;
