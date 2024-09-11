import React, { Component } from "react";

// A simple class component
class Counter extends Component {
  // Initialize state
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    // Bind the event handler to this component
    this.increment = this.increment.bind(this);
  }

  // Lifecycle method: Runs after the component mounts
  componentDidMount() {
    console.log("Counter component mounted");
  }

  // Lifecycle method: Runs before the component unmounts
  componentWillUnmount() {
    console.log("Counter component will unmount");
  }

  // Event handler to increment the count
  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  // Render method to display the UI
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
