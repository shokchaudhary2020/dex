import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import styles from './Header.module.css';
import cx from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import {Button} from 'antd';
import {Link} from 'react-router-dom';
import {useState} from 'react';

function Header() {
  return (<nav className="flex items-center bg-gray-800 flex-wrap">
    <div className="flex items-center h-10 w-full p-1 m-6 bg-gray-800 justify-between bg-white">
      {/* <button><MenuIcon/></button> */}
      <div className="flex flex-col">
        <img src={require("./wallet-svgrepo-com.svg").default} alt="wallet-image" className="h-5"/>
        <span className="text-white">Rahi Wallet</span>
      </div>
      <li name="Home" className="rounded">
        <Tooltip title="Home" arrow="arrow">
          <Link to="/"><HomeIcon/></Link>
        </Tooltip>
      </li>
      <li name="register" className="rounded">
        <Tooltip title="Register User" arrow="arrow">
          {/* <Link to="/registration"><PersonAddIcon/></Link> */}
          <Link to="/"><PersonAddIcon/></Link>
        </Tooltip>
      </li>
      <li name="payment" className="rounded">
        <Tooltip title="Payment Options" arrow="arrow">
          {/* <Link to="/payment"><PaymentIcon/></Link> */}
          <Link to="/"><PaymentIcon/></Link>
        </Tooltip>
      </li>
      <li name="wallet" className="rounded">
        <Tooltip title="Rahi Wallet" arrow="arrow">
          <Link to="/"><AccountBalanceWalletIcon/></Link>
          {/* <Link to="/wallet"><AccountBalanceWalletIcon/></Link> */}
        </Tooltip>
      </li>
      <li name="login" className="rounded">
        <Tooltip title="Login for Owner" arrow="arrow">
          {/* <Link to="/login"><SupervisorAccountIcon/></Link> */}
          <Link to="/"><SupervisorAccountIcon/></Link>
        </Tooltip>
      </li>
    </div>
  </nav>)
}
export default Header;
