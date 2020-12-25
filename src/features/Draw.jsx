import React from "react";
import Card from "../components/Card";

import "./Draw.css";

const Draw = (props) => {
  const result = 5;
  
  return (
    <Card title="Draw">
      {result}
    </Card>
  );
};

export default Draw;
