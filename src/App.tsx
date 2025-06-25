// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import SubjectPage from './pages/SubjectPage';
import LessonPage from './pages/LessonPage'; // 1. Importe a nova página

function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/disciplina/:subjectId" element={<SubjectPage />} />
          {/* 2. Adicione a nova rota para a aula/artigo */}
          <Route path="/disciplina/:subjectId/aula/:lessonId" element={<LessonPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;