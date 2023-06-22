import { useBlockProps, RichText } from "@wordpress/block-editor";
export default function save(props) {
	const { Heading, content, buttonText, buttonURL } = props.attributes;
	return (
		<section {...useBlockProps.save()}>
			<div class="need-project">
				<div class="container">
					<div class="row">
						<div class=" col-lg-12">
							<div class="need-project__inner">
								<div class="need-project__inner_heading">
									<RichText.Content tagName="h5" value={Heading} />
								</div>
								<div class="need-project__inner_text">
									<RichText.Content tagName="p" value={content} />
								</div>
								<div class="need-project__inner_button">
									<a href={buttonURL}>
										<RichText.Content
											tagName="span"
											className="button-text"
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
