import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { Heading, content } = attributes;

	const onChangeHeading = (newHeading) => {
		setAttributes({ Heading: newHeading });
	};

	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent });
	};

	return (
		<>
			<section {...useBlockProps()}>
				<div class="about-banner">
					<div class="container">
						<div class="row">
							<div class=" col-lg-12">
								<div class="about-banner__inner">
									<div class="about-banner__inner_heading">
										<RichText
											tagName="h1"
											value={Heading}
											onChange={onChangeHeading}
											placeholder={__(
												"Enter banner heading text...",
												"your-theme"
											)}
										/>
									</div>
									<div class="about-banner__inner_text">
										<RichText
											tagName="p"
											value={content}
											onChange={onChangeContent}
											placeholder={__("Enter banner text...", "your-theme")}
										/>
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
