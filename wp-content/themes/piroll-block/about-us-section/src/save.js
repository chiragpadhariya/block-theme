import { useBlockProps, RichText } from "@wordpress/block-editor";
const Save = ({ attributes }) => {
	const { Heading, Content01, mediaURL } = attributes;
	return (
		<section id="about-us" {...useBlockProps.save()}>
			<div class="about-us">
				<div class="container">
					<div class="about-us__inner">
						<div class="row">
							<div class="col">
								<div class="about-us__inner_details">
									<div className="about-us__inner_details--heading">
										<RichText.Content tagName="h2" value={Heading} />
									</div>
									<div className="about-us__inner_details--text">
										<RichText.Content tagName="p" value={Content01} />
									</div>
									{mediaURL && (
										<div className="about-us__inner_details--autograph">
											<img src={mediaURL} alt="Selected Media" />
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Save;
