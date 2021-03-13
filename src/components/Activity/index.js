import React, { useState } from "react";

// Libraries
import { Card } from "primereact/card";
import { ProgressBar } from "primereact/progressbar";
import { Button } from "primereact/button";

import "./Activity.css";

const Activity = (props) => {
  const [counter, setCounter] = useState(3);
  const total = 10;

  const calculatePercentage = (counter) => {
    return Math.ceil((counter / total) * 100);
  };

  const [percentage, setPercentage] = useState(calculatePercentage(counter));

  const displayValueTemplate = () => {
    return (
      <>
        {counter}/<b>{total}</b>
      </>
    );
  };

  const count = (action) => {
    let newCount;

    if (action === "-") {
      newCount = counter - 1;
    } else {
      newCount = counter + 1;
    }

    setCounter(newCount);
    setPercentage(calculatePercentage(newCount));
  };

  const header = (
    <div className=" p-d-flex p-jc-between p-ai-middle " style={{ padding: 5 }}>
      <h3>Leitura</h3>
      <div>
        <Button icon="pi pi-minus" onClick={() => counter > 0 && count("-")} style={{ marginLeft: 5 }} />
        <Button icon="pi pi-plus" onClick={() => count("+")} style={{ marginLeft: 5 }} />
      </div>
    </div>
  );
  const footer = <ProgressBar value={percentage} displayValueTemplate={displayValueTemplate} />;
  return (
    <div className="p-col-12 p-md-3">
      <Card header={header} footer={footer}></Card>
    </div>
  );
};

export default Activity;
