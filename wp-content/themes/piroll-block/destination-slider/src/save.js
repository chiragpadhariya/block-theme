/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";
export default function Save({ attributes }) {
	const { Heading, Content } = attributes;
	return (
		<section {...useBlockProps.save()} id="testimonial" >
			<div class="testimonial">
				<div class="container">
					<div class="testimonial__inner">
						<div class="row">
							<div class="col">
								<div class="testimonial__inner_slider">
									<div class="swiper-pagination__one"></div>
									<div class="testimonial__inner_slider--box swiper-slide">
										<div class="testimonial__inner_slider--box-heading">
											<RichText.Content tagName="h4" value={Heading} />
										</div>
										<div class="testimonial__inner_slider--box-client">
											<RichText.Content tagName="p" value={Content} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
