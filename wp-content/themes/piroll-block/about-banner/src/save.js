  /**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
  import { useBlockProps, RichText } from "@wordpress/block-editor";
export default function Save({ attributes }) {
	const { Heading, Content } = attributes;
	return (
		<section {...useBlockProps.save()} >
			<div  className="about-banner">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="about-banner__inner">
								<div className="about-banner__inner_heading">
								<RichText.Content tagName="h5" value={Heading} />
								</div>
								<div className="about-banner__inner_text">
								<RichText.Content tagName="p" value={Content} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}