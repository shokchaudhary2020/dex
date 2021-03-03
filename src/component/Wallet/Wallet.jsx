import React, { useState, useContext } from "react";
import Amount from "./Amount";
import Camera from "./Camera";
import "./wallet.module.css";
import Box from "@material-ui/core/Box";
import BankMethod from "./BankMethod";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Verify from "./Verify";
import {Context} from '../Context/CreateContext';
import Status from "./Status";

export default function Wallet() {
  var [state, setState] = useContext(Context);
  return (
    <div className="totalPage">
      <div className="wallet-first">
        <div className="amount">
          <Amount />
        </div>
        {
          state.pin === state.defaultPin ?
          <div className="bankmethod">
            <BankMethod />
          </div>
          :
          <div className="verify">
            <Verify />
          </div>
        }
        {/* <div className="bankmethod"><BankMethod/></div> */}
        <div className="camera">
          <Camera />
        </div>
      </div>
      <div className="signinup flex justify-center">
        {
          state.addWallet ?
          <div className="signinCard m-5 ">
            <SignIn/>
          </div>
          : <> </>
        }
        {
          state.bankTransfer ?
          <div className="signupCard m-5">
            <SignUp />
          </div>
          :
          <div></div>
        }
        <div className="status">
        <Status/>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}
