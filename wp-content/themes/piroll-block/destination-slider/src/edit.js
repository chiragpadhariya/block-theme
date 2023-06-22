import { __ } from "@wordpress/i18n";
import { 	useBlockProps, RichText } from "@wordpress/block-editor";
export default function Edit({ attributes, setAttributes }) {
	const { Heading, Content } = attributes;

	const onChangeHeading = (newHeading) => {
		setAttributes({ Heading: newHeading });
	};

	const onChangeContent = (newContent) => {
		setAttributes({ Content: newContent });
	};

	return (
		<section id="testimonial" {...useBlockProps()}>
			<div class="testimonial">
				<div class="container">
					<div class="testimonial__inner">
						<div class="row">
							<div class="col">
								<div class="testimonial__inner_slider">
									<div class="swiper-pagination__one"></div>
									<div class="testimonial__inner_slider--box swiper-slide">
										<div class="testimonial__inner_slider--box-heading">
											<RichText
												tagName="h4"
												value={Heading}
												onChange={onChangeHeading}
												placeholder={__(
													"Enter banner heading text...",
													"your-theme"
												)}
											/>
										</div>
										<div class="testimonial__inner_slider--box-client">
											<RichText
												tagName="p"
												value={Content}
												onChange={onChangeContent}
												placeholder={__("Enter banner text...", "your-theme")}
											/>
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
