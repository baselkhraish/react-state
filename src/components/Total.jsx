import React, { Component } from 'react';


class Total extends Component {
    constructor(props) {
      super(props);
      this.state = {
        total: 0,
      };
    }
  
    componentDidUpdate(prevProps) {
      const { counters } = this.props;
      if (prevProps.counters !== counters) {
        const newTotal = counters.reduce((sum, counter) => sum + counter, 0);
        this.setState({ total: newTotal });
      }
    }
  
    render() {
      const { total } = this.state;
  
      return (
        <div>
          <h3>Total: {total}</h3>
        </div>
      );
    }
  }
  export default Total;