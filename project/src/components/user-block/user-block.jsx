import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../store/api-actions';

function UserBlock({isSignedIn, logoff}) {
  return (
    isSignedIn ?
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <Link onClick={logoff} to="/" className="user-block__link">Sign out</Link>
        </li>
      </ul> :
      <ul className="user-block">
        <Link to="/login" className="user-block__link">Sign in</Link>
      </ul>
  );
}

UserBlock.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  logoff: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logoff() {
    dispatch(logout());
  },
});

export {UserBlock};

export default connect(null, mapDispatchToProps)(UserBlock);
