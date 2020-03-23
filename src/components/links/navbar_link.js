import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/links.css';
import { updateNav } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const NavbarLink = props => {
  const dispatch = useDispatch();
  const { url, content } = props;
  return (
    <Link to={url} id="navbar_link" onClick={() => dispatch(updateNav())}>
      <div id="navbar_link_content">{content}</div>
    </Link>
  );
};

NavbarLink.propTypes = {
  url: PropTypes.string,
  content: PropTypes.string
};

export default NavbarLink;
