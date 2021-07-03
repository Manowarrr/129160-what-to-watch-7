import React from 'react';
import PropTypes from 'prop-types';

function ShowmoreBtn({handleShowmoreBtnClick}) {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={handleShowmoreBtnClick}
      >
        Show more
      </button>
    </div>
  );
}

ShowmoreBtn.propTypes = {
  handleShowmoreBtnClick: PropTypes.func.isRequired,
};

export default ShowmoreBtn;
