import './App.css';
import Search from './Pages/Search'
import Quiz from './components/Quiz';
import Materials from './upload/Materials';
import Volunteer from './Pages/Volunteer'
import Card from './Cards/Cards';
import { BrowserRouter as  Router,Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={Card}/>
      <Route exact path='/search' component={Search}/>
      <Route exact path='/quiz' component={Quiz}/>
      <Route exact path='/materials' component={Materials}/>
      <Route exact path='/volunteer' component={Volunteer}/>
    </Switch>
  </Router>
  );
}

export default App;
