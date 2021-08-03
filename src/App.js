import './App.scss'
import Home from './Pages/Home'
import { Switch, Route } from 'react-router-dom'
import Billings from './Pages/Billings'
import Dashboard from './Pages/Dashboard'
import Account from './Pages/Account'
import ReportSetting from './Pages/ReportSetting'
import Inbox from './Pages/Inbox'

function App () {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/bill' component={Billings} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/account' component={Account} />
        <Route exact path='/report' component={ReportSetting} />
        <Route exact path='/inbox' component={Inbox} />
      </Switch>
    </>
  )
}

export default App;
