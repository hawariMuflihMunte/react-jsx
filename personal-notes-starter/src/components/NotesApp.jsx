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
      lastId: getInitialData().length,
      searchQuery: '',
      searchResult: []
    }

    this.createNewNote = this.createNewNote.bind(this);
    this.updateArchive = this.updateArchive.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.searchNote = this.searchNote.bind(this);
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

  deleteNote(id) {
    const updatedNotes = this.state.notes.filter((note) => note.id !== id);

    this.setState({
      notes: updatedNotes
    });
  }

  searchNote(query) {
    const { notes } = this.state;

    const filteredNotes = query !== ''
      ? notes.filter((note) =>
          note.title.toLowerCase().includes(query.toLowerCase())
        )
      : [];

    this.setState({
      searchQuery: query,
      searchResult: filteredNotes
    });
  }

  render() {
    const { notes, searchQuery, searchResult } = this.state;

    const filteredNotes = searchQuery !== '' ? searchResult : notes;

    const notesActive = filteredNotes.filter((note) => !note.archived);
    const notesArchive = filteredNotes.filter((note) => note.archived);

    // console.log(filteredNotes);
    // console.log('Notes: ', notes);
    // console.log('Nactive: ', notesActive);
    // console.log('Narchive', notesArchive);
    // console.log('Total: ', notesActive.length + notesArchive.length);

    return (
      <>
        <NotesHeader
          search={this.state.searchQuery}
          onSearch={this.searchNote}
        />
        <main className="note-app__body">
          <NotesInput createNewNote={this.createNewNote} />
          <h2>Catatan Aktif</h2>
          {notesActive.length
          ? (
            <NotesList
              data={notesActive}
              updateArchive={this.updateArchive}
              deleteNote={this.deleteNote}
            />
          ) : (
            <NotesListEmpty />
          )}
          <h2>Arsip</h2>
          {notesArchive.length
          ? (
            <NotesList
              data={notesArchive}
              updateArchive={this.updateArchive}
              deleteNote={this.deleteNote}
            />
          ) : (
            <NotesListEmpty />
          )}
        </main>
      </>
    );
  }
}
