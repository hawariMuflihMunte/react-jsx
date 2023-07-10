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
      notes: getInitialData()
    }
  }

  render() {
    return (
      <>
        <NotesHeader search={"NULL"} />
        <NotesInput title={"title"} body={"Test"} />
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
