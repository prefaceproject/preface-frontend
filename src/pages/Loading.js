import React, { useState, useEffect, useCallback } from "react";

import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import "./styles/Loading.css";

const Loading = () => {
  return (
    <div className="loadingMain">
      <Dimmer active inverted>
        <Loader size="medium">What is your favorite language?</Loader>
      </Dimmer>

      <Image src="/images/wireframe/paragraph.png" />
    </div>
  );
};

export default Loading;
