import React from "react";

import AmbassadorCard from "../Cards/AmbassadorCard";
import { PaginationContainer } from "../../Pagination";
import { fetchAllAmbassadors } from "../../../store/user/actions";
import {
  getAllAmbassadors,
  getTotalAmbassadors,
  getAmbassadorCacheValid,
} from "../../../store/user/selectors";

const AmbassadorList = () => {
  const sortByOptions = [
    { key: "updated", value: "updatedAt", text: "Updated" },
    { key: "created", value: "createdAt", text: "Created" },
    { key: "first", value: "firstName", text: "First Name" },
    { key: "last", value: "lastName", text: "Last Name" },
    { key: "email", value: "email", text: "Email" },
    { key: "school", value: "school", text: "School" },
  ];

  return (
    <PaginationContainer
      fetchResults={fetchAllAmbassadors}
      retrieveResults={getAllAmbassadors}
      getTotal={getTotalAmbassadors}
      sortByOptions={sortByOptions}
      getCacheValidStatus={getAmbassadorCacheValid}
    >
      {({ results: ambassadors }) => {
        return (
          ambassadors &&
          ambassadors.map((ambassador) => {
            return <AmbassadorCard profile={ambassador} key={ambassador._id} />;
          })
        );
      }}
    </PaginationContainer>
  );
};

export default AmbassadorList;
