import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/showcase.css';
const ShowcaseComponent = props => {
  const { images } = props;
  const showcase = images[0];

  const [currentShowcase, setCurrentShowcase] = useState(showcase);
  const handleHover = event => {
    const index = event.target.getAttribute('data-index');
    setCurrentShowcase(images[index]);
  };
  return (
    <div id="showcase_container">
      <div className="main_image">
        <img src={currentShowcase.image} alt="main showcase" />
      </div>
      <div className="current_title">
        <h2>{currentShowcase.title}</h2>
      </div>
      <div className="selections">
        {images.map((image, index) => {
          return (
            <div className="selection_image" key={index}>
              <img src={image.image} alt="selection option" onMouseOver={handleHover} data-index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

ShowcaseComponent.propTypes = {
  images: PropTypes.array
};

export default ShowcaseComponent;
