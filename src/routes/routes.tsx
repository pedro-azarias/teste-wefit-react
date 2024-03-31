import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home/Home'
import EmptyCart from '../components/Cart/EmptyCart'
import Cart from '../components/Cart/Cart'
import Purchase from '../components/Purchase/Purchase'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/emptycart" exact component={EmptyCart} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/purchase" exact component={Purchase} />
    </Switch>
  )
}

export default Routes
