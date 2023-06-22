import { __ } from "@wordpress/i18n";
import { PanelBody, Button, TextControl } from "@wordpress/components";
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { Heading, content, buttonText, buttonURL } = attributes;

	const onChangeHeading = (newHeading) => {
		setAttributes({ Heading: newHeading });
	};

	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent });
	};
	const [newButtonURL, setNewButtonURL] = useState(buttonURL);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "your-domain")}>
					<TextControl
						label={__("Button URL")}
						value={newButtonURL}
						onChange={(newURL) => setNewButtonURL(newURL)}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...useBlockProps()}>
				<div class="need-project">
					<div class="container">
						<div class="row">
							<div class=" col-lg-12">
								<div class="need-project__inner">
									<div class="need-project__inner_heading">
										<RichText
											tagName="h5"
											value={Heading}
											onChange={onChangeHeading}
											placeholder={__(
												"Enter banner heading text...",
												"your-theme"
											)}
										/>
									</div>
									<div class="need-project__inner_text">
										<RichText
											tagName="p"
											value={content}
											onChange={onChangeContent}
											placeholder={__("Enter banner text...", "your-theme")}
										/>
									</div>
									<div class="need-project__inner_button">
										<Button>
											<RichText
												tagName="span"
												className="button-text"
												placeholder={__("Button Text")}
												value={buttonText}
												onChange={(newText) =>
													setAttributes({ buttonText: newText })
												}
											/>
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
