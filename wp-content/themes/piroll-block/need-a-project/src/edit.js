import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes }) {
	const { Heading, Content01 } = attributes;

	const onChangeHeading = (newHeading) => {
		setAttributes({ Heading: newHeading });
	};

	const onChangeContent01 = (newContent01) => {
		setAttributes({ Content01: newContent01 });
	};

	return (
		<section id="Project" {...useBlockProps()}>
			<div class="Project__inner_heading">
				<RichText
					tagName="h2"
					value={Heading}
					onChange={onChangeHeading}
					placeholder={__("Enter about heading text...", "your-theme")}
				/>
			</div>
			<div class="Project__inner_text">
				<RichText
					tagName="p"
					value={Content01}
					onChange={onChangeContent01}
					placeholder={__("Enter about content...", "your-theme")}
				/>
			</div>
		</section>
	);
}


