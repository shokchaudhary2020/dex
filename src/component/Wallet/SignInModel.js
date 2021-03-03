import React from 'react'
import './model.css';


export default function SignIn() {
  return (
    <div>
      <div id="signinModal" className="modal">
        <div id="modal-content" className="modalBody">
          <div className="modal-header">
            <h2 className="modal-heading">Bank Transfer</h2>
            <hr/>
          </div>
          <div className="modal-body">
            <div className="signin-modal">
              <form action="post">
                <div className="signin-option">
                  <label htmlFor="username-signin" className="labels">Account Number</label>
                  <input type="text" id="username-signin" placeholder="Enter Account Number" required/>
                </div>
                <div className="signin-option">
                  <label htmlFor="username-signin" className="labels">Account Number</label>
                  <input type="text" id="username-signin" placeholder="Enter Account Number" required/>
                </div>
                <div className="signin-option">
                  <label htmlFor="password-signin" className="labels">Account Number</label>
                  <input type="text" id="password-signin" placeholder="Enter Account Number" required/>
                </div>
                <div className="signin-option">
                  <label htmlFor="password-signin" className="labels">IFSC Code</label>
                  <input type="text" id="password-signin" placeholder="Enter IFSC Code" required/>
                </div>
                <div className="signin-option">
                  <label htmlFor="password-signin" className="labels">Party Name</label>
                  <input type="text" id="password-signin" placeholder="Enter Organisation  Number" required/>
                </div>
                <div className="signin-option">
                  <label htmlFor="password-signin" className="labels"> Mobile Number  </label>
                  <input type="text" id="password-signin" placeholder="Enter Mobile Number" required/>
                </div>
                <div className="signin-option">
                  <label htmlFor="password-signin" className="labels">Amount</label>
                  <input type="text" id="password-signin" className="bank-amount" placeholder="Enter Amount to Transfer" required/>
                </div>
               <div className="signin-option">
          <button className="signin-button" id="continue" type="submit">Continue</button>
        </div>
              </form>
                <div className="signin-option success-transfer">
                  <button className="signin-button" id="failed-suceed" type="submit"></button>
                </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
