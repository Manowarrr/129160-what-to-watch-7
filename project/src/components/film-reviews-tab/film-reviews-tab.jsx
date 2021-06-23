import React from 'react';
import PropTypes from 'prop-types';
import reviewProp from '../review/review.prop';
import Review from '../review/review';

function FilmReviewsTab({reviews}) {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => <Review key={review.id} review={review}></Review>)}
      </div>
    </div>
  );
}

FilmReviewsTab.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export default FilmReviewsTab;
