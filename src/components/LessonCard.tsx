// src/components/LessonCard.tsx
import { Link } from 'react-router-dom';
import type { Lesson } from '../data';
import './LessonCard.css'; // 1. Importe o novo arquivo de CSS

interface LessonCardProps {
  lesson: Lesson;
  subjectId: string;
}

function LessonCard({ lesson, subjectId }: LessonCardProps) {
  return (
    // 2. Substituímos o 'style' por uma 'className'
    <div className="lesson-card">
      <h3 className="lesson-card-title">{lesson.title}</h3>
      <p>{lesson.summary}</p>
      
      <Link to={`/disciplina/${subjectId}/aula/${lesson.id}`} className="lesson-card-link">
        Ver resumo
      </Link>
    </div>
  );
}

export default LessonCard;