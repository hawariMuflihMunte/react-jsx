import React from 'react';
import { createRoot } from 'react-dom/client';

import CounterDisplay from './CounterDisplay';
import ButtonIncrease from './ButtonIncrease';
import ButtonReset from './ButtonReset';

export default class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    // Inisialisasi nilai count di dalam state
    this.state = {
      count: 0
    };

    // binding event handler
    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }

  onIncreaseEventHandler() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  onResetEventHandler() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <ButtonIncrease increase={this.onIncreaseEventHandler} />
        <CounterDisplay count={this.state.count} />
        <ButtonReset reset={this.onResetEventHandler} />
      </div>
    );
  }
}
