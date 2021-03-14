import React, { useEffect, useState } from "react";

// Components
import Card from "../BasicComponents/Card";
import Counter from "../BasicComponents/Counter";
import Progressbar from "../BasicComponents/Progressbar";
import {H3} from '../Typography';



const Activity = () => {
  const goal = 3;
  const [counter, setCounter] = useState(0);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const percent = Math.ceil(counter/goal * 100)
    setProgress(percent);
  }, [counter]);

  return (
    <div className="p-col-12 p-md-4">
      <Card>
        <Card.Header>
          <H3>oh well</H3>
          <Counter counter={counter} setCounter={setCounter}/>
        </Card.Header>
        <Card.Body>
          <Progressbar progress={progress}/>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Activity;
