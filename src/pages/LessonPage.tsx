// src/pages/LessonPage.tsx
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { studyData } from "../data";
import "./LessonPage.css";

function LessonPage() {
  const { subjectId, lessonId } = useParams<{
    subjectId: string;
    lessonId: string;
  }>();

  // Encontrar a disciplina e a aula correspondentes
  const subject = subjectId ? studyData[subjectId] : undefined;
  const lesson = subject?.lessons.find((l) => l.id === Number(lessonId));

  if (!subject || !lesson) {
    return <h1>Aula não encontrada!</h1>;
  }

  // navegação dos botões inferiores
  const currentLessonIndex = subject.lessons.findIndex(
    (l) => l.id === Number(lessonId)
  );
  const previousLesson = subject.lessons[currentLessonIndex - 1];
  const nextLesson = subject.lessons[currentLessonIndex + 1];

  return (
    <div className="article-content">
      {/* navegação dos botões inferiores */}
      <div className="lesson-navigation">
        {/* Botão de Voltar com ícone */}
        {previousLesson && (
          <Link
            to={`/disciplina/${subjectId}/aula/${previousLesson.id}`}
            className="nav-button prev-button"
          >
            {/* Adicione o ícone aqui */}
            <img src="/images/nav1.gif" alt="Voltar" />
            {previousLesson.title}
          </Link>
        )}

        {/* Botão de Avançar com ícone */}
        {nextLesson && (
          <Link
            to={`/disciplina/${subjectId}/aula/${nextLesson.id}`}
            className="nav-button next-button"
          >
            {nextLesson.title}
            {/* Adicione o ícone aqui */}
            <img src="/images/nav2.gif" alt="Avançar" />
          </Link>
        )}
      </div>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // <-- Adicione esta linha!
        components={{
          a: ({ ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer" />
          ),
        }}
      >
        {lesson.content}
      </ReactMarkdown>

      <img src="/images/coelho.gif" alt="Avançar" />
      {/* <img src="/images/divider6.png" alt="Avançar" /> */}

      {/* navegação dos botões inferiores */}
      <div className="lesson-navigation">
        {/* Botão de Voltar com ícone */}
        {previousLesson && (
          <Link
            to={`/disciplina/${subjectId}/aula/${previousLesson.id}`}
            className="nav-button prev-button"
          >
            {/* Adicione o ícone aqui */}
            <img src="/images/nav1.gif" alt="Voltar" />
            {previousLesson.title}
          </Link>
        )}

        {/* Botão de Avançar com ícone */}
        {nextLesson && (
          <Link
            to={`/disciplina/${subjectId}/aula/${nextLesson.id}`}
            className="nav-button next-button"
          >
            {nextLesson.title}
            {/* Adicione o ícone aqui */}
            <img src="/images/nav2.gif" alt="Avançar" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default LessonPage;
