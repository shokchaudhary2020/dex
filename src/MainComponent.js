import {Route , Switch} from 'react-router-dom';
import {PaymentOption, Login, RegisterUser, Wallet} from './component';
import React, {useContext} from 'react'




export default function MainComponent() {
  return (
    <main>
      {
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/registration" component={Login}/> 
        {/* RegisterUser PaymentOption Wallet*/}
        <Route path="/payment" component={Login}/>
        <Route path="/wallet" component={Login}/>
      </Switch>
    }
    </main>
  )
}
