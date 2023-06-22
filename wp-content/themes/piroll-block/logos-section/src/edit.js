import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
	Button,
} from "@wordpress/block-editor";
import { TextControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;

	const onSelectMedia = (media, index) => {
		const updatedAttributes = {
			...attributes,
			[`mediaID0${index}`]: media.id,
			[`mediaURL0${index}`]: media.url,
		};
		setAttributes(updatedAttributes);
	};
	const onRemoveMedia = (index) => {
		const updatedAttributes = {
			...attributes,
			[`mediaID0${index}`]: null,
			[`mediaURL0${index}`]: null,
		};
		setAttributes(updatedAttributes);
	};

	return (
		<section {...useBlockProps()}>
			<div className="logos">
				<div className="container">
					<div className="logos__inner">
						<div className="row">
							<div className="col">
								<div className="logos__inner_box">
									{[1, 2, 3, 4, 5].map((index) => (
										<div key={index}>
											<MediaUploadCheck>
												<MediaUpload
													onSelect={(media) => onSelectMedia(media, index)}
													allowedTypes={["image"]}
													value={attributes[`mediaID0${index}`]}
													render={({ open }) => (
														<div>
															{!attributes[`mediaID0${index}`] && (
																<button onClick={open} isDefault>
																	Select Media
																</button>
															)}
															{attributes[`mediaID0${index}`] && (
																<div>
																	<img
																		src={attributes[`mediaURL0${index}`]}
																		alt="Selected Media"
																	/>
																	<button
																		onClick={() => onRemoveMedia(index)}
																		isLink
																		isDestructive
																	>
																		x
																	</button>
																</div>
															)}
														</div>
													)}
												/>
											</MediaUploadCheck>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
