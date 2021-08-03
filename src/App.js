import './App.css'
import Home from './Pages/Home'
import {Switch, Route} from 'react-router-dom';
import Billings from './Pages/Billings';
import Dashboard from './Pages/Dashboard';

function App () {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/bill" component={Billings} />
      <Route exact path="/dash" component={Dashboard} />

    </Switch>
    </>
  )
}

export default App
