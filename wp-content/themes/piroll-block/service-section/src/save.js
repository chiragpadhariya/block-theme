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
export default function save({ attributes }) {
	// Define the media and heading attributes for each element
	const mediaAttributes = [
		"mediaID01",
		"mediaID02",
		"mediaID03",
		"mediaID04",
		"mediaID05",
		"mediaID06",
		"mediaID07",
		"mediaID08",
	];
	const mediaURLAttributes = [
		"mediaURL01",
		"mediaURL02",
		"mediaURL03",
		"mediaURL04",
		"mediaURL05",
		"mediaURL06",
		"mediaURL07",
		"mediaURL08",
	];
	const headingAttributes = [
		"Heading01",
		"Heading02",
		"Heading03",
		"Heading04",
		"Heading05",
		"Heading06",
		"Heading07",
		"Heading08",
	];
	const headingtextAttributes = [
		"Headingtext01",
		"Headingtext02",
		"Headingtext03",
		"Headingtext04",
		"Headingtext05",
		"Headingtext06",
		"Headingtext07",
		"Headingtext08",
	];
	const blockProps = useBlockProps.save();

	return (
		<section {...useBlockProps.save()} id="service" >
			<div class="service">
				<div class="container">
					<div class="service__inner">
						<div class="row">
							<div class="col">
								<div class="service__inner_box">
									{Array.from({ length: 8 }).map((_, index) => (
										<div class="numbar__inner_box" key={index}>
											<div class="service__inner_box--details">
												<div class="service__inner_box--details-image">
													{attributes[mediaURLAttributes[index]] && (
														<img
															src={attributes[mediaURLAttributes[index]]}
															alt="Selected Media"
														/>
													)}
												</div>
												<div class="service__inner_box--details-title">
													<RichText.Content
														tagName="h6"
														value={attributes[headingAttributes[index]]}
													/>
												</div>
												<div class="service__inner_box--details-details">
													<RichText.Content
														tagName="p"
														value={attributes[headingtextAttributes[index]]}
													/>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
