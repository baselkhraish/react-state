import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
  
    handleIncrement = (amount) => {
      const { count } = this.state;
      const { increment } = this.props;
      const newCount = count + amount;
      this.setState({ count: newCount });
      increment(amount);
    };
  
    handleDecrement = (amount) => {
      const { count } = this.state;
      const { decrement } = this.props;
      const newCount = count - amount;
      this.setState({ count: newCount });
      decrement(amount);
    };
  
    render() {
      const { count } = this.state;
  
      return (
        <div>
          <button onClick={() => this.handleDecrement(1)}>-</button>
          <span>{count}</span>
          <button onClick={() => this.handleIncrement(1)}>+</button>
        </div>
      );
    }
  }
  export default Counter;