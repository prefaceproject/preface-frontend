import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  Pagination,
  Container,
  Input,
  Select,
  Segment,
} from "semantic-ui-react";
import { defaultLimit } from "../../constants";
import "./Pagination.css";

const PaginationContainer = ({
  children,
  fetchResults,
  retrieveResults,
  getTotal,
  sortByOptions = [],
  getCacheValidStatus,
}) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState(sortByOptions[0].value);
  const [sortOrder, setSortOrder] = useState(-1);
  const [searchTerm, setSearchTerm] = useState("");

  const results = useSelector(retrieveResults);
  const total = useSelector(getTotal);
  const isCacheValid = useSelector(getCacheValidStatus);

  const sortOrderOptions = [
    { key: "asc", value: 1, text: "Ascending" },
    { key: "dsc", value: -1, text: "Descending" },
  ];

  const handlePaginationChange = (_e, { activePage }) => setPage(activePage);

  const handleSearchChange = (_e, { value }) => {
    setSearchTerm(value);
    setPage(1);
  };

  const handleSortByChange = (_e, { value }) => {
    setSortBy(value);
    setPage(1);
  };

  const handleSortOrderChange = (_e, { value }) => {
    setSortOrder(value);
    setPage(1);
  };

  const sendRequest = () => {
    const options = {
      page,
      sortOrder,
      sortBy,
      searchTerm,
    };
    dispatch(fetchResults(options));
  };

  useEffect(() => {
    sendRequest();
  }, [page, sortOrder, sortBy, searchTerm]);

  useEffect(() => {
    if (!isCacheValid) sendRequest();
  }, [isCacheValid]);

  return (
    <>
      <Segment className="search-sort">
        <span>
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </span>
        <span>
          <Select
            value={sortBy}
            options={sortByOptions}
            onChange={handleSortByChange}
          />
          <Select
            value={sortOrder}
            options={sortOrderOptions}
            onChange={handleSortOrderChange}
          />
        </span>
      </Segment>
      <Card.Group>{children({ results })}</Card.Group>
      <br />
      <Container textAlign="center">
        <Pagination
          totalPages={Math.ceil(total / defaultLimit)}
          activePage={page}
          onPageChange={handlePaginationChange}
        />
      </Container>
    </>
  );
};

export default PaginationContainer;
