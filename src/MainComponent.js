import {Route , Switch} from 'react-router-dom';
import {PaymentOption, Login, RegisterUser} from './component';
import React from 'react'



export default function MainComponent() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Login}/>

      </Switch>
    </main>
  )
}
