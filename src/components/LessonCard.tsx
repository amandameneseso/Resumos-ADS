// src/components/LessonCard.tsx
import { Link } from 'react-router-dom';
import type { Lesson } from '../data';

interface LessonCardProps {
  lesson: Lesson;
  subjectId: string;
}

function LessonCard({ lesson, subjectId }: LessonCardProps) {
  return (
    <div style={{ border: '1px dashed #4ccdff', padding: '15px', backgroundColor: '#effaff', flex: '1 1 250px', borderRadius: '7px' }}>
      <h3>{lesson.title}</h3>
      <p>{lesson.summary}</p>
      
      <Link to={`/disciplina/${subjectId}/aula/${lesson.id}`}>
        Ver resumo
      </Link>
    </div>
  );
}

export default LessonCard;