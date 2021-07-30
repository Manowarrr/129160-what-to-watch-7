import React from 'react';
import PropTypes from 'prop-types';

function ToastMessage({message}) {
  return (
    <div className="sign-in__message">
      <p>{message}</p>
    </div>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.string,
};

export default ToastMessage;
