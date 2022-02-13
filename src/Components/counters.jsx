import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const {
      onReset,
      onAdd,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
      onUpdate,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn-dark px-4 btn-sm m-2">
          Reset Value
        </button>
        <button onClick={onAdd} className="btn-dark px-4 btn-sm m-2">
          Add New Row
        </button>

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={(value) => onIncrement({ ...counter, value })}
            onDecrement={(value) => onDecrement({ ...counter, value })}
            onUpdate={onUpdate}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
