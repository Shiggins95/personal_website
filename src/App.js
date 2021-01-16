import React, { createRef, Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './navbar/navbar.js';
import HomeContainer from './conatiners/home_container.js';
import ContactContainer from './conatiners/contact_container';
import ProjectContainer from './conatiners/project_container';
import ProjectsContainer from './conatiners/projects_container';
import './styles/app.css';
import { useSelector } from 'react-redux';
import ExperienceComponent from './components/display/experience';
import FooterComponent from './footer/footer';
import { NoMatch } from './conatiners/no_match';

function App() {
  const display = useSelector(state => state.nav);
  const navClass = display ? 'show' : 'hidden';
  const ref = createRef();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (loaded === false) {
      ref.current.scrollIntoView();
      setLoaded(true);
    }
  }, [ref, loaded]);
  return (
    <Router>
      <div id="whole_container" ref={ref}>
        <div id="nav" className={navClass}>
          <NavBar />
        </div>
        <div id="body">
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <HomeContainer reactRef={ref} />;
              }}
            />
            <Route
              exact
              path="/contact"
              component={() => {
                return <ContactContainer reactRef={ref} />;
              }}
            />
            <Route exact path="/projects" component={ProjectsContainer} reactRef={ref} />
            <Route
              exact
              path="/project/:id"
              render={props => {
                const { id } = props.match.params;
                return <ProjectContainer projectId={id} reactRef={ref} />;
              }}
            />
            <Route component={NoMatch} />
          </Switch>
          <FooterComponent />
        </div>
      </div>
    </Router>
  );
}

export default App;
