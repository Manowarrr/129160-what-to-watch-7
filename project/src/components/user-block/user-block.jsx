import React from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {logout} from '../../store/api-actions';

function UserBlock({isSignedIn}) {
  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();

    dispatch(logout());
  };

  return (
    isSignedIn ?
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <Link onClick={handleClick} to="/" className="user-block__link">Sign out</Link>
        </li>
      </ul> :
      <ul className="user-block">
        <Link to="/login" className="user-block__link">Sign in</Link>
      </ul>
  );
}

UserBlock.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
};

export default UserBlock;
