// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import SubjectPage from './pages/SubjectPage';
import LessonPage from './pages/LessonPage';
import CalendarPage from './pages/CalendarPage';

function App() {
  return (
    // Esta nova div vai controlar o layout de duas colunas
    <div className="page-wrapper">
      <Sidebar />
      <main className="content-column">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calendario" element={<CalendarPage />} />
          <Route path="/disciplina/:subjectId" element={<SubjectPage />} />
          <Route path="/disciplina/:subjectId/aula/:lessonId" element={<LessonPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;