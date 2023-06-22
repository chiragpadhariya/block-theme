import { useBlockProps } from "@wordpress/block-editor";
import "./style.scss";

export default function save({ attributes }) {
  return (
    <section {...useBlockProps.save()}>
      <div className="logos">
        <div className="container">
          <div className="logos__inner">
            <div className="row">
              <div className="col">
                <div className="logos__inner_box">
                  {[1, 2, 3, 4 ,5].map((index) => (
                    <div key={index}>
                      {attributes[`mediaID0${index}`] && (
                        <img
                          src={attributes[`mediaURL0${index}`]}
                          alt="Selected Media"
                        />
                      )}
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
