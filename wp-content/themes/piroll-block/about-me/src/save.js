import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

export default function save({ attributes }) {
  const { mediaURL, heading, content } = attributes;

  return (
    <section {...useBlockProps.save()}>
      <div className="about-me">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-me__first">
              <div className="about-me__first_image"></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-me__inner">
              <div className="about-me__inner_details">
                <RichText.Content tagName="h2" value={heading} />
                <RichText.Content tagName="p" value={content} />
                <div>{mediaURL && <img src={mediaURL} alt="Selected Media" />}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}