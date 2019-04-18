import React from 'react';
import './pagination.css';
import { ArrowLeft, ArrowRight } from '../icons';

export const Pagination = props => {
  const { goPageForward, goPageBack, totalItems, activePage } = props;

  const itemsPerPage = 16;
  const pagesAmount = () => Math.ceil(totalItems / itemsPerPage);

  return !isNaN(totalItems) ? (
    <section className="pagination">
      <div onClick={goPageBack}>
        {/* couldnt handle onclick directly*/}
        <ArrowLeft />
      </div>
      PAGE {activePage} OF {pagesAmount()}
      <div onClick={goPageForward}>
        {/* couldnt handle onclick directly*/}
        <ArrowRight />
      </div>
    </section>
  ) : null;
};
