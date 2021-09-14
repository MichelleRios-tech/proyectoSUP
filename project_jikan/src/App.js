
import './App.css';
import Header from './components/Header/Header.js'
import Landing from './components/Landing'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <div className='appContainer'>
      <Route path="/" component={Header}/>
      <Route exact path="/landing" component={Landing}/>
    </div>


  );
}

export default App;
