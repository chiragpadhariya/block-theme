import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes }) {
	const { Heading, Content } = attributes;

	const onChangeHeading = (newHeading) => {
		setAttributes({ Heading: newHeading });
	};

	const onChangeContent = (newContent) => {
		setAttributes({ Content: newContent });
	};

	return (
		<section>
			<div className="about-banner">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="about-banner__inner">
								<div className="about-banner__inner_heading">
									<RichText
										tagName="h5"
										value={Heading}
										onChange={onChangeHeading}
										placeholder={__(
											"Enter banner heading text...",
											"your-theme"
										)}
									/>
								</div>
								<div className="about-banner__inner_text">
									<RichText
										tagName="p"
										value={Content}
										onChange={onChangeContent}
										placeholder={__(
											"Enter banner text...",
											"your-theme"
										)}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}