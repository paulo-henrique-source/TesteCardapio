import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/home/home'
import Pedidos from '../components/home/pedidos'
import Cadastro from '../components/cadastro/index'

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/orders" component={Pedidos} />
        <Route exact path="/register" component={Cadastro} />
      </Switch>
    </BrowserRouter>
  )
}
