import './App.css';
import { Link, Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import Home from './components/Home';
import Notes from './components/Notes';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Todolist from './components/Todolist';
import Particle from './particlesConfig';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';

function App() {
  return (
    <Router>
       <Navbar></Navbar>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key}>
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route path="/todolist" component={Todolist} />
                  <Route path="/notes" component={Notes} />
                  <Route path="/calculator" component ={Calculator} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      <Particle />
    </Router>
  );
}

export default App;
