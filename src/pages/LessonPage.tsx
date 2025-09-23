// src/pages/LessonPage.tsx
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { studyData } from '../data';
import './LessonPage.css';

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
      <ReactMarkdown
        components={{
          a: ({...props}) => (
            <a {...props} target="_blank" rel="noopener noreferrer" />
          )
        }}
      >
        {lesson.content}
      </ReactMarkdown>
    </div>
  );
}

export default LessonPage;