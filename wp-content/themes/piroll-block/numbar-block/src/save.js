import { useBlockProps, RichText } from "@wordpress/block-editor";
const Save = ({ attributes }) => {
	const { Heading, Content01, mediaURL } = attributes;
	return (
		<div class="numbar__inner_box" {...useBlockProps.save()}>
			<div class="numbar__inner_box--image">
				{mediaURL && (
					<div className="--autograph">
						<img src={mediaURL} alt="Selected Media" />
					</div>
				)}
			</div>
			<div class="numbar__inner_box--detail">
				<div class="numbar__inner_box--detail-digit">
					<RichText.Content tagName="h2" value={Heading} />
				</div>
				<div class="numbar__inner_box--detail-text">
					<RichText.Content tagName="p" value={Content01} />
				</div>
			</div>
		</div>
	);
};
export default Save;
