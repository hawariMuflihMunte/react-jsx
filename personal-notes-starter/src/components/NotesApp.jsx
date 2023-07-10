import React from 'react';
import {
  getInitialData,
  showFormattedDate
} from '../utils/index.js';
import NotesHeader from './NotesHeader.jsx';
import NotesInput from './NotesInput.jsx';
import NotesList from './NotesList.jsx';
import NotesListEmpty from './NotesListEmpty.jsx';

export default class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      lastId: getInitialData().length
    }

    this.createNewNote = this.createNewNote.bind(this);
  }

  createNewNote(data) {
    let newId = this.state.lastId + 1;
    const {
      title,
      body
    } = data;

    const newNote = {
      id: newId,
      title,
      body,
      archived: false,
      createdAt: +new Date()
    }

    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote],
      lastId: newId
    }));

    console.log('Data received in parent: ', data);
    console.log('Formatted data: ', newNote);
  }

  render() {
    return (
      <>
        <NotesHeader search="NULL" />
        <NotesInput createNewNote={this.createNewNote} />
        <main className="note-app__body">
          <h2>Catatan Aktif</h2>
          <NotesList data={this.state.notes} />
          <h2>Arsip</h2>
          <NotesListEmpty />
        </main>
      </>
    );
  }
}
