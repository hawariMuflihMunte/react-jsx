import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ArchivesPage } from './pages/ArchivePage';
import { DetailPage } from './pages/DetailPage';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">Aplikasi Catatan</Link>
        </h1>
        <nav className='navigation'>
          <ul>
            <li>
              <Link to="/archives">Arsip</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/archives' element={<ArchivesPage />} />
          <Route path='/details/:id' element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
