import { useBlockProps, RichText } from "@wordpress/block-editor";
export default function save(props) {
	console.log("save");
	console.log(props);

	const { Heading, content, content2, content3 } = props.attributes;

	return (
		<section id="skills" {...useBlockProps.save()}>
			<div className="skills">
				<div className="row">
					<div className="col-lg-6 col-md-6">
						<div className="skills__inner">
							<div className="skills__inner_heading">
								<RichText.Content tagName="h1" value={Heading} />
							</div>
							<div
								className="skills__inner_title"
								id="skills__inner_title--one"
							>
								<RichText.Content tagName="p" value={content} />
							</div>
							<div
								className="skills__inner_title"
								id="skills__inner_title--two"
							>
								<p>
									<RichText.Content value={content2} />
								</p>
							</div>
							<div
								className="skills__inner_title"
								id="skills__inner_title--three"
							>
								<p>
									<RichText.Content value={content3} />
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
	);
}
