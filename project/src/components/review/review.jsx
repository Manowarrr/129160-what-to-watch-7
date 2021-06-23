import React from 'react';
import reviewProp from './review.prop';

function Review({review}) {
  const reviewDate = new Date(review.date).toLocaleDateString(
    'en-US',
    { month: 'long', day: 'numeric', year: 'numeric'});

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime="2016-12-20">{reviewDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

Review.propTypes = {
  review: reviewProp,
};

export default Review;
