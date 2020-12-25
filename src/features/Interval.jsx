import React from "react";
import Card from "../components/Card";

import "./Interval.css";

const Interval = () => {
  return (
    <Card title="Interval">
      <form className="form">
        <div className="form__group">
          <label htmlFor="min" className="form__label">Min</label>
          <input type="number" className="form__input" id="min" value={0} />
        </div>
        <div className="form__group">
          <label htmlFor="max" className="form__label">Max</label>
          <input type="number" className="form__input" id="max" value={0} />
        </div>
      </form>
    </Card>
  );
};

export default Interval;
