import React , {createContext, useState} from 'react';

export const Context = createContext();

export const ContextProvider = (props)=>{
  const [state, setState] = useState({
    defaultPassword : "divya@2020",
    password: "" ,
    username: "",
    amount: '',
    defaultPin : '8476',
    defaultMoney : '4987',
    enteredMoney : '',
    pin : '4987',
    totalMoney : 180000000,
    addWallet : '' ,
    substractWallet : '',
    bankTransfer : false ,
    moneyWallet : false,
    status : "ready"
  })
  return (
    <Context.Provider value={[state , setState]}>
      {props.children}
    </Context.Provider>
  )
}
