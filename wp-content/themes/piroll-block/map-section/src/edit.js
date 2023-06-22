import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import {
  useBlockProps,
  InspectorControls,
} from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const {  editorURL } = attributes;
  const [showMedia, setShowMedia] = useState(true);
  const [showEditorURL, setShowEditorURL] = useState(false);


  const onRemoveMedia = () => {
    setAttributes({
      mediaID: null,
      mediaURL: null,
    });
    setShowMedia(true);
  };

  const toggleEditorURL = () => {
    setShowMedia(!showMedia);
    setShowEditorURL(!showEditorURL);
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Settings", "your-domain")}>
          <TextControl
            label={__("Editor URL", "your-domain")}
            value={editorURL}
            onChange={(value) => {
              setAttributes({ editorURL: value });
            }}
          />
        </PanelBody>
      </InspectorControls>
      <section id="work-process" {...useBlockProps()}>
        <div className="work-process">
          <div className="container">
            <div className="work-process__inner">
              <div className="row">
                <div className="col">
                  <div className="work-process__inner_heading">
                    <RichText
                      tagName="h4"
                      value={heading}
                      onChange={onChangeHeading}
                      placeholder={__(
                        "Enter banner heading text...",
                        "your-theme"
                      )}
                    />
                  </div>
                  <div className="work-process__inner_text">
                    <RichText
                      tagName="p"
                      value={content}
                      onChange={onChangeContent}
                      placeholder={__("Enter about content...", "your-theme")}
                    />
                  </div>
                  <div className="work-process__inner_video">
                    {mediaID && showMedia && (
                      <img
                        src={mediaURL}
                        alt={__("Selected Media", "your-domain")}
                        onClick={toggleEditorURL}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                    {showEditorURL && <iframe src={editorURL} />}
                    <MediaUploadCheck>
                      <MediaUpload
                        onSelect={onSelectMedia}
                        allowedTypes={["image"]}
                        value={mediaID}
                        render={({ open }) => (
                          <div>
                            {!mediaID && (
                              <Button onClick={open} isDefault>
                                {__("Select Media", "your-domain")}
                              </Button>
                            )}
                            {mediaID && (
                              <div>
                                {showMedia && (
                                  <Button onClick={toggleEditorURL}>
                                    {__("Show URL", "your-domain")}
                                  </Button>
                                )}
                                <Button
                                  onClick={onRemoveMedia}
                                  isLink
                                  isDestructive
                                >
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
    </>
  );
}