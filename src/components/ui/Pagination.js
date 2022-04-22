import React from "react";

const Pagination = ({ totalPages, currentPage = 1, handleChangePage }) => {
  const handleNext = () => {
    handleChangePage(currentPage + 1);
  };

  const handlePrev = () => {
    handleChangePage(currentPage - 1);
  };

  const handleClick = (currentPage) => {
    handleChangePage(currentPage);
  };

  if (totalPages <= 5) {
    const btns = [];

    for (let i = 1; i <= totalPages; i++) {
      btns.push(
        <button
          className={`${i === currentPage ? "active" : ""}`}
          onClick={() => handleClick(i)}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="pagination-container">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          {"<"}
        </button>
        {btns}
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          {">"}
        </button>
      </div>
    );
  }
  if (currentPage <= 5) {
    const btns = [];

    for (let i = 1; i <= 5; i++) {
      btns.push(
        <button
          className={`${i === currentPage ? "active" : ""}`}
          onClick={() => handleClick(i)}
        >
          {i}
        </button>
      );
    }
    return (
      <div className="pagination-container">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          {"<"}
        </button>
        {btns}
        <button className="rest-btn">...</button>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          {">"}
        </button>
      </div>
    );
  }

  if (currentPage === 6) {
    const btns = [];

    for (let i = 1; i <= 5; i++) {
      btns.push(<button onClick={() => handleClick(i)}>{i}</button>);
    }
    return (
      <div className="pagination-container">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          {"<"}
        </button>
        {btns}
        <button className="active">6</button>
        {totalPages >= currentPage + 1 ? (
          <button onClick={() => handleClick(currentPage + 1)}>
            {currentPage + 1}
          </button>
        ) : null}
        {totalPages >= currentPage + 2 ? (
          <button onClick={() => handleClick(currentPage + 2)}>
            {currentPage + 2}
          </button>
        ) : null}
        {totalPages === currentPage + 3 ? (
          <button onClick={() => handleClick(currentPage + 3)}>
            {currentPage + 3}
          </button>
        ) : totalPages > currentPage + 3 ? (
          <button className="rest-btn">...</button>
        ) : null}
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          {">"}
        </button>
      </div>
    );
  }

  if (currentPage === 7 && totalPages === 7) {
    const btns = [];
    for (let i = 1; i <= 7; i++) {
      btns.push(
        <button
          className={`${i === currentPage ? "active" : ""}`}
          onClick={() => handleClick(i)}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="pagination-container">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          {"<"}
        </button>
        {btns}
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          {">"}
        </button>
      </div>
    );
  }

  if (currentPage === totalPages - 1) {
    return (
      <div className="pagination-container">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          {"<"}
        </button>
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button className="rest-btn">...</button>
        <button onClick={() => handleClick(currentPage - 3)}>
          {currentPage - 3}
        </button>
        <button onClick={() => handleClick(currentPage - 2)}>
          {currentPage - 2}
        </button>
        <button onClick={() => handleClick(currentPage - 1)}>
          {currentPage - 1}
        </button>
        <button className="active">{currentPage}</button>
        <button onClick={() => handleClick(currentPage + 1)}>
          {currentPage + 1}
        </button>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          {">"}
        </button>
      </div>
    );
  }

  if (currentPage === totalPages) {
    return (
      <div className="pagination-container">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          {"<"}
        </button>
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button className="rest-btn">...</button>
        <button onClick={() => handleClick(currentPage - 4)}>
          {currentPage - 4}
        </button>
        <button onClick={() => handleClick(currentPage - 3)}>
          {currentPage - 3}
        </button>
        <button onClick={() => handleClick(currentPage - 2)}>
          {currentPage - 2}
        </button>
        <button onClick={() => handleClick(currentPage - 1)}>
          {currentPage - 1}
        </button>
        <button className="active">{currentPage}</button>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          {">"}
        </button>
      </div>
    );
  }

  return (
    <div className="pagination-container">
      <button onClick={handlePrev} disabled={currentPage === 1}>
        {"<"}
      </button>
      <button onClick={() => handleClick(1)}>1</button>
      <button onClick={() => handleClick(2)}>2</button>
      <button className="rest-btn">...</button>
      <button onClick={() => handleClick(currentPage - 2)}>
        {currentPage - 2}
      </button>
      <button onClick={() => handleClick(currentPage - 1)}>
        {currentPage - 1}
      </button>
      <button className="active">{currentPage}</button>
      <button onClick={() => handleClick(currentPage + 1)}>
        {currentPage + 1}
      </button>
      <button onClick={() => handleClick(currentPage + 2)}>
        {currentPage + 2}
      </button>
      {totalPages > currentPage + 2 && (
        <button className="rest-btn">...</button>
      )}
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
