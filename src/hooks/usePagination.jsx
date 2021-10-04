import React, { useState } from "react";

export const usePagination = ({ itemsPerPage, totalItems, paginate }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const SetThePage = (number, i) => {
        paginate(number);
        setCurrentIndex(i);
    };
    return (
        <nav className="pagination__wrapper">
            <ul className="pagination__list">
                {pageNumbers.map((number, index) => {
                    return (
                        <li
                            className={
                                index === currentIndex
                                    ? "pagination__list-item-activated"
                                    : "pagination__list-item"
                            }
                            key={number}
                        >
                            <span onClick={() => SetThePage(number, index)}>
                                {number}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
