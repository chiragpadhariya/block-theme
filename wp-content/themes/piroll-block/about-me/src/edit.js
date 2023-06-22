/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
  useBlockProps,
  RichText,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { mediaID, mediaURL, heading, content } = attributes;

  const onSelectMedia = (media) => {
    setAttributes({
      mediaID: media.id,
      mediaURL: media.url,
    });
  };

  const onRemoveMedia = () => {
    setAttributes({
      mediaID: null,
      mediaURL: null,
    });
  };

  const onChangeHeading = (newHeading) => {
    setAttributes({ heading: newHeading });
  };

  const onChangeContent = (newContent) => {
    setAttributes({ content: newContent });
  };

  const blockProps = useBlockProps();

  return (
    <section {...blockProps}>
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
                <RichText
                  tagName="h2"
                  value={heading}
                  onChange={onChangeHeading}
                  placeholder={__("Enter banner heading text...", "your-theme")}
                />

                <RichText
                  tagName="p"
                  value={content}
                  onChange={onChangeContent}
                  placeholder={__("Enter banner text...", "your-theme")}
                />
                <div>
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={onSelectMedia}
                      allowedTypes={["image"]}
                      value={mediaID}
                      render={({ open }) => (
                        <div>
                          {!mediaID && (
                            <Button onClick={open} isDefault>
                              Select Media
                            </Button>
                          )}
                          {mediaID && (
                            <div>
                              <img src={mediaURL} alt="Selected Media" />
                              <Button onClick={onRemoveMedia} isLink isDestructive>
                                x
                              </Button>
                            </div>
                          )}
                        </div>
                      )}
                    />
                  </MediaUploadCheck>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}