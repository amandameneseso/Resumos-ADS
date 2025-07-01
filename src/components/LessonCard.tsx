// src/components/LessonCard.tsx
import { Link } from 'react-router-dom';
import type { Lesson } from '../data';

interface LessonCardProps {
  lesson: Lesson;
  subjectId: string;
}

function LessonCard({ lesson, subjectId }: LessonCardProps) {
  return (
    <div style={{ border: '1px dashed #4ccdff', padding: '15px', backgroundColor: '#effaff', flex: '1 1 250px', borderRadius: '7px', margin: '5px', borderImage: 'url(/images/dottedlace3.png) 7 fill round', borderWidth: '7px', borderStyle: 'solid' }}>
      <h3 style={{ marginTop: '5px' }}>{lesson.title}</h3>
      <p>{lesson.summary}</p>
      
      <Link to={`/disciplina/${subjectId}/aula/${lesson.id}`}>
        Ver resumo
      </Link>
    </div>
  );
}

export default LessonCard;

// borderImage: 'url(/images/pinklace-branco.png) 7 fill round', borderWidth: '8px', borderStyle: 'solid', margin: '5px'