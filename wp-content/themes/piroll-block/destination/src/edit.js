import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

const { Fragment } = wp.element;

export default function Edit({ attributes, setAttributes }) {
  const { slides } = attributes;

  const updateSlide = (index, field, value) => {
    const updatedSlides = [...slides];
    updatedSlides[index][field] = value;
    setAttributes({ slides: updatedSlides });
  };

  const addSlide = () => {
    const newSlide = { heading: 'New Slide', content: 'Content for New Slide' };
    setAttributes({ slides: [...slides, newSlide] });
  };

  const deleteSlide = (index) => {
    const updatedSlides = [...slides];
    updatedSlides.splice(index, 1);
    setAttributes({ slides: updatedSlides });
  };

  return (
    <Fragment>
      {slides && slides.map((slide, index) => (
        <div key={index} className="slide" { ...useBlockProps() }>
          <h3>Slide {index + 1}</h3>
          <div>
            <label>Heading:</label>
            <input
              type="text"
              value={slide.heading}
              onChange={(e) => updateSlide(index, 'heading', e.target.value)}
            />
          </div>
          <div>
            <label>Content:</label>
            <textarea
              value={slide.content}
              onChange={(e) => updateSlide(index, 'content', e.target.value)}
            ></textarea>
          </div>
          <button onClick={() => deleteSlide(index)}>Delete Slide</button>
        </div>
      ))}
      <button onClick={addSlide}>Add Slide</button>
    </Fragment>
  );
}