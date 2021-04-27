import React from 'react'
import { Container } from 'reactstrap'
import Navi from '../navi/Navi'
import Dashboard from './Dashboard'
import { Route, Switch } from 'react-router-dom'
import cartDetail from '../cart/cartDetail';


function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/product" exact component={Dashboard} />
        <Route path="/cart" exact component={cartDetail} />
      </Switch>
    </Container>
  );
}

export default App;
