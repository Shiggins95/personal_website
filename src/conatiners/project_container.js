import React, { createRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { projects } from '../data/data';
import '../styles/project_container.css';
import ShowcaseComponent from '../components/display/showcase';
import GithubSVG from '../assets/github_svg';
import ProjectDescription from '../components/project/project_description';

const ProjectContainer = props => {
  const { projectId } = props;
  const project = projects.filter(proj => {
    return proj.id.toString() === projectId.toString();
  })[0];
  const { title, url_front, url_back, url_live } = project;
  const createLink = (url, label) => {
    const githubLink = url ? url.indexOf('github') !== -1 : null;
    return url ? (
      <div className="url_link">
        <p>{label}</p>
        <a target="_blank" href={url} rel="noopener noreferrer">
          {githubLink ? (
            <GithubSVG width="40px" height="40px" />
          ) : (
            <img src={project.logo_title} alt="link to live demo" />
          )}
        </a>
      </div>
    ) : null;
  };
  const backendLink = createLink(url_back, 'Java Backend: ');
  const frontendLink = createLink(url_front, 'React Frontend: ');
  const liveDemoLink = createLink(url_live, 'Live Demo: ');
  const thisWebsite = title === 'Personal Website';
  const [loaded, setLoaded] = useState(false);
  const anchorRef = createRef();
  useEffect(() => {
    if (loaded === false) {
      anchorRef.current.scrollIntoView({
        behavior: 'auto',
        block: 'start'
      });
      document.title = 'Stephen Higgins | ' + project.title;
      setLoaded(true);
    }
  }, [loaded, anchorRef]);
  return (
    <div id="project_container">
      <div id="scroll_anchor" ref={anchorRef} />
      <div className="inner_container">
        <div className="details">
          <ProjectDescription {...project} />
        </div>
        <div className="links">
          <h1>View source code and Live demo</h1>
          {backendLink}
          {frontendLink}
          {liveDemoLink}
          {!thisWebsite ? <p>**Apps are hosted on Heroku so can take a minute to load. Please wait**</p> : null}
        </div>

        <div className="image">
          <ShowcaseComponent images={project.images} />
        </div>
      </div>
    </div>
  );
};

ProjectContainer.propTypes = {
  projectId: PropTypes.string
};

export default ProjectContainer;
