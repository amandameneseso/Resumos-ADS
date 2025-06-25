// src/data.ts
export interface Lesson { id: number; title: string; summary: string; content: string; }
export interface Assessment { name: string; date: string; }
export interface Assignment { name: string; date: string; }
export interface Book { name: string; author: string; library: string; }
export interface Subject { name: string; icon: string; lessons: Lesson[]; assessments: Assessment[]; assignments: Assignment[]; books: Book[]; }

// Isso lê todos os arquivos .md dentro de /content/ e seus subdiretórios
const lessonContents = import.meta.glob('./content/**/*.md', { as: 'raw', eager: true });

const subjectsWithoutContent: Record<string, Omit<Subject, 'lessons'> & { lessons: Omit<Lesson, 'content'>[] }> = {
  "modulo-introdutorio": {
    name: "Módulo Introdutório de Conceitos Básicos de Computação",
    icon: "",
    lessons: [
      { id: 1, title: "Aula 1: Básico de Software", summary: "Introdução aos conceitos de software..." },
      { id: 2, title: "Aula 2: Básico de web e redes de computadores", summary: "Definição de web e redes..." },
      { id: 3, title: "Aula 3: Básico de sistema computacional", summary: "Conceitos básicos de um sistema computacional..." },
      { id: 4, title: "Aula 4: Básico de componentes de hardware", summary: "Conceitos básicos de componentes de hardware..." }
    ],
    assessments: [{ name: "Nenhuma avaliação disponível", date: "" }],
    assignments: [{ name: "Nenhum trabalho disponível", date: "" }],
    books: [{ name: "Nenhuma obra disponível", author: "", library: "" }]
  },
  "fundamentos-software": {
    name: "Fundamentos de Desenvolvimento de Software",
    icon: "",
    lessons: [
      { id: 1, title: "Aula 01: Atomística", summary: "Estudo dos átomos e suas partículas..." }
    ],
    assessments: [{ name: "Prova de Laboratório", date: "30/09/2025" }],
    assignments: [{ name: "Relatório de Misturas", date: "20/09/2025" }],
    books: [{ name: "Princípios de Química", author: "Peter Atkins", library: "Biblioteca Central" }]
  },
  "fundamentos-sistemas": {
    name: "Fundamentos de Design de Sistemas",
    icon: "",
    lessons: [
      { id: 1, title: "Aula 01: Atomística", summary: "Estudo dos átomos e suas partículas..." }
    ],
    assessments: [{ name: "Prova de Laboratório", date: "30/09/2025" }],
    assignments: [{ name: "Relatório de Misturas", date: "20/09/2025" }],
    books: [{ name: "Princípios de Química", author: "Peter Atkins", library: "Biblioteca Central" }]
  }
};

export const studyData: Record<string, Subject> = Object.entries(subjectsWithoutContent)
  .reduce((acc, [subjectId, subjectData]) => {
    
    const lessonsWithContent = subjectData.lessons.map(lesson => {
      const path = `./content/${subjectId}/${lesson.id}.md`;
      
      const content = lessonContents[path] || "## Conteúdo não encontrado!\n\nVerifique se o arquivo existe em: " + path;

      return {
        ...lesson,
        content
      };
    });

    acc[subjectId] = {
      ...subjectData,
      lessons: lessonsWithContent
    };

    return acc;
  }, {} as Record<string, Subject>);