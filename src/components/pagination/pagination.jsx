import React from 'react';
import './pagination.css';
import { ArrowLeft, ArrowRight } from '../icons';
import { ActivePageLoader } from '../loader/active-page-loader';

export const Pagination = ({
  goPageForward,
  goPageBack,
  totalItems,
  activePage,
  itemsPerPage,
  loaded,
}) => {
  const pagesAmount = () => Math.ceil(totalItems / itemsPerPage);

  return !isNaN(totalItems) ? (
    <section className="pagination">
      <button
        onClick={goPageBack}
        disabled={activePage <= 1}
        className="pagination__go-back-button"
      >
        <ArrowLeft />
      </button>
      <span className="pagination__data">
        PAGE {loaded ? activePage : <ActivePageLoader />} OF {pagesAmount()}
      </span>
      <button
        onClick={goPageForward}
        disabled={activePage === pagesAmount()}
        className="pagination__go-forward-button"
      >
        <ArrowRight />
      </button>
    </section>
  ) : null;
};
