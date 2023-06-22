import { useBlockProps, RichText } from "@wordpress/block-editor";
const Save = ({ attributes }) => {
	const { Heading, Content01, mediaURL } = attributes;
	return (
		<div {...useBlockProps.save()} class="service__inner_box--details" >
			<div class="service__inner_box--details-image">
				{mediaURL && (
					<div className="--autograph">
						<img src={mediaURL} alt="Selected Media" />
					</div>
				)}
			</div>
			<div class="service__inner_box--details-title">
				<RichText.Content tagName="h6" value={Heading} />
			</div>
			<div class="service__inner_box--details-details">
				<RichText.Content tagName="p" value={Content01} />
			</div>
		</div>
	);
};
export default Save;
