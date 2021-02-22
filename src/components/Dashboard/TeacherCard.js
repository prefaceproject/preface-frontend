import React from "react";
import { Card, Grid, Image, Label } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import "./StudentCard.css";

const TeacherCard = ({ profile }) => {
  const { firstName, lastName, email, _id } = profile;
  let history = useHistory();

  const pretifyName = (f, l) => {
    if (!f && !l) {
      return "Name not available";
    }

    let string = "";

    if (f && f.length > 0) {
      string += f;
    }

    if (l && l.length > 0) {
      string += " ";
      string += l;
    }

    return string;
  };

  const toSessions = () => {
    history.push(`/ambassadors/${_id}/`);
  };

  return (
    <Card fluid centered color="black" onClick={toSessions}>
      <Card.Content>
        <Grid padded="vertically">
          <Grid.Row>
            <Grid.Column width={2}>
              <div className="AvatarColumn">
                <Image
                  src={"https://robohash.org/" + profile._id + ".png/?set=set3"}
                ></Image>
              </div>
            </Grid.Column>
            <Grid.Column width={3} verticalAlign="middle">
              <h5>Name</h5>
              <p>{pretifyName(firstName, lastName)}</p>
            </Grid.Column>
            <Grid.Column width={3} verticalAlign="middle">
              <h5>E-mail Address</h5>
              <p>{email}</p>
            </Grid.Column>
            <Grid.Column width={5} verticalAlign="middle"></Grid.Column>
            <Grid.Column width={3} verticalAlign="middle">
              <div className="AvatarColumn">
                <Label color="orange">Details</Label>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  );
};

export default TeacherCard;
