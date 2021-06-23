import React, {useState} from 'react';
import PropTypes from 'prop-types';
import filmCardProp from '../film-card/film-card.prop';
import reviewProp from '../review/review.prop';
import FilmOverviewTab from '../film-overview-tab/film-overview-tab';
import FilmDetailsTab from '../film-details-tab/film-details-tab';
import FilmReviewsTab from '../film-reviews-tab/film-reviews-tab';

const TABS = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

function FilmPageTabs({film, reviews}) {
  const [ active, setActive ] = useState(TABS.OVERVIEW);

  const openTab = (e) => setActive(e.target.dataset.tab);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(TABS).map((tab) => (
            <li
              className={`film-nav__item ${tab === active ? 'film-nav__item--active' : ''}`}
              key={tab}
            >
              <a
                className="film-nav__link"
                onClick={openTab}
                data-tab={tab}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {(active === TABS.OVERVIEW) && <FilmOverviewTab film={film}></FilmOverviewTab>}
      {(active === TABS.DETAILS) && <FilmDetailsTab film={film}></FilmDetailsTab>}
      {(active === TABS.REVIEWS) && <FilmReviewsTab reviews={reviews}></FilmReviewsTab>}

    </div>
  );
}

FilmPageTabs.propTypes = {
  film: filmCardProp,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export default FilmPageTabs;
