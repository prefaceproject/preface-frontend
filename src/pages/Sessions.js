import React from "react";
import Layout from "../components/Layout";
import { Grid } from "semantic-ui-react";
import StudentCard from "../components/StudentCard";
import SessionList from "../components/sessions/SessionsList";

const Sessions = () => {
  return (
    <>
      <Layout>
        <Grid>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={2}>
            <div className="ui medium header"> Student Info</div>
            <StudentCard></StudentCard>
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={11}>
            <div className="ui medium header"> All Sessions </div>
            <SessionList></SessionList>
          </Grid.Column>
        </Grid>
      </Layout>
    </>
  );
};

export default Sessions;
