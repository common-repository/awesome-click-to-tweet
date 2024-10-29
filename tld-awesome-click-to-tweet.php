<?php
/*
Plugin Name: Awesome Click To Tweet
Plugin URI: https://uriahsvictor.com/portfolio/tld-awesome-click-tweet/
Description: Insert customizable animated or non-animated tweet boxes directly into posts or pages after any paragraph via shortcode.
Version: 1.0.7
Author: Uriahs Victor
Author URI: http://uriahsvictor.com
License: GPLv2 or later
*/


defined( 'ABSPATH' ) or die( 'But why!?' );


include dirname( __FILE__ )  . '/includes/tld-actt-tinymce-button.php';
include dirname( __FILE__ )  . '/includes/tld-actt-notice.php';

/**
* Register style sheet.
*/
function tld_actt_load_intents_assets() {
	wp_enqueue_style( 'tld-tweet-intents', plugin_dir_url( __FILE__ ) . 'assets/css/style.css?v1.0.0' );
	wp_enqueue_style( 'tld-tweet-icomoon', plugin_dir_url( __FILE__ ) . 'assets/css/icomoon.css' );
	wp_enqueue_style( 'tld-tweet-intents-animate', plugin_dir_url( __FILE__ ) . 'assets/css/animate.min.css?v3.5.2' );
	wp_enqueue_style( 'tld-lobster-font', '//fonts.googleapis.com/css?family=Lobster+Two' );
	wp_enqueue_style( 'tld-raleway-font', '//fonts.googleapis.com/css?family=Raleway' );
	wp_enqueue_style( 'tld-indie-font', '//fonts.googleapis.com/css?family=Indie+Flower' );
	wp_enqueue_style( 'tld-titillium-font', '//fonts.googleapis.com/css?family=Titillium+Web' );
	wp_enqueue_style( 'tld-alegreya-font', '//fonts.googleapis.com/css?family=Poiret+One' );
}
add_action( 'wp_enqueue_scripts', 'tld_actt_load_intents_assets' ); // For Frontend

if ( function_exists( 'register_block_type' ) ) {
	add_action( 'enqueue_block_editor_assets', 'tld_actt_load_intents_assets' ); // For Backend Block
}


function tld_actt_admin_css(){
	wp_enqueue_style( 'tld_actt_admin_styles',  plugin_dir_url( __FILE__ ) . ( 'assets/css/admin.css?v1.0.0' ) );
}
add_action( 'admin_enqueue_scripts', 'tld_actt_admin_css' );

//setup review timer
if ( function_exists( 'tld_actt_review_notice' ) ) {

	register_activation_hook( __FILE__,  'tld_actt_set_review_trigger_date' );

	/**
	* Set Trigger Date.
	*
	* @since  1.0.0
	*/
	function tld_actt_set_review_trigger_date() {

		// Number of days you want the notice delayed by.
		$tld_actt_delayindays = 21;

		// Create timestamp for when plugin was activated.
		$tld_actt_triggerdate = mktime( 0, 0, 0, date('m')  , date('d') + $tld_actt_delayindays, date('Y') );

		// If our option doesn't exist already, we'll create it with today's timestamp.
		if ( ! get_option( 'tld_actt_activation_date') ) {
			add_option( 'tld_actt_activation_date', $tld_actt_triggerdate, '', 'yes' );
		}

	}

}

function tld_actt_shortcode( $atts, $content = null ){

	$atts = shortcode_atts( array(

		'mask' 			=> '',
		'tweet'			=> '',
		'btn-text'	=> 'Tweet Now',
		'anim'			=> 'pulse',
		'duration'	=> ' 5',
		'delay'			=> ' 5',
		'infinite'	=> ' infinite',
		'template'	=> '',
		'font'			=> ' lobster-two',
	), $atts, 'actt' );

	$the_actt_mask 		= $atts['mask'];
	$the_actt_tweet 		= rawurlencode($atts['tweet']);
	$the_actt_btn_text = $atts['btn-text'];
	$the_actt_anim 		= $atts['anim'];
	$the_actt_duration = $atts['duration'];
	$the_actt_delay 		= $atts['delay'];
	$the_actt_infinite = $atts['infinite'];
	$the_actt_template = $atts['template'];
	$the_actt_font			= ' '. $atts['font'];

	//Only do below if anim variable not empty

	if ( $the_actt_anim != 'none'  ){

		$the_actt_animation_duration =	$the_actt_duration . "s";
		$the_actt_animation_delay =	$the_actt_delay . "s";

		$tld_actt_vendor_webkit_duration = "-webkit-animation-duration:" . $the_actt_animation_duration . ";";
		$tld_actt_vendor_moz_duration = "-moz-animation-duration:" . $the_actt_animation_duration . ";";
		$tld_actt_vendor_o_duration = "-o-animation-duration:" . $the_actt_animation_duration . ";";
		$tld_actt_vendor_default_duration = "animation-duration:" . $the_actt_animation_duration . ";";
		$tld_actt_vendor_webkit_delay = "-webkit-animation-delay:" . $the_actt_animation_delay . ";";
		$tld_actt_vendor_moz_delay = "-moz-animation-delay:" . $the_actt_animation_delay . ";";
		$tld_actt_vendor_o_delay = "-o-animation-delay:" . $the_actt_animation_delay . ";";
		$tld_actt_vendor_default_delay = "animation-delay:" . $the_actt_animation_delay . ";";

		$the_actt_animation_settings = $tld_actt_vendor_webkit_duration . $tld_actt_vendor_moz_duration . $tld_actt_vendor_o_duration . $tld_actt_vendor_default_duration . $tld_actt_vendor_webkit_delay . $tld_actt_vendor_moz_delay . $tld_actt_vendor_o_delay . $tld_actt_vendor_default_delay;
	}
	switch ( $the_actt_template ) {

		case 'bbutton':
		$the_actt_template = ' tld-actt-bbutton';
		break;

		case 'dashed':
		$the_actt_template = ' tld-actt-dashed';
		break;

		case 'minimalist':
		$the_actt_template = ' tld-actt-minimalist';
		break;

		default:
		$the_actt_template = ' tld-actt-minimalist';
		break;

	}

	$the_actt_anim_classes	= 'animated ';
	$the_actt_anim_classes	.= $the_actt_anim;
	$the_actt_anim_classes	.= $the_actt_infinite;

	$the_actt_template_classes	= $the_actt_template;
	$the_actt_template_classes	.= $the_actt_font;

	switch ( $the_actt_template ) {
		case ' tld-actt-bbutton':
		if ( $the_actt_anim != 'none' ) {
			$actt_tweet = '
			<div id="tld-actt-tweet-container" class="'.esc_attr( $the_actt_anim_classes ) . esc_attr( $the_actt_template_classes ).'" style="'.esc_attr( $the_actt_animation_settings).'">
			<p>'.wp_strip_all_tags( $the_actt_mask . $content ).'</p>
			<div class="tld-actt-tweet-text tld-actt-white-btn-text tld-actt-btn-full">
			<a href="https://twitter.com/intent/tweet?text='.$the_actt_tweet.'" target="_blank"><span>'.wp_strip_all_tags( $the_actt_btn_text ).'</span><span class="icon-twitter"></span></a>
			</div>
			</div>';
		}else{
			$actt_tweet = '
			<div id="tld-actt-tweet-container" class="'. esc_attr( $the_actt_template_classes ).'">
			<p>'.wp_strip_all_tags( $the_actt_mask . $content ).'</p>
			<div class="tld-actt-tweet-text tld-actt-white-btn-text tld-actt-btn-full">
			<a href="https://twitter.com/intent/tweet?text='.$the_actt_tweet.'" target="_blank"><span>'.wp_strip_all_tags( $the_actt_btn_text ).'</span><span class="icon-twitter"></span></a>
			</div>
			</div>';
		}
		break;

		case ' tld-actt-dashed':
		if ( $the_actt_anim != 'none' ) {
			$actt_tweet = '
			<div id="tld-actt-tweet-container" class="'.esc_attr( $the_actt_anim_classes ) . esc_attr( $the_actt_template_classes ).'" style="'.esc_attr( $the_actt_animation_settings).'">
			<p>'.wp_strip_all_tags( $the_actt_mask . $content ).'</p>
			<div class="tld-actt-tweet-text">
			<a class="tld-actt-btn-default" href="https://twitter.com/intent/tweet?text='.$the_actt_tweet.'" target="_blank"><span>'.wp_strip_all_tags( $the_actt_btn_text ).'</span><span class="icon-twitter"></span></a>
			</div>
			</div>';
		}else{
			$actt_tweet = '
			<div id="tld-actt-tweet-container" class="'. esc_attr( $the_actt_template_classes ).'">
			<p>'.wp_strip_all_tags( $the_actt_mask . $content ).'</p>
			<div class="tld-actt-tweet-text">
			<a class="tld-actt-btn-default" href="https://twitter.com/intent/tweet?text='.$the_actt_tweet.'" target="_blank"><span>'.wp_strip_all_tags( $the_actt_btn_text ).'</span><span class="icon-twitter"></span></a>
			</div>
			</div>';
		}
		break;

		case ' tld-actt-minimalist':
		if ( $the_actt_anim != 'none' ) {
			$actt_tweet = '
			<div id="tld-actt-tweet-container" class="'.esc_attr( $the_actt_anim_classes ) . esc_attr( $the_actt_template_classes ).'" style="'.esc_attr( $the_actt_animation_settings).'">
			<p>'.wp_strip_all_tags( $the_actt_mask . $content ).'</p>
			<div class="tld-actt-tweet-text">
			<a class="tld-actt-btn-default" href="https://twitter.com/intent/tweet?text='.$the_actt_tweet.'" target="_blank"><span>'.wp_strip_all_tags( $the_actt_btn_text ).'</span><span class="icon-twitter"></span></a>
			</div>
			</div>';
		}else{
			$actt_tweet = '
			<div id="tld-actt-tweet-container" class="'. esc_attr( $the_actt_template_classes ).'">
			<p>'.wp_strip_all_tags( $the_actt_mask . $content ).'</p>
			<div class="tld-actt-tweet-text">
			<a class="tld-actt-btn-default" href="https://twitter.com/intent/tweet?text='.$the_actt_tweet.'" target="_blank"><span>'.wp_strip_all_tags( $the_actt_btn_text ).'</span><span class="icon-twitter"></span></a>
			</div>
			</div>';
		}
		break;

		default:
		$actt_tweet = '
		<div id="tld-actt-tweet-container" class="'.esc_attr( $the_actt_template_classes ).'">
		<p>'.wp_strip_all_tags( $the_actt_mask . $content ).'</p>
		<div class="tld-actt-tweet-text">
		<a class="tld-actt-btn-default" href="https://twitter.com/intent/tweet?text='.$the_actt_tweet.'" target="_blank"><span>'.wp_strip_all_tags( $the_actt_btn_text ).'</span><span class="icon-twitter"></span></a>
		</div>
		</div>';
		break;
	}

	return $actt_tweet;

}

add_shortcode( 'actt', 'tld_actt_shortcode' );

/**
 * Block Initializer.
 */
add_action( 'plugins_loaded', function () {
	if ( function_exists( 'register_block_type' ) ) {
		require_once( plugin_dir_path( __FILE__ ) . 'block/init.php' );
	}
} );
