import { useBlockProps, RichText } from "@wordpress/block-editor";
const Save = ({ attributes }) => {
	const { Heading, Content01 } = attributes;
	return (
		<section {...useBlockProps.save()}  id="Project" >
			<div class="Project__inner_heading">
				<RichText.Content tagName="h2" value={Heading} />
			</div>
			<div class="Project__inner_text">
				<RichText.Content tagName="p" value={Content01} />
			</div>
		</section>
	);
};
export default Save;

