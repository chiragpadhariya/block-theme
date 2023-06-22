import { useBlockProps, RichText } from "@wordpress/block-editor";
export default function save(props) {
	const { Heading, content } = props.attributes;

	return (
		<section>
			<div class="about-banner" {...useBlockProps.save()}>
				<div class="container">
					<div class="row">
						<div class=" col-lg-12">
							<div class="about-banner__inner">
								<div class="about-banner__inner_heading">
									<RichText.Content tagName="h1" value={Heading} />
								</div>
								<div class="about-banner__inner_text">
									<RichText.Content tagName="p" value={content} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
