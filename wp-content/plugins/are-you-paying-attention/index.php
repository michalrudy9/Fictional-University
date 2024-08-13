<?php

/*
  Plugin Name: Are You Paying Attention Quiz
  Description: Give your readers a multiple choice question.
  Version 1.0
  Author: Brad
  Author URI: https://www.udemy.com/user/bardschiff
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
