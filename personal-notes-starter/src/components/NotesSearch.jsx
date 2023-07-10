import React from 'react';

export default class NotesSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.onChangeEventHandler = this.onChangeEventHandler.bind(this);
  }

  onChangeEventHandler(event) {
    this.setState(() => {
      return {
        query: event.target.value
      };
    });
  }

  render() {
    return (
      <section className="note-search">
        <input
          type="text"
          placeholder="Cari catatan ..."
          value={this.state.query}
          onChange={this.onChangeEventHandler}
        />
      </section>
    );
  }
}
