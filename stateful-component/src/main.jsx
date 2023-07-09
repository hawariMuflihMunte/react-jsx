import React from 'react';
import { createRoot } from 'react-dom/client';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <p>{this.state.count}</p>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    <MyComponent />
  </div>
);
