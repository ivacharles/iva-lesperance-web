import React from 'react';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home'
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <Container fluid="md">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
