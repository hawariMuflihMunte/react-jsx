import React from 'react';
import { createRoot } from 'react-dom/client';
import PropTypes from 'prop-types';
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

function Link({
  target,
  navigate,
  children
}) {
  return (
    <a
      href={target}
      onClick={(event) => {
        event.preventDefault();
        navigate(target);
      }}
    >
      {children}
    </a>
  );
}

Link.propTypes = {
  target: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: '/'
    };

    this.navigate = this.navigate.bind(this);
  }

  navigate(target) {
    this.setState(() => {
      return {
        page: target
      };
    });
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
