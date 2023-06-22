import { RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const { heading, content, editorURL,mediaURL } = attributes;

  return (
    <section id="work-process">
      <div className="work-process">
        <div className="container">
          <div className="work-process__inner">
            <div className="row">
              <div className="col">
                <div className="work-process__inner_heading">
                  <RichText.Content tagName="h4" value={heading} />
                </div>
                <div className="work-process__inner_text">
                  <RichText.Content tagName="p" value={content} />
                </div>
                <div className="work-process__inner_video">
                  <img src={ mediaURL } />
                  <iframe src={editorURL } ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}