import { useBlockProps, RichText } from "@wordpress/block-editor";
export default function save(props) {
	console.log("save");
	console.log(props);
	const { Heading, content, content1, content2, content3, content4 } =
		props.attributes;

	return (
		<section {...useBlockProps.save()}>
			<div class="contacts__inner_heading">
				<RichText.Content tagName="h3" value={Heading} />
			</div>
			<div class="contacts__inner_text">
				<RichText.Content tagName="p" value={content} />
			</div>
			<div class="contacts__inner_details">
				<p id="contacts__inner_details1">
					<RichText.Content value={content1} />
				</p>
				<p id="contacts__inner_details2">
					<RichText.Content value={content2} />
				</p>
				<p id="contacts__inner_details3">
					<RichText.Content value={content3} />
				</p>
				<p id="contacts__inner_details4">
					<RichText.Content value={content4} />
				</p>
			</div>
		</section>
	);
}
