import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	console.log( 'edit' );
	console.log( attributes );
	const { Heading, content, content2, content3 } = attributes; 

	const onChangeHeading = (newHeading) => {
		setAttributes({ Heading: newHeading });
	};

	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent });
	};

	const onChangeContent2 = (newContent2) => {
		setAttributes({ content2: newContent2 });
	};

	const onChangeContent3 = (newContent3) => {
		setAttributes({ content3: newContent3 });
	};

    // Create a new function to handle the change of content4
    // const onChangeContent4 = (newContent4) => {
    //     setAttributes({ content4: newContent4 });
    // };

	return (
		<>
			<section id="skills" {...useBlockProps()}>
				<div className="skills">
					<div className="row">
						<div className="col-lg-6 col-md-6">
							<div className="skills__inner">
								<div className="skills__inner_heading">
									<RichText
										tagName="h1"
										value={Heading}
										onChange={onChangeHeading}
										placeholder={__(
											"Enter banner heading text...",
											"your-theme"
										)}
									/>
								</div>
								<div
									className="skills__inner_title"
									id="skills__inner_title--one"
								>
									<RichText
										tagName="p"
										value={content}
										onChange={onChangeContent}
										placeholder={__("Enter banner text...", "your-theme")}
									/>
								</div>
								<div
									className="skills__inner_title"
									id="skills__inner_title--two"
								>
									<p>
									<RichText
										value={content2}
										onChange={onChangeContent2}
										placeholder={__("Enter banner text...", "your-theme")}
									/>
									</p>
								</div>
								<div
									className="skills__inner_title"
									id="skills__inner_title--three"
								>
									<p>
									<RichText
										value={content3}
										onChange={onChangeContent3}
										placeholder={__("Enter banner text...", "your-theme")}
									/>
								</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="skills__image"></div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
