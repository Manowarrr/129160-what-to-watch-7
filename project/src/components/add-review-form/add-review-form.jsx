import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {addComment} from '../../store/api-actions';

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 400;
const STARS_COUNT = 10;

function AddReviewForm({filmId}) {
  const dispatch = useDispatch();
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const isDisabled = rating === 0 || reviewText.length < MIN_COMMENT_LENGTH || reviewText.length > MAX_COMMENT_LENGTH;

  function handleRatingChange(evt) {
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

  const inputs = [...Array(STARS_COUNT)].map((_, index) => {
    const id = STARS_COUNT - index;

    return (
      <React.Fragment key={id}>
        <input
          id={`star-${id}`}
          className="rating__input"
          type="radio"
          name="rating"
          value={id}
          onChange={handleRatingChange}
        />
        <label
          className="rating__label"
          htmlFor={`star-${id}`}
        >Rating {index}
        </label>
      </React.Fragment>
    );
  });

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
            {inputs}
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
