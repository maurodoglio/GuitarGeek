import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { LessonPage } from './pages/LessonPage';
import { PracticePage } from './pages/PracticePage';
import { ProgressPage } from './pages/ProgressPage';
import { useProgress } from './hooks/useProgress';
import { curriculum } from './data/curriculum';

function App() {
  const progressHook = useProgress();

  return (
    <BrowserRouter>
      <Header overallProgress={progressHook.getOverallProgress(curriculum)} />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage progressHook={progressHook} />} />
          <Route path="/lesson/:lessonId" element={<LessonPage progressHook={progressHook} />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/progress" element={<ProgressPage progressHook={progressHook} />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">
          <p style={{ textAlign: 'center', color: 'var(--color-text-dim)', padding: '32px 0', fontSize: '0.85rem' }}>
            FretMaster — Structured guitar learning based on professional music education curriculum.
          </p>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
