/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

export const Save = (attributes) => {
	const { heading, content } = attributes;
	
	return (
		<section id="Project" {...blockProps}>
			<div class="Project">
				<div class="container">
					<div class="Project__inner">
						<div class="row">
							<div class="col">
								<div class="Project__inner_heading">
									<RichText.Content tagName="h5" value={heading} />
								</div>
								<div class="Project__inner_text">
									<RichText.Content tagName="p" value={content} />
								</div>
								<div class="Project__inner_form"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Save;
