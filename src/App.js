import Home from "./routers/Home";
// import Nav from './components/Nav';

// BrowserRouter 와 HashRouter 차이 -> #가 붙음
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Detail from "./routers/Detail";

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        {/* <Nav /> */}
        <Switch>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  )
}

export default App;