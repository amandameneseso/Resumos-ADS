// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import SubjectPage from './pages/SubjectPage';
import LessonPage from './pages/LessonPage';
import CalendarPage from './pages/CalendarPage';

function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/disciplina/:subjectId" element={<SubjectPage />} />
          <Route path="/disciplina/:subjectId/aula/:lessonId" element={<LessonPage />} />
          <Route path="/calendario" element={<CalendarPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;