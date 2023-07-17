import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './components/ContactApp';

// styling
import './style.css';

function HomePage() {
  return <p>This is Homepage</p>;
}

function AboutPage() {
  return <p>This is About page</p>;
}

function FAQPage() {
  return <p>This is FAQ page</p>;
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: '/'
    };
  }

  render() {
    return (
      <>
        {this.state.page === '/' && <HomePage />}
        {this.state.page === '/about' && <AboutPage />}
        {this.state.page === '/faq' && <FAQPage />}
      </>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
