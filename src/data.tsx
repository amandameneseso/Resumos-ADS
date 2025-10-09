// src/data.ts
export interface Lesson { id: number; title: string; summary: string; content: string; }
export interface Assessment { name: string; date: string; }
export interface Assignment { name: string; date: string; }
export interface Book { name: string; author: string; library: string; }
export interface Subject { name: string; icon: string; lessons: Lesson[]; assessments: Assessment[]; assignments: Assignment[]; books: Book[]; }

// Isso lê todos os arquivos .md dentro de /content/ e seus subdiretórios
const lessonContents = import.meta.glob<{ default: string }>('./content/**/*.md', { query: '?raw', eager: true });

const subjectsWithoutContent: Record<string, Omit<Subject, 'lessons'> & { lessons: Omit<Lesson, 'content'>[] }> = {
  "modulo-introdutorio": {
    name: "Módulo Introdutório de Conceitos Básicos de Computação",
    icon: "",
    lessons: [
      { id: 1, title: "Aula 1: Básico de Software", summary: "Introdução aos conceitos de software..." },
      { id: 2, title: "Aula 2: Básico de web e redes de computadores", summary: "Definição de web e redes..." },
      { id: 3, title: "Aula 3: Básico de sistema computacional", summary: "Conceitos básicos de um sistema computacional..." },
      { id: 4, title: "Aula 4: Básico de componentes de hardware", summary: "Conceitos básicos de componentes de hardware..." },
      { id: 5, title: "Extra: Introdução à Web", summary: "O conceito da World Wide Web, hipertexto e hipermídia..." },
      { id: 6, title: "Extra: Como a Web funciona?", summary: "Os protocolos e a mecânica por trás da Web..." }
    ],
    assessments: [{ name: "Nenhuma avaliação disponível", date: "" }],
    assignments: [{ name: "Nenhum trabalho disponível", date: "" }],
    books: [{ name: "Nenhuma obra disponível", author: "", library: "" }]
  },
  "fundamentos-software": {
    name: "Fundamentos de Desenvolvimento de Software",
    icon: "",
    lessons: [
      { id: 1, title: "Aula 1: Software", summary: "Softwares, programas e sistemas são elementos constantes..." },
      { id: 2, title: "Aula 2: O profissional de TI e sua atuação", summary: "A Crise do Software é um termo que surgiu..." },
      { id: 3, title: "Aula 3: Desenvolvimento colaborativo", summary: "O processo de criação de software, também..." },
      { id: 4, title: "Aula 4: Desenvolvimento de site: HTML", summary: "A internet surgiu no final da década de 1960 com a Arpanet..." },
      { id: 5, title: "Aula 5: Desenvolvimento de site: CSS", summary: "O CSS (Cascading Style Sheets) é uma tecnologia crucial..." },
      { id: 6, title: "Aula 6: Desenvolvimento de site: JavaScript", summary: "O JavaScript surgiu em 1995..." },
      { id: 7, title: "Extra: A história de como ensinamos máquinas a pensar", summary: "Imagine que você tem uma máquina muito obediente..." },
      { id: 8, title: "Extra: O que é ponto flutuante?", summary: "Ponto flutuante ou vírgula flutuante é um formato de representação..." },
      { id: 9, title: "Extra: Virtualização e Containerização", summary: "A virtualização consiste em uma máquina física que emula várias máquinas virtuais..." }
    ],
    assessments: [{ name: "APOL 1", date: "07/07/2025"}, {name: "APOL 2", date: "07/07/2025" }],
    assignments: [{ name: "Trabalho Prático 1", date: "07/07/2025" }],
    books: [{ name: "HTML 5 – Embarque Imediato", author: "FLATSCHART, F.", library: "BV Pearson" }, { name: "Engenharia de Software", author: "PRESSMAN, R., e MAXIM, B.", library: "Minha Biblioteca" }, { name: "Lógica de Programação", author: "FORBELLONE, A. L. V.", library: "BV Pearson" }, { name: "Informática - conceitos e aplicações", author: "MARÇULA, M.", library: "Minha Biblioteca" }, { name: "Engenharia de Software", author: "SOMMERVILLE, I.", library: "BV Pearson" }]
  },
  "fundamentos-sistemas": {
    name: "Fundamentos de Design de Sistemas",
    icon: "",
    lessons: [
      { id: 1, title: "Aula 1: Linux", summary: "Linux é um sistema operacional de código aberto..." },
      { id: 2, title: "Aula 2: Terminal Linux", summary: "O Linux e o Windows organizam arquivos de maneiras distintas..." },
      { id: 3, title: "Aula 3: Controle de versionamento de software (Git)", summary: "O controle de versão é uma prática fundamental para documentos..." },
      { id: 4, title: "Aula 4: Arquitetura de Software", summary: "A Arquitetura de Software é definida como a estrutura fundamental..." },
      { id: 5, title: "Aula 5: Design Digital 1", summary: "O desenvolvimento de software é um empreendimento multidisciplinar..." },
      { id: 6, title: "Aula 6: Design Digital 2", summary: "A Arquitetura da Informação é definida pelo Information Architecture Institute..." }
    ],
    assessments: [{ name: "APOL 1", date: "07/07/2025"}, {name: "APOL 2", date: "07/07/2025" }, {name: "Prova atividade prática", date: "07/07/2025" }, {name: "Prova objetiva", date: "28/07/2025" }],
    assignments: [{ name: "Nenhum trabalho disponível", date: "" }],
    books: [{ name: "Arquitetura de Sistemas", author: "ZENKER, Aline M.", library: "" }, {name: "Experiência do usuário (UX)", author: "STATI, Cesar R; SARMENTO, Camila F.", library: "" }, {name: "Começando com o linux: comandos, serviços e administração", author: "", library: "" }]
  },
  "fundamentos-sistemas-informação": {
    name: "Fundamentos de Sistemas de Informação",
    icon: "",
    lessons: [
      { id: 1, title: "Aula 1: Conceitos Fundamentais de Sistemas de Informação", summary: "..." },
      { id: 2, title: "Aula 2: Sistemas de Informação nas Organizações", summary: "..." },
      { id: 3, title: "Aula 3: Infraestrutura e Segurança de Sistemas de Informação", summary: "..." },
      { id: 4, title: "Aula 4: Sistemas de Gestão e Big Data", summary: "..." },
      { id: 5, title: "Aula 5: Negócios Eletrônicos e Tendências", summary: "..." },
      { id: 6, title: "Aula 6: Tendências em Sistemas de Informação", summary: "..." }
    ],
    assessments: [{ name: "APOL 1", date: "21/08/2025"}, {name: "APOL 2", date: "21/08/2025" }, {name: "Prova atividade prática", date: "21/08/2025"}, {name: "Prova objetiva", date: "18/09/2025"}],
    assignments: [{ name: "Nenhum trabalho disponível", date: "" }],
    books: [{ name: "Arquitetura de Sistemas", author: "ZENKER, Aline M.", library: "" }, {name: "Experiência do usuário (UX)", author: "STATI, Cesar R; SARMENTO, Camila F.", library: "" }, {name: "Começando com o linux: comandos, serviços e administração", author: "", library: "" }]
  }
};

export const studyData: Record<string, Subject> = Object.entries(subjectsWithoutContent)
  .reduce((acc, [subjectId, subjectData]) => {
    
    const lessonsWithContent = subjectData.lessons.map(lesson => {
      const path = `./content/${subjectId}/${lesson.id}.md`;
      
    const content = lessonContents[path]?.default || "## Conteúdo não encontrado!\n\nVerifique se o arquivo existe em: " + path;

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