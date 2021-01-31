import React, { Fragment } from "react";
import { Breadcrumb } from "semantic-ui-react";

const Breadcrumbs = ({ items }) => {
  const sections = items.map((item, i) => {
    return (
      <Fragment key={i}>
        <Breadcrumb.Section {...item} />
        {i !== items.length - 1 && <Breadcrumb.Divider icon="right chevron" />}
      </Fragment>
    );
  });

  return <Breadcrumb size="big">{sections}</Breadcrumb>;
};

export default Breadcrumbs;
