import React, { Component } from "react";
import Counter from "./components/Counter";
import SearchableList from "./components/SearchableList";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      test: "123",
    };
  }

  // componentDidMount() {
  //   // Fetch initial data when the component mounts
  //   console.log("componentDidMount triggered");
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // Check if the data has changed
  //   if (prevState.count !== this.state.count) {
  //     // Data has changed, perform additional actions
  //     console.log("Data has been updated:", this.state.count);
  //   }

  //   console.log("prevProps", prevProps);
  // }

  // componentWillUnmount() {
  //   // Cleanup tasks before the component is unmounted
  //   console.log("Component will unmount");
  //   // For example, remove event listeners, cancel ongoing tasks, etc.
  // }

  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  render() {
    return (
      <div>
        {/* <Counter /> */}
        {/* <p>This is a class component</p>
        <button onClick={() => this.handleIncrement()}>
          Increase Count {this.state.count}
        </button> */}

        <SearchableList />
      </div>
    );
  }
}

export default ClassComponent;
