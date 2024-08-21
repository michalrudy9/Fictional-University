<?php

/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */


?>

<div style="background-color: <?= $attributes["bgColor"] ?>" class="paying-attention-frontend" data-wp-interactive="create-block" <?= wp_interactivity_data_wp_context($attributes) ?>>
	<p><?= $attributes['question'] ?></p>
	<ul>
		<template data-wp-each="context.answers">
			<li data-wp-on--click="actions.guessAttempt" data-wp-text="context.item"></li>
		</template>
	</ul>
</div>