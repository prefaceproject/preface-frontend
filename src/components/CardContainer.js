import React, { useState } from "react";
import { Card, Pagination, Container } from "semantic-ui-react";

const CardContainer = ({ cards, title, cardsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const size = cards ? cards.length : 0;
  const totalPages = Math.ceil(size / cardsPerPage);
  const currentCards = cards.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  const handlePaginationChange = (e, { activePage }) =>
    setCurrentPage(activePage);

  return (
    <>
      <h3>{title}</h3>
      {currentCards && currentCards.length > 0 ? (
        <>
          <Card.Group>
            {currentCards && currentCards.length > 0 ? (
              currentCards
            ) : (
              <p>Nothing to see here..</p>
            )}
          </Card.Group>
          <br />
          <Container textAlign="center">
            <Pagination
              defaultActivePage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePaginationChange}
            />
          </Container>
        </>
      ) : (
        "Nothing to see here.."
      )}
      <br />
    </>
  );
};

export default CardContainer;
