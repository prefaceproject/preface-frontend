import React, { useEffect } from "react";
import { Card, Image } from "semantic-ui-react";
import { useDispatch, connect } from "react-redux";
import { useParams } from "react-router-dom";
import * as studentsActions from "../store/students/actions";

const StudentCard = ({ userId, students }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(studentsActions.fetchAllStudents({ _id: userId }));
  }, [userId, students.length]);

  const { id } = useParams();
  const [res] = students.filter((s) => id === s._id);
  if (!res) return null;
  const {
    firstName,
    grade,
    joinDate,
    lastName,
    languagesSpoken,
    readingLevel,
    school,
  } = res;

  const img = "https://robohash.org/" + id + ".png/?set=set4";
  return (
    <Card>
      <Image src={img} wrapped ui={false}/>
      <Card.Content>
        <Card.Header>{firstName + " " + lastName}</Card.Header>
        <Card.Meta>
          <span className="date">
            Joined in {new Date(joinDate).getFullYear()}
          </span>
        </Card.Meta>
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

const mapStateToProps = (state) => ({
  students: state.students.studentList,
});

export default connect(mapStateToProps)(StudentCard);
