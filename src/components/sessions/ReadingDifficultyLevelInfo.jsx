import React from "react";
import { Table } from "semantic-ui-react";

import "./ReadingDifficultyLevelInfo.css";

const ReadingDifficultyLevelInfo = () => (
  <div className="ReadingDifficultyLevelInfo">
    <h4 className="ReadingDifficultyLevelInfo__title">
      Determining Reading Comprehension Difficulty Level
    </h4>
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Grades K-2</Table.HeaderCell>
          <Table.HeaderCell>Grades 3-6</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell width="8">
            <strong>Fiction: </strong> Able to identify main characters,
            setting, ending, and details independently.
            <br />
            <br />
            <strong>Nonfiction: </strong>Able to identify main idea and
            supporting details independently. Able to identify 3 or more
            supporting details independently.
          </Table.Cell>
          <Table.Cell width="8">
            <strong>Fiction: </strong>Able to identify main characters, setting,
            problem, solution, ending, and details independently.
            <br />
            <br />
            <strong>Nonfiction: </strong>Able to identify main idea and
            supporting details independently. Able to identify 3 or more
            supporting details independently.
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>3</Table.Cell>
          <Table.Cell>
            <strong>Fiction: </strong>Able to identify main characters and
            ending independently; able to identify setting and details with some
            assistance.
            <br />
            <br />
            <strong>Nonfiction: </strong>
            Able to identify main idea independently; able to identify
            supporting details with some assistance. Able to add 1-2
            supporting details independently or with some assistance.
          </Table.Cell>
          <Table.Cell>
            <strong>Fiction: </strong> Able to identify main characters and
            ending independently; able to identify setting, problem, solution,
            and details with some assistance.
            <br />
            <br />
            <strong>Nonfiction: </strong>Able to identify main idea
            independently; able to identify supporting details with some
            assistance. Able to add 1-2 supporting details independently or with
            some assistance.
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>5</Table.Cell>
          <Table.Cell>
            <strong>Fiction: </strong>Unable to identify main characters or
            ending, even with some assistance.
            <br />
            <br />
            <strong>Nonfiction: </strong>
            Unable to identify main idea, even with some assistance.
          </Table.Cell>
          <Table.Cell>
            <strong>Fiction: </strong>
            Unable to identify main characters or ending, even with some
            assistance. <br />
            <br />
            <strong>Nonfiction: </strong>Unable to identify main idea, even with
            some assistance.
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);

export default ReadingDifficultyLevelInfo;
