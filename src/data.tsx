// src/data.ts

// As interfaces continuam as mesmas, com 'content' sendo uma string
export interface Lesson { id: number; title: string; summary: string; content: string; }
export interface Assessment { name: string; date: string; }
export interface Assignment { name: string; date: string; }
export interface Book { name: string; author: string; library: string; }
export interface Subject { name: string; icon: string; lessons: Lesson[]; assessments: Assessment[]; assignments: Assignment[]; books: Book[]; }

// 1. Ferramenta mágica do Vite para importar múltiplos arquivos de uma vez
// Isso lê todos os arquivos .md dentro de /content/ e seus subdiretórios
const lessonContents = import.meta.glob('./content/**/*.md', { as: 'raw', eager: true });

// 2. Definimos os metadados das disciplinas, mas SEM o campo 'content' nas aulas
const subjectsWithoutContent: Record<string, Omit<Subject, 'lessons'> & { lessons: Omit<Lesson, 'content'>[] }> = {
  "modulo-introdutorio": {
    name: "Módulo Introdutório de Conceitos Básicos de Computação",
    icon: "",
    lessons: [
      { id: 1, title: "Aula 01: Limites", summary: "Introdução aos conceitos de limites..." },
      { id: 2, title: "Aula 02: Derivadas", summary: "Definição de derivada e regras básicas..." }
    ],
    assessments: [],
    assignments: [],
    books: []
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

// 3. Processamos os dados para injetar o conteúdo dos arquivos .md
export const studyData: Record<string, Subject> = Object.entries(subjectsWithoutContent)
  .reduce((acc, [subjectId, subjectData]) => {
    
    const lessonsWithContent = subjectData.lessons.map(lesson => {
      // Montamos o caminho do arquivo esperado. Ex: ./content/calculo-1/1.md
      const path = `./content/${subjectId}/${lesson.id}.md`;
      
      // Procuramos o conteúdo no objeto que o Vite nos deu
      const content = lessonContents[path] || "## Conteúdo não encontrado!\n\nVerifique se o arquivo existe em: " + path;

      return {
        ...lesson,
        content // Injetamos o conteúdo lido do arquivo
      };
    });

    acc[subjectId] = {
      ...subjectData,
      lessons: lessonsWithContent
    };

    return acc;
  }, {} as Record<string, Subject>);