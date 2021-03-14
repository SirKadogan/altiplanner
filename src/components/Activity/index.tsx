import React, { useState } from "react";

// Components
import Card from "../BasicComponents/Card";
import Counter from "../BasicComponents/Counter";
import {H3} from '../Typography';


const Activity = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="p-col-12 p-md-4">
      <Card>
        <Card.Header>
          <H3>oh well</H3>
          <Counter counter={counter} setCounter={setCounter}/>
        </Card.Header>
      </Card>
    </div>
  );
};

export default Activity;
