// src/pages/LessonPage.tsx
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'; // Importe o componente
import { studyData } from '../data';
import './LessonPage.css'; // Vamos criar este arquivo para estilizar

function LessonPage() {
  const { subjectId, lessonId } = useParams<{ subjectId: string; lessonId: string }>();

  // Encontrar a disciplina e a aula correspondentes
  const subject = subjectId ? studyData[subjectId] : undefined;
  const lesson = subject?.lessons.find(l => l.id === Number(lessonId));

  if (!lesson) {
    return <h1>Aula não encontrada!</h1>;
  }

  return (
    <div className="article-content">
      {/* Usamos o componente ReactMarkdown para renderizar o conteúdo */}
      <ReactMarkdown>
        {lesson.content}
      </ReactMarkdown>
    </div>
  );
}

export default LessonPage;