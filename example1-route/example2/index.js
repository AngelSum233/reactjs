import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom'

const Example2 = ()=>{
  return(
    <Router>
      <div>
        <h1>Example2</h1>
        <ul>
          <li>
            <Link to='/home'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/:id" children={<Child />}></Route>
        </Switch>
      </div>
    </Router>
  )
}

const Child = ()=>{
  const { id } = useParams();
  return(
    <div>
      <span>id: {id}</span>
    </div>
  )
}
export default Example2