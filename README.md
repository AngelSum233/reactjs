# reactjs学习  

## route 
`有关路由的跳转,点击标题,内容发生改变.相关例子:example1`  

``` javascript
// 引入 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

// 在用的时候应该用Router将所有的内容包裹
<Router>
  <ul><li><a></a></li></ul>
//   变化的部分用Switch包裹
  <Switch>
    <Route path='/home'>
      <Home />
    </Route>
  </Switch>
</Router>
```
`也可以将路由单独放置在一个文件里面进行配置`
```javascript
const route = [
  {
    path: 'home',
    components: 'Home',
    name: '主页',
    exact: true,
  }
]
// 组件
<Switch>
{
  route.map((item,index)=>{
    <Route path={item.path} components={item.components} exact={item.exact} key={index}>
  })
}
</Switch>
```
## useParams()
`url的参数,相关例子:example2`  
在项目中主要用于地址栏和界面相关元素的显示
## useRouteMatch()
`套娃式路由跳转,相关例子:example3`
## Redirect
`重定向,相关例子:example4`
