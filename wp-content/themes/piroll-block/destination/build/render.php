<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
function my_custom_block_render_callback($attributes, $content) {
    $slides = $attributes['slides'];
    ob_start();
    ?>
    <div class="my-custom-block">
        <?php foreach ($slides as $index => $slide) { ?>
            <div class="slide">
                <h3>Slide <?php echo $index + 1; ?></h3>
                <div>
                    <label>Heading:</label>
                    <input type="text" value="<?php echo esc_attr($slide['heading']); ?>" readonly />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea readonly><?php echo esc_textarea($slide['content']); ?></textarea>
                </div>
                <button>Delete Slide</button>
            </div>
        <?php } ?>
        <button>Add Slide</button>
    </div>
    <?php
    return ob_get_clean();
		}