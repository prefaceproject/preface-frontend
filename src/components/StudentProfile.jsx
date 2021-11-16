import React from "react";
import { Card, Image, Loader } from "semantic-ui-react";

const StudentProfile = ({ student, id }) => {
  if (!student) return <Loader />;

  const { firstName, lastName, grade, readingLevel, school, languagesSpoken } =
    student;

  const img = "https://robohash.org/" + id + ".png/?set=set4";
  return (
    <Card>
      <div style={{ padding: "32px" }}>
        <Image src={img} wrapped ui={false} />
      </div>
      <Card.Content>
        <Card.Header>{firstName + " " + lastName}</Card.Header>
        <br />
        <div>
          <strong>Grade: </strong>
          {grade}
        </div>
        <div>
          <strong>Reading Level: </strong>
          {readingLevel}
        </div>
        <div>
          <strong>School: </strong>
          {school}
        </div>
        <div>
          <strong>Languages Spoken: </strong>
          {languagesSpoken.join(" ")}
        </div>
      </Card.Content>
    </Card>
  );
};

export default StudentProfile;
