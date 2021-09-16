
import './App.css';
import Header from './components/Header/Header.js'
import Landing from './components/Landing'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import DetailAnime from './components/Details/Details';

function App() {
  return (

    <div className='appContainer'>
      <Route path="/" component={Header}/>
      <Route exact path="/landing" component={Landing}/>
      <Route path="/details/:animeID" children={<DetailAnime />} />
    </div>


  );
}

export default App;
