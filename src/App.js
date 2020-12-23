import './App.css';
import Navbar from './components/navbar';
import {Switch, Route} from 'react-router-dom';
import Home from './components/pages/home';
import Links from './components/pages/link';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/link" exact component={Links} />
      </Switch>
    </>
  );
}

export default App;
