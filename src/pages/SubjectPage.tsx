// src/pages/SubjectPage.tsx
import { useParams } from "react-router-dom";
import { studyData } from "../data";
import LessonCard from "../components/LessonCard";
import InfoTable from "../components/InfoTable";

function SubjectPage() {
  const { subjectId } = useParams<{ subjectId: string }>();

  if (!subjectId || !studyData[subjectId]) {
    return <div>Disciplina não encontrada!</div>;
  }

  const subject = studyData[subjectId];

  return (
    <div>
      <h1>
        {subject.icon} {subject.name}
      </h1>
      <hr style={{ borderColor: "#00ffff", borderStyle: "dashed" }} />

      <h2> Aulas </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {/* Modifique esta linha para passar a nova prop 'subjectId' */}
        {subject.lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} subjectId={subjectId!} />
        ))}
      </div>

      <h2> Avaliações </h2>
      <InfoTable headers={["Nome", "Data"]} data={subject.assessments} />

      <h2> Trabalhos </h2>
      <InfoTable headers={["Nome", "Data"]} data={subject.assignments} />

      <h2> Livros </h2>
      <InfoTable
        headers={["Nome", "Autor", "Biblioteca"]}
        data={subject.books}
      />
    </div>
  );
}

export default SubjectPage;
