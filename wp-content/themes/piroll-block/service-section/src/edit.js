/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n"; 
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
import {
	useBlockProps,
	RichText,
	MediaUploadCheck,
	MediaUpload,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {

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

	// Define the functions to select and remove media for each element
	const onSelectMedia = (index) => (media) => {
		setAttributes({
			[mediaAttributes[index]]: media.id,
			[mediaURLAttributes[index]]: media.url,
		});
	};
	const onRemoveMedia = (index) => () => {
		setAttributes({
			[mediaAttributes[index]]: null,
			[mediaURLAttributes[index]]: null,
		});
	};

	// Define the function to change the heading for each element
	const onChangeHeading = (index) => (newHeading) => {
		setAttributes({ [headingAttributes[index]]: newHeading });
	};
	const onChangeHeadingtext = (index) => (newHeadingtext) => {
		setAttributes({ [headingtextAttributes[index]]: newHeadingtext });
	};

	
	return (
		<section id="service" {...useBlockProps()}>
			<div class="service">
				<div class="container">
					<div class="service__inner">
						<div class="row">
							<div class="col">
								<div class="service__inner_box">
									{Array.from({ length: 8 }).map((_, index) => (
										<div class="service__inner_box--details-image" key={index}>
											<div class="service__inner_box--details">
												<div class="service__inner_box--details-image">
													<MediaUploadCheck>
														<MediaUpload
															onSelect={onSelectMedia(index)}
															allowedTypes={["image"]}
															value={attributes[mediaAttributes[index]]}
															render={({ open }) => (
																<div>
																	{!attributes[mediaAttributes[index]] && (
																		<Button onClick={open} isDefault>
																			+
																		</Button>
																	)}
																	{attributes[mediaAttributes[index]] && (
																		<div>
																			<img
																				src={
																					attributes[mediaURLAttributes[index]]
																				}
																				alt="Selected Media"
																			/>
																			<Button
																				onClick={onRemoveMedia(index)}
																				isLink
																				isDestructive
																			>
																				x
																			</Button>
																		</div>
																	)}
																</div>
															)}
														/>
													</MediaUploadCheck>
												</div>
												<div class="service__inner_box--details-title">
													<RichText
														tagName="h6"
														value={attributes[headingAttributes[index]]}
														onChange={onChangeHeading(index)}
														placeholder={__(
															"Enter about heading text...",
															"your-theme"
														)}
													/>
												</div>
												<div class="service__inner_box--details-details">
													<RichText
														tagName="p"
														value={attributes[headingtextAttributes[index]]}
														onChange={onChangeHeadingtext(index)}
														placeholder={__(
															"Enter about heading text...",
															"your-theme"
														)}
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
