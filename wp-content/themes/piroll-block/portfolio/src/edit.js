import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { Spinner, PanelBody } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { postsToShow } = attributes;

	// Get the portfolio posts from the REST API
	const posts = useSelect(
		(select) =>
			select('core').getEntityRecords('postType', 'portfolio', {
				per_page: postsToShow,
			}),
		[postsToShow]
	);

	// Use block props to set the block alignment
	const blockProps = useBlockProps();

	// If posts are loading, show a spinner
	if (!posts) {
		return (
			<div {...blockProps}>
				<Spinner />
			</div>
		);
	}

	// If no posts are found, show a message
	if (posts.length === 0) {
		return (
			<div {...blockProps}>
				<p>No portfolio posts found.</p>
			</div>
		);
	}

	// Otherwise, show the posts with featured images
	return (
		<>
			<InspectorControls>
				<PanelBody title="Posts Settings">
					<label htmlFor="postsToShow">Number of Posts to Show:</label>
					<input
						id="postsToShow"
						type="number"
						value={postsToShow}
						onChange={(e) =>
							setAttributes({ postsToShow: parseInt(e.target.value) || 0 })
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<ul className="portfolio-list">
					{posts.map((post) => (
						<li key={post.id} className="portfolio-item">
							<a href={post.link}>
								{post.featured_image && (
									<img
										src={post.featured_image.source_url}
										alt={post.featured_image.alt_text}
										className="portfolio-image"
									/>
								)}
								<h3 className="portfolio-title">{post.title.rendered}</h3>
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}