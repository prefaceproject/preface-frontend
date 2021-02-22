import React from "react";
import { Card, Grid, Image, Label } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import "./StudentCard.css";

const StudentCard = ({ student }) => {
  const { firstName, lastName, sessions, school, languagesSpoken } = student;
  let history = useHistory();

  console.log(student);

  const toSessions = () => {
    console.log("student._id", student._id);
    history.push(`/students/${student._id}/sessions`);
  };

  return (
    <Card fluid centered color="black" onClick={toSessions}>
      <Card.Content>
        <Grid padded="vertically">
          <Grid.Row>
            <Grid.Column width={2}>
              <div className="AvatarColumn">
                <Image
                  src={"https://robohash.org/" + student._id + ".png/?set=set4"}
                ></Image>
              </div>
            </Grid.Column>
            <Grid.Column width={3} verticalAlign="middle">
              <h5>{firstName + " " + lastName}</h5>
              <p>{school}</p>
            </Grid.Column>
            <Grid.Column width={3} verticalAlign="middle">
              <h5>Number of Sessions</h5>
              <p>{sessions.length}</p>
            </Grid.Column>
            <Grid.Column width={5} verticalAlign="middle">
              <h5>Languages Spoken</h5>
              <p>
                {languagesSpoken.length > 0
                  ? languagesSpoken.join(", ")
                  : "Languages can be added on student's profile"}
              </p>
            </Grid.Column>
            <Grid.Column width={3} verticalAlign="middle">
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
