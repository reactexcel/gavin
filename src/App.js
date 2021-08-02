import './App.css'
import Home from './Pages/Home'
import Login from './components/Login';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
function App () {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/bill" component={Dashboard} />

    </Switch>
    </>
  )
}

export default App
