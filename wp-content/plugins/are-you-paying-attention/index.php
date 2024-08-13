<?php

/*
  Plugin Name: Brad&rsquo;s Boilerplate Block Plugin
  Version: 1.0
  Author: Brad
  Author URI: https://github.com/LearnWebCode
*/

if (! defined('ABSPATH')) exit; // Exit if accessed directly

class AreYouPayingAttention
{
  function __construct()
  {
    add_action('init', array($this, 'adminAssets'));
  }

  function adminAssets()
  {
    register_block_type(__DIR__ . '/build');
  }
}

$areYouPayingAttention = new AreYouPayingAttention();
