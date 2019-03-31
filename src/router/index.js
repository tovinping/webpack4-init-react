import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import asyncCom from './async'
import NotFound from '../pages/notFound'
import Layout from '../components/layout'
const Home = asyncCom(d => import('../pages/index'))
const PageA = asyncCom(d => import('../pages/a'))
const PageB = asyncCom(d => import('../pages/b'))
const routers = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pageA" component={PageA} />
      <Route path="/pageB" component={PageB} />
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>)

export default () => {
  return <Layout router={routers} />
}