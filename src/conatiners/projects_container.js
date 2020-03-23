import React, { Component, createRef, useEffect, useState } from 'react';
import { projects } from '../data/data';
import ProjectComponent from '../components/project/project';
import PropTypes from 'prop-types';

import '../styles/projects.css';

const ProjectsContainer = props => {
  const [loaded, setLoaded] = useState(false);
  const ref = createRef();
  useEffect(() => {
    if (loaded === false) {
      ref.current.scrollIntoView({
        behavior: 'auto',
        block: 'start'
      });
      document.title = 'Stephen Higgins | My Projects';
      setLoaded(true);
    }
  }, [loaded, ref]);
  return (
    <div id="projects_container">
      <div className="projects_header">
        <h1>My Projects</h1>
      </div>
      <div className="projects">
        <div id="scroll_anchor" ref={ref} />
        {projects.map((project, index) => {
          return <ProjectComponent project={project} key={index} first={index === 0} reactRef={ref} />;
        })}
      </div>
    </div>
  );
};

ProjectsContainer.propTypes = {
  reactRef: PropTypes.object
};

export default ProjectsContainer;
