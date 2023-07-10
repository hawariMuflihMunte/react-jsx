import React from 'react';

export default class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    const value = event.target.value;

    if (value.length <= 50) {
      this.setState({
        title: value
      });
    }
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    const title = this.state.title;
    const body = this.state.body;

    if (title === '' || body === '') {
      return;
    }

    this.props.createNewNote({
      title,
      body
    });
  }

  render() {
    return (
      <section className="note-input">
        <h2>Buat catatan</h2>
        <form>
          <p className="note-input__title__char-limit">
            Sisa karakter: {50 - this.state.title.length}
          </p>
          <input
            type="text"
            className="note-input__title"
            placeholder="Ini adalah judul ..."
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
            required
          />
          <textarea
            type="text"
            className="note-input__body"
            placeholder="Tuliskan catatanmu di sini ..."
            value={this.state.body}
            onChange={this.onBodyChangeHandler}
            required
          ></textarea>
          <button type="submit" onClick={this.onSubmitEventHandler}>Buat</button>
        </form>
      </section>
    );
  }
}
