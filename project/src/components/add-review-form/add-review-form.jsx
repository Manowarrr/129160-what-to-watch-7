import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {addComment} from '../../store/api-actions';

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 400;

function AddReviewForm({filmId}) {
  const dispatch = useDispatch();
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const isDisabled = rating === 0 || reviewText.length < MIN_COMMENT_LENGTH || reviewText.length > MAX_COMMENT_LENGTH;

  function handleRatingChange(evt) {
    evt.preventDefault();
    setRating(Number(evt.target.value));
  }

  function handleReviewTextChange(evt) {
    evt.preventDefault();
    setReviewText(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(addComment({
      id: filmId,
      rating: rating,
      comment: reviewText,
    }));
  };

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={handleSubmit}
      >
        <div className="rating">
          <div
            className="rating__stars"
          >
            {[...Array(10)].map((item, i, array) => {
              const index = array.length - i;
              return (
                <React.Fragment key={index}>
                  <input
                    className="rating__input"
                    id={`star-${index}`}
                    type="radio"
                    name="rating"
                    value={index}
                    onChange={handleRatingChange}
                    checked={index === rating}
                  />
                  <label className="rating__label" htmlFor={`star-${index}`}>{`Rating ${index}`}</label>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            minLength={MIN_COMMENT_LENGTH}
            maxLength={MAX_COMMENT_LENGTH}
            onChange={handleReviewTextChange}
          >
          </textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={isDisabled}
            >Post
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

AddReviewForm.propTypes = {
  filmId: PropTypes.number.isRequired,
};

export default AddReviewForm;
