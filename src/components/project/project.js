import React from 'react';
import PropTypes from 'prop-types';
import { displayProject } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import GithubSVG from '../../assets/github_svg';
import LinkComponent from '../links/link';
import ProjectDescription from './project_description';
import MobileOptimised from './mobile_optimised';

const ProjectComponent = props => {
  const { project } = props;
  const { url_front, id } = project;
  const display = useSelector(state => state.project);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(displayProject());
  };

  const getLink = urlObj => {
    const { url } = urlObj;
    return url ? (
      <a target="_blank" href={url} rel="noopener noreferrer">
        <GithubSVG width="40px" height="40px" />
      </a>
    ) : null;
  };

  const frontend = getLink({ url: url_front });
  const descriptionProps = { ...project, frontend, id, renderLinks: true };

  return (
    <div className="project_container" onClick={handleClick}>
      <MobileOptimised display={project.optimised} />
      <div className="contents">
        <ProjectDescription {...descriptionProps} />
      </div>
      <div className="showcase">
        <img src={project.image_title} alt="title" className="project_image" />
      </div>
    </div>
  );
};

ProjectComponent.propTypes = {
  project: PropTypes.object,
  first: PropTypes.bool,
  reactRef: PropTypes.object
};

export default ProjectComponent;
