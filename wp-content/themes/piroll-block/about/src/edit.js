import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { Heading, Content01, mediaID, mediaURL } = attributes;

	const onChangeHeading = (newHeading) => {
		setAttributes({ Heading: newHeading });
	};

	const onChangeContent01 = (newContent01) => {
		setAttributes({ Content01: newContent01 });
	};

	const onSelectMedia = (media) => {
		setAttributes({
			mediaID: media.id,
			mediaURL: media.url,
		});
	};

	const onRemoveMedia = () => {
		setAttributes({
			mediaID: null,
			mediaURL: null,
		});
	};

	return (
		<section id="about-us" {...useBlockProps()}>
			<div class="about-us">
				<div class="container">
					<div class="about-us__inner">
						<div class="row">
							<div class="col">
								<div class="about-us__inner_details"></div>

								<div className="about-us__inner_details--heading">
									<RichText
										tagName="h2"
										value={Heading}
										onChange={onChangeHeading}
										placeholder={__(
											"Enter about heading text...",
											"your-theme"
										)}
									/>
								</div>
								<div className="about-us__inner_details--text">
									<RichText
										tagName="p"
										value={Content01}
										onChange={onChangeContent01}
										placeholder={__("Enter about content...", "your-theme")}
									/>
								</div>
								<div className="about-us__inner_details--autograph">
									<MediaUploadCheck>
										<MediaUpload
											onSelect={onSelectMedia}
											allowedTypes={["image"]}
											value={mediaID}
											render={({ open }) => (
												<div>
													{!mediaID && (
														<Button onClick={open} isDefault>
															Select Media
														</Button>
													)}
													{mediaID && (
														<div>
															<img src={mediaURL} alt="Selected Media" />
															<Button onClick={open} isDefault>
																Replace Media
															</Button>
															<Button
																onClick={onRemoveMedia}
																isLink
																isDestructive
															>
																Remove Media
															</Button>
														</div>
													)}
												</div>
											)}
										/>
									</MediaUploadCheck>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
