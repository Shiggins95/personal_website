import React from 'react';
import PropTypes from 'prop-types';
import LinkComponent from '../links/link';
import '../../styles/project_description.css';

const ProjectDescription = props => {
  const { title, stack, description_s, description_f, time_estimate, frontend, id, renderLinks, full } = props;
  return (
    <div className="description">
      <div className="header">
        <h1>{title}</h1>
        <p>
          <span className="tech_span">Tech Stack: </span>
          {stack}
        </p>
      </div>
      <div className="body">
        <p>
          <span className="desc_span">Description: </span>
          {full && description_f ? description_f : description_s}
        </p>
        <p id="time_estimate">{time_estimate}</p>
        {renderLinks ? (
          <div className="links">
            {frontend}
            <LinkComponent url={`/project/${id}`} text="View Project" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

ProjectDescription.propTypes = {
  title: PropTypes.string,
  stack: PropTypes.string,
  description_s: PropTypes.string,
  description_f: PropTypes.string,
  time_estimate: PropTypes.string,
  frontend: PropTypes.object,
  full: PropTypes.bool
};

export default ProjectDescription;
