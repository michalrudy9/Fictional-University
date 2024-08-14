<?php

/*
  Plugin Name: Featured Professor Block Type
  Version: 1.0
  Author: Your Name Here
  Author URI: https://www.udemy.com/user/bradschiff/
*/

if (! defined('ABSPATH')) exit; // Exit if accessed directly

class FeaturedProfessor
{
  function __construct()
  {
    add_action('init', array($this, 'onInit'));
  }

  function onInit()
  {
    register_block_type(__DIR__ . '/build');
  }
}

$featuredProfessor = new FeaturedProfessor();
