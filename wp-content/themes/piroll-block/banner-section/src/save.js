import { useBlockProps, RichText } from "@wordpress/block-editor";
export default function save(props) {
	const { Heading, content, buttonText, buttonURL } = props.attributes;

	return (
			<section id="banner" {...useBlockProps.save()}>
				<div className="banner">
					<div className="container">
						<div className="banner__inner">
							<div className="row">
								<div className="col">
									<div className="banner__inner_heading">
										<RichText.Content tagName="h1" value={Heading} />
									</div>
									<div className="banner__inner_text">
										<RichText.Content tagName="p" value={content} />
									</div>
									<div className="banner__inner_button">
										<a href={buttonURL}>
											<RichText.Content tagName="span"className="button-text"
											value={buttonText}
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
	);
}