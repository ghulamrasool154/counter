import React, { Component } from "react";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      value: 0,
    };
  }
  componentDidMount() {
    this.setState({ value: this.props.counter.value });
  }
  change = () => {
    this.setState({ show: !this.state.show });
  };
  nextVal = (e) => {
    let data = e.target.value;
    this.setState({ value: data });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.counter.value });
  }

  render() {
    let classes_changing = "badge  m-2 bg-";
    classes_changing +=
      parseInt(this.state.value) === 0 ? "warning" : "primary";
    return (
      <div>
        {/*  1 number */}
        {this.state.show ? (
          <span className={classes_changing}>{this.increment()} </span>
        ) : (
          <input value={this.state.value} onChange={this.nextVal} />
        )}

        {/* 2 increment */}
        <button
          onClick={() => this.props.onIncrement(parseInt(this.state.value) + 1)}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>

        {/* 3 decrement  */}
        <button
          onClick={() =>
            this.props.onDecrement(
              parseInt(this.state.value - 1) >= 0
                ? parseInt(this.state.value - 1)
                : 0
            )
          }
          className="btn btn-primary btn-sm m-2"
        >
          Decrement
        </button>

        {/* 4 button change  */}
        <button
          onClick={() => this.change()}
          className="btn btn-danger btn-sm m-2"
        >
          {this.state.show ? " Edit " : " Save "}
        </button>

        {/* 4 delete  */}

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-warning btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  increment() {
    const { value } = this.state;
    return value === 0 ? " Zero " : value;
  }
}
export default Counter;
