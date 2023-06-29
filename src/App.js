import React, { Component } from 'react';
import Counter from './components/Counter';
import Total from './components/Total';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [0, 0, 0, 0],
    };
  }

  handleIncrement = (index, amount) => {
    const { counters } = this.state;
    const newCounters = [...counters];
    newCounters[index] += amount;
    this.setState({ counters: newCounters });
  };

  handleDecrement = (index, amount) => {
    const { counters } = this.state;
    const newCounters = [...counters];
    newCounters[index] -= amount;
    this.setState({ counters: newCounters });
  };

  render() {
    const { counters } = this.state;

    return (
      <div>
        {counters.map((counter, index) => (
          <Counter
            key={index}
            increment={(amount) => this.handleIncrement(index, amount)}
            decrement={(amount) => this.handleDecrement(index, amount)}
          />
        ))}
        <Total counters={counters} />
      </div>
    );
  }
}

export default App;
