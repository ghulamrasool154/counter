import React, { Component } from "react";
import NavBar from "./Components/navbar";
import Counters from "./Components/counters";
import "./App.css";
class App extends Component {
  state = {
    counters: [{ id: 1, value: 0 }],
  };

  handleValueChange = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.findIndex((ls) => ls.id == counter.id);
    counters[index] = { ...counter };
    this.setState({ counters: [...counters] });
  };

  handleNew = () => {
    let counters = [...this.state.counters];
    counters = [{ id: counters.length + 1, value: 0 }, ...counters];

    this.setState({ counters: [...counters] });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <div className="container text-center">
          <NavBar
            totalCounters={
              this.state.counters.filter((c) => c.value > 0).length
            }
          />
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onAdd={this.handleNew}
            onIncrement={this.handleValueChange}
            onDelete={this.handleDelete}
            onDecrement={this.handleValueChange}
            onUpdate={this.handleUpdate}
          ></Counters>
        </div>
      </div>
    );
  }
}

export default App;
