import React from "react";
import { Card, Grid, Image, Label } from "semantic-ui-react";
import { useHistory } from 'react-router-dom';
import "./StudentCard.css";

const StudentCard = ({ student }) => {
  const { firstName, lastName, sessions, school } = student;
  let history = useHistory();

  const toSessions = () => {
    history.push("/sessions");
  }

  return (
    <Card fluid centered color="black" onClick={toSessions}>
      <Card.Content>
        <Grid>
          <Grid.Row>
            <Grid.Column width={1}>
              <div className="AvatarColumn">
                <Image
                  src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                  avatar
                ></Image>
              </div>
            </Grid.Column>
            <Grid.Column width={3}>
              {firstName + " " + lastName}
              <br />
              {school}
            </Grid.Column>
            <Grid.Column width={3}>
              Number of Sessions
              <br />
              {sessions.length}
            </Grid.Column>
            <Grid.Column width={6}>
              Last Session
              <br />
              Some date here
            </Grid.Column>
            <Grid.Column width={3}>
              <div className="AvatarColumn">
                <Label color="green">Status</Label>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  );
};

export default StudentCard;
