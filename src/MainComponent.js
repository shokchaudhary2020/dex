import {Route , Switch} from 'react-router-dom';
import {PaymentOption, Login, RegisterUser, Wallet} from './component';
import React, {useContext} from 'react'




export default function MainComponent() {
  return (
    <main>
      {
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/registration" component={RegisterUser}/>
        <Route path="/payment" component={PaymentOption}/>
        <Route path="/wallet" component={Wallet}/>
      </Switch>
    }
    </main>
  )
}
