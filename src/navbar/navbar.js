import React from 'react';
import PropTypes from 'prop-types';
import { updateNav } from '../redux/actions';
import { useDispatch } from 'react-redux';
import '../styles/navbar.css';
import NavbarLink from '../components/links/navbar_link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import GithubSVG from '../assets/github_svg';
import LinkedInSVG from '../assets/linkedin_svg';

const NavBar = props => {
  const linkedinURL = 'https://www.linkedin.com/in/stephen-higgins-3536ba17a/';
  const githubURL = 'https://github.com/Shiggins95';
  const dispatch = useDispatch();
  const showMenu = () => {
    dispatch(updateNav());
  };
  return (
    <div id="navbar">
      <FontAwesomeIcon icon={faBars} className={`fa_menu_bars`} onClick={showMenu} />
      <div className="links">
        <a target="_blank" href={githubURL} rel="noopener noreferrer">
          <GithubSVG width="40px" height="40px" />
        </a>
        <a target="_blank" href={linkedinURL} rel="noopener noreferrer">
          <LinkedInSVG width="40px" height="40px" />
        </a>
      </div>
      <NavbarLink url="/" content="HOME" />
      <NavbarLink url="/contact" content="CONTACT" />
      <NavbarLink url="/projects" content="PROJECTS" />
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
