import React, { useState } from "react";

// Components
import Card from "../BasicComponents/Card";
import Counter from "../BasicComponents/Counter";
import {H3} from '../Typography';


const Activity = () => {
  return (
    <div className="p-col-12 p-md-4">
      <Card>
        <Card.Header>
          <H3>oh well</H3>
          <Counter />
        </Card.Header>
      </Card>
    </div>
  );
};

export default Activity;
