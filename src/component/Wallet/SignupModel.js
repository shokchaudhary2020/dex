import React from 'react'

export default function Signup() {
  return (
    <div>
      <div id="signinModal" className="modal">
        <div id="modal-content" className="modalBody">
          <div className="modal-header">
            <h2 className="modal-heading">Add Money Wallet </h2>
            <hr/>
          </div>
          <div className="modal-body">
            <div className="signup-modal">
              <form mathod="post">
                <div className="signup-option">
                  <label htmlFor="username-signup" className="labels">Account Number</label>
                  <input type="text" id="username-signup" placeholder="Enter Account Number" required/>
                </div>
                <div className="signup-option">
                  <label htmlFor="password-signup" className="labels">Account Number</label>
                  <input type="text" id="password-signup" placeholder="Enter Account Number" required/>
                </div>
                <div className="signup-option">
                  <label htmlFor="password-signup" className="labels">IFSC Code</label>
                  <input type="text" id="password-signup" placeholder="Enter IFSC Code" required/>
                </div>
                <div className="signup-option">
                  <label htmlFor="password-signup" className="labels">Party Name</label>
                  <input type="text" id="password-signup" placeholder="Enter Organisation  Number" required/>
                </div>
                <div className="signup-option">
                  <label htmlFor="password-signup" className="labels"> Mobile Number  </label>
                  <input type="text" id="password-signup" placeholder="Enter Mobile Number" required/>
                </div>
                <div className="signup-option">
                  <label htmlFor="password-signup" className="labels">Amount</label>
                  <input type="text" id="password-signup" className="bank-amount" placeholder="Enter Amount to Transfer" required/>
                </div>
               <div className="signup-option">
          <button className="signup-button" id="continue" type="submit">Continue</button>
        </div>
              </form>
                <div className="signup-option success-transfer">
                  <button className="signup-button" id="failed-suceed" type="submit"></button>
                </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
