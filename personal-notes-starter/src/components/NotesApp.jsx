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
    this.updateArchive = this.updateArchive.bind(this);
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

    // Register new note
    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote],
      lastId: newId
    }));
  }

  updateArchive(id) {
    const { notes } = this.state;

    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived
        };
      }

      return note;
    });

    this.setState({
      notes: updatedNotes
    });
  }

  render() {
    const { notes } = this.state;

    const notesActive = notes.filter((note) => note.archived === false)
    const notesArchive = notes.filter((note) => note.archived === true)

    console.log(notesActive);
    console.log(notesArchive);

    return (
      <>
        <NotesHeader search="" />
        <NotesInput createNewNote={this.createNewNote} />
        <main className="note-app__body">
          <h2>Catatan Aktif</h2>
          {notesActive.length
          ? (
            <NotesList data={notesActive} updateArchive={this.updateArchive} />
          ) : (
            <NotesListEmpty />
          )}
          <h2>Arsip</h2>
          {notesArchive.length
          ? (
            <NotesList data={notesArchive} updateArchive={this.updateArchive} />
          ) : (
            <NotesListEmpty />
          )}
        </main>
      </>
    );
  }
}
