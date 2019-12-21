import React from 'react';

function Modal(props) {
  var component = <div className="disclaimer">
  DISCLAIMER: This application is for demonstration purposes only. None of the items on this website are actually
    for sale at this location. No transactions will be processed. Please do not enter any personal information
    while using the website.
    <button
      className= "btn disclaim"
      onClick={() => props.verifyDisclaimer()}> By clicking this button, I acknowledge the above statement
    </button>
  </div>;
  return (
    component
  );
}
export default Modal;
