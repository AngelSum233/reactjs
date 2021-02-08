import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch 
} from 'react-router-dom'

const Example3 = ()=>{
    return(
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/home'>home</Link>
            </li>
            <li>
              <Link to='/about'>about</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/about"><Abouts /></Route>
          </Switch>
        </div>
      </Router>
    )
  }

const Home = ()=>{
  return(
    <div>home</div> 
  )
}

const Abouts = ()=>{
  let { path, url} = useRouteMatch()
  return(
    <div>
      <h2>About</h2>
      <ul>
        <li>
          <Link to={`${url}/about1`}>about1</Link>
        </li>
        <li>
          <Link to={`${url}/about2`}>about2</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>qingxuanze</h3>
        </Route>
        <Route path={`${path}/:aboutid`}>
          <About />
        </Route>
      </Switch>
    </div>
  )
}

const About = ()=>{
  let {aboutid} = useParams()
  return(
    <div>
      <h3>{aboutid}</h3>
    </div>
  )
}

export default Example3
