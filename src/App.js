import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import Project from './components/Project';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer'



import './App.css';

const Home = () => <span>Home</span>;

const App = () => (
  <MemoryRouter>
    <Header />
    <Container className="p-3">
      <h2>
        {/* Current Page is{' '} */}
        <Switch>
          <Route path="/project">
            <Project /> 
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </h2>
      <h2>
        Navigate to{' '}
        <ButtonToolbar className="custom-btn-toolbar">
          <LinkContainer to="/">
            <Button>Home</Button>
          </LinkContainer>
          <LinkContainer to="/project">
            <Button>Projects</Button>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Button>Contact</Button>
          </LinkContainer>
        </ButtonToolbar>
        <Footer/>
      </h2>
    </Container>
  </MemoryRouter>




);

export default App;
