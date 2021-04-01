import React from "react";
import { Card, Grid, Image } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import UpdateAmbassadorModal from "../../Modals/UpdateAmbassadorModal";
import "./StudentCard.css";

const AmbassadorCard = ({ profile, ...rest }) => {
  const {
    firstName,
    lastName,
    email,
    languagesSpoken,
    isActive,
    _id,
  } = profile;
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

  return (
    <Card
      fluid
      centered
      color="black"
      className={isActive ? "" : "inactiveText"}
      {...rest}
    >
      <Card.Content>
        <Grid padded="vertically">
          <Grid.Row>
            <Grid.Column width={2}>
              <div className="AvatarColumn">
                <Image
                  src={"https://robohash.org/" + profile._id + ".png/?set=set1"}
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

            <Grid.Column width={3} verticalAlign="middle">
              <h5>Languages Spoken</h5>
              <p>{languagesSpoken ? languagesSpoken.join(", ") : "English"}</p>
            </Grid.Column>
            <Grid.Column width={2} verticalAlign="middle"></Grid.Column>
            <Grid.Column width={2} verticalAlign="middle">
              <div className="AvatarColumn">
                <div className={isActive ? "status active" : "status inactive"}>
                  {isActive ? "  Active  " : "  Inactive  "}
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width={1} verticalAlign="middle">
              <UpdateAmbassadorModal profile={profile} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  );
};

export default AmbassadorCard;
