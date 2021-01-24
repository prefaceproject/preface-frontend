import React from "react";
import { Breadcrumb } from "semantic-ui-react";

const Breadcrumbs = ({ items }) => {
  const sections = items.map((item, i) => {
    return (
      <>
        <Breadcrumb.Section {...item} />
        {i !== items.length - 1 && <Breadcrumb.Divider icon="right chevron" />}
      </>
    );
  });

  return <Breadcrumb size="big">{sections}</Breadcrumb>;
};

export default Breadcrumbs;
