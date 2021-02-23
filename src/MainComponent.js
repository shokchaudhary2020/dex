import {Route , Switch} from 'react-router-dom';
import {PaymentOption, Login} from './component';
import React from 'react'



export default function MainComponent() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/payment" component={PaymentOption}/>
        <Route exact path="/login" component={()=><h1>Original Roster</h1>}/>
      </Switch>
    </main>
  )
}
