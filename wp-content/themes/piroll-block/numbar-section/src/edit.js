import { useBlockProps, RichText, MediaUploadCheck, MediaUpload } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function Edit({ attributes, setAttributes}) {
  const mediaAttributes = ["mediaID1", "mediaID2", "mediaID3", "mediaID4"];
  const mediaURLAttributes = ["mediaURL1", "mediaURL2", "mediaURL3", "mediaURL4"];
  const headingAttributes = ["heading01", "heading02", "heading03", "heading04"];
  const headingtextAttributes = ["headingtext01", "headingtext02", "headingtext03", "headingtext04"];

  const onSelectMedia = (index) => (media) => {
    setAttributes({
      [mediaAttributes[index]]: media.id,
      [mediaURLAttributes[index]]: media.url,
    });
  };

  const onRemoveMedia = (index) => () => {
    setAttributes({
      [mediaAttributes[index]]: null,
      [mediaURLAttributes[index]]: null,
    });
  };

  const onChangeHeading = (index) => (newHeading) => {
    setAttributes({ [headingAttributes[index]]: newHeading });
  };

  const onChangeHeadingtext = (index) => (newHeadingtext) => {
    setAttributes({ [headingtextAttributes[index]]: newHeadingtext });
  };

  return (
    <section id="numbar" {...useBlockProps()}>
      <div className="numbar">
        <div className="container">
          <div className="numbar__inner">
            <div className="row">
              <div className="col">
                <div className="numbar__inner_details">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div className="numbar__inner_box" key={index}>
                      <div className="numbar__inner_box--image">
                        <MediaUploadCheck>
                          <MediaUpload
                            onSelect={onSelectMedia(index)}
                            allowedTypes={["image"]}
                            value={attributes[mediaAttributes[index]]}
                            render={({ open }) => (
                              <div>
                                {!attributes[mediaAttributes[index]] && (
                                  <Button onClick={open} isDefault>
                                    {__("Select Media", "your-theme")}
                                  </Button>
                                )}
                                {attributes[mediaAttributes[index]] && (
                                  <div>
                                    <img
                                      src={attributes[mediaURLAttributes[index]]}
                                      alt={__("Selected Media", "your-theme")}
                                    />
                                    <Button onClick={open} isDefault>
                                      {__("Replace Media", "your-theme")}
                                    </Button>
                                    <Button
                                      onClick={onRemoveMedia(index)}
                                      isLink
                                      isDestructive
                                    >
                                      {__("Remove Media", "your-theme")}
                                    </Button>
                                  </div>
                                )}
                              </div>
                            )}
                          />
                        </MediaUploadCheck>
                      </div>
                      <div className="numbar__inner_box--detail">
                        <div className="numbar__inner_box--detail-digit">
                          <RichText
                            tagName="h3"
                            value={attributes[headingAttributes[index]]}
                            onChange={onChangeHeading(index)}
                            placeholder={__("Enter heading text...", "your-theme")}
                          />
                        </div>
                        <div className="numbar__inner_box--detail-text">
                          <RichText
                            tagName="p"
                            value={attributes[headingtextAttributes[index]]}
                            onChange={onChangeHeadingtext(index)}
                            placeholder={__("Enter text...", "your-theme")}
                          />
                        </div>
                      </div>
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