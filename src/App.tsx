// src/App.tsx
import { useState, useEffect } from 'react'; // Importe useState e useEffect
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import SubjectPage from './pages/SubjectPage';
import LessonPage from './pages/LessonPage';
import CalendarPage from './pages/CalendarPage';
import ThemeToggler from './components/ThemeToggler'; // Componente que vamos criar

function App() {
  // 1. Estado para guardar o tema atual ('light' ou 'dark')
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    // Verifica se o usuário já tem preferência de tema no sistema operacional
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme || (prefersDark ? 'dark' : 'light');
  });

  // 2. useEffect para aplicar a mudança de tema no HTML e salvar no localStorage
  useEffect(() => {
    // Adiciona o atributo data-theme na tag <html>
    document.documentElement.setAttribute('data-theme', theme);
    // Salva a preferência do usuário
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 3. Função para trocar o tema
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <> {/* Usamos um Fragment <> para poder colocar o Toggler fora do wrapper */}
      <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
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
    </>
  );
}

export default App;