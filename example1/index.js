import React from 'react'
// BrowserRouter history模式
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const Example1 = ()=>{
  return(
    <Router>
      <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/dashboard'>Dashboard</Link>
            </li>
        </ul>
        {/* 下面的内容展示 */}
        <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/dashboard'>
                <Dashboard />
            </Route>
        </Switch>
      </div>
    </Router>
  )
}

const Home = ()=>{
  return(
    <div>Home</div>
  )
}
const About = ()=>{
  return(
    <div>About</div>
  )
}
const Dashboard = ()=>{
  return(
    <div>Dashboard</div>
  )
}
export default Example1
