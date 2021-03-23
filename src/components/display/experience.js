import React from 'react';
import PropTypes from 'prop-types';
import CssSVG from '../../assets/css_svg';
import HtmlSVG from '../../assets/html_svg';
import GithubSVG from '../../assets/github_svg';
import PostgrSQLSVG from '../../assets/psql_svg';
import ReactSVG from '../../assets/react_svg';
import VueSVG from '../../assets/vue_svg';
import JavaSVG from '../../assets/java_svg';
import NodeSVG from '../../assets/node_svg';
import SourceTreeSVG from '../../assets/sourcetree_svg';
import WebpackSVG from '../../assets/webpack_svg';
import '../../styles/svg.css';
import '../../styles/experience.css';

const ExperienceComponent = props => {
  return (
    <div id="experience_container">
      <div className="header">
        <h1>Experience & Learned Technologies</h1>
      </div>
      <div className="inner_container">
        <div className="experience_blurb">
          <p>
            Since my time leaving CodeClan I have used many different technologies and tools. I always aim to code at
            least an hour a day, after work, so that I am never stagnant with my development.
          </p>
          <p>
            I am constantly trying to pick up new frameworks and implement new libraries to help build personal
            projects. Below are only some of the technologies I have used.
          </p>
          <p>
            In addition to these, I have also used Unity and C# participate in multiple game jams, I have implemented
            JWTs (JSON Web Tokens) to help with authentication and I have also utilized the Stripe API for handling
            payments.
          </p>
          <p>I am keen to further develop my skills and keep progressing along in the Tech industry!</p>
        </div>
        <div className="language_logos">
          <CssSVG />
          <GithubSVG />
          <JavaSVG />
          <NodeSVG />
          <PostgrSQLSVG />
          <ReactSVG />
          <SourceTreeSVG />
          <WebpackSVG />
          <HtmlSVG />
          <VueSVG />
        </div>
      </div>
    </div>
  );
};

ExperienceComponent.propTypes = {};

export default ExperienceComponent;
