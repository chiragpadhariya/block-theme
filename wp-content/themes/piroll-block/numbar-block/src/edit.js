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
		<div class="numbar__inner_box " {...useBlockProps()}>
			<div class="numbar__inner_box--image">
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

										<Button onClick={onRemoveMedia} isLink isDestructive>
											x
										</Button>
									</div>
								)}
							</div>
						)}
					/>
				</MediaUploadCheck>
			</div>
			<div class="numbar__inner_box--detail">
				<div class="numbar__inner_box--detail-digit">
					<RichText
						tagName="h2"
						value={Heading}
						onChange={onChangeHeading}
						placeholder={__("Enter about heading text...", "your-theme")}
					/>
				</div>
				<div class="numbar__inner_box--detail-text">
					<RichText
						tagName="p"
						value={Content01}
						onChange={onChangeContent01}
						placeholder={__("Enter about content...", "your-theme")}
					/>
				</div>
			</div>
		</div>
	);
}
