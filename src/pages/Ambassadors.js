import React from "react";
import Layout from "../components/Layout";
import CardContainer from "../components/CardContainer";
import AmbassadorCard from "../components/Dashboard/AmbassadorCard";

const Ambassadors = () => {
  const cards = students.map((student) => {
    return <StudentCard student={student} key={student._id}></StudentCard>;
  });

  return (
    <>
      <Layout>
        <div style={{ height: "100%" }}>
          <h2>Ambassadors</h2>
          <CardContainer
            title={"List of participating ambassadors"}
            cards={cards}
          ></CardContainer>
        </div>
      </Layout>
    </>
  );
};

export default Ambassadors;
