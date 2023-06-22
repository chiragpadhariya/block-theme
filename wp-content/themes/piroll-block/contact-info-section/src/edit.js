import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	console.log("edit");
	console.log(attributes);
	const { Heading, content, content1, content2, content3, content4 } =
		attributes;

	const onChangeHeading = (newHeading) => {
		setAttributes({ Heading: newHeading });
	};

	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent });
	};
	const onChangeContent1 = (newContent1) => {
		setAttributes({ content1: newContent1 });
	};

	const onChangeContent2 = (newContent2) => {
		setAttributes({ content2: newContent2 });
	};

	const onChangeContent3 = (newContent3) => {
		setAttributes({ content3: newContent3 });
	};

	const onChangeContent4 = (newContent4) => {
		setAttributes({ content4: newContent4 });
	};

	// Create a new function to handle the change of content4
	// const onChangeContent4 = (newContent4) => {
	//     setAttributes({ content4: newContent4 });
	// };

	return (
		<>
			<section {...useBlockProps()}>
				<div class="contacts__inner_heading">
					<RichText
						tagName="h3"
						value={Heading}
						onChange={onChangeHeading}
						placeholder={__("Enter contacts heading text...", "your-theme")}
					/>
				</div>
				<div class="contacts__inner_text">
					<RichText
						tagName="p"
						value={content}
						onChange={onChangeContent}
						placeholder={__("Enter contacts text...", "your-theme")}
					/>
				</div>
				<div class="contacts__inner_details">
					<p id="contacts__inner_details1">
						<RichText
							value={content1}
							onChange={onChangeContent1}
							placeholder={__("Enter contacts text...", "your-theme")}
						/>
					</p>
					<p id="contacts__inner_details2">
						<RichText
							value={content2}
							onChange={onChangeContent2}
							placeholder={__("Enter contacts text...", "your-theme")}
						/>
					</p>
					<p id="contacts__inner_details3">
						<RichText
							value={content3}
							onChange={onChangeContent3}
							placeholder={__("Enter contacts text...", "your-theme")}
						/>
					</p>
					<p id="contacts__inner_details4">
						<RichText
							value={content4}
							onChange={onChangeContent4}
							placeholder={__("Enter contacts text...", "your-theme")}
						/>
					</p>
				</div>
			</section>
			;
		</>
	);
}
