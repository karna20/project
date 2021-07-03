import './App.css';
import Search from './Pages/Search'
import Quiz from './components/Quiz';
import Materials from './upload/Materials';
import Lecture from './Lecture/Lecture'
import Card from './Cards/Cards';
import studentCard from './student/Cards/studentCards'
import studentQuiz from './student/showQuiz'
import studentMaterial from './student/Materials'
import studentLecture from './student/showLecture'

import { BrowserRouter as  Router,Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
    <Switch>
      {/* <Route exact path='/' component={Card}/> */}
      {/* <Route exact path='/search' component={Search}/>
      <Route exact path='/quiz' component={Quiz}/>
      <Route exact path='/materials' component={Materials}/>
      <Route exact path='/lecture' component={Lecture}/> */}

      <Route exact path='/' component ={studentCard}/>
      <Route exact path='/Quiz' component ={studentQuiz}/>
      <Route exact path='/Lectures' component ={studentLecture}/>
      <Route exact path='/Materials' component ={studentMaterial}/>
    </Switch>
  </Router>
  );
}

export default App;
