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
      { id: 1, title: "1: Básico de Software", summary: "Introdução aos conceitos de software..." },
      { id: 2, title: "2: Básico de web e redes de computadores", summary: "Definição de web e redes..." },
      { id: 3, title: "3: Básico de sistema computacional", summary: "Conceitos básicos de um sistema computacional..." },
      { id: 4, title: "4: Básico de componentes de hardware", summary: "Conceitos básicos de componentes de hardware..." },
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
      { id: 1, title: "1: Software", summary: "Softwares, programas e sistemas são elementos constantes..." },
      { id: 2, title: "2: O profissional de TI e sua atuação", summary: "A Crise do Software é um termo que surgiu..." },
      { id: 3, title: "3: Desenvolvimento colaborativo", summary: "O processo de criação de software, também..." },
      { id: 4, title: "4: Desenvolvimento de site: HTML", summary: "A internet surgiu no final da década de 1960 com a Arpanet..." },
      { id: 5, title: "5: Desenvolvimento de site: CSS", summary: "O CSS (Cascading Style Sheets) é uma tecnologia crucial..." },
      { id: 6, title: "6: Desenvolvimento de site: JavaScript", summary: "O JavaScript surgiu em 1995..." },
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
      { id: 1, title: "1: Linux", summary: "Linux é um sistema operacional de código aberto..." },
      { id: 2, title: "2: Terminal Linux", summary: "O Linux e o Windows organizam arquivos de maneiras distintas..." },
      { id: 3, title: "3: Controle de versionamento de software (Git)", summary: "O controle de versão é uma prática fundamental para documentos..." },
      { id: 4, title: "4: Arquitetura de Software", summary: "A Arquitetura de Software é definida como a estrutura fundamental..." },
      { id: 5, title: "5: Design Digital 1", summary: "O desenvolvimento de software é um empreendimento multidisciplinar..." },
      { id: 6, title: "6: Design Digital 2", summary: "A Arquitetura da Informação é definida pelo Information Architecture Institute..." }
    ],
    assessments: [{ name: "APOL 1", date: "07/07/2025"}, {name: "APOL 2", date: "07/07/2025" }, {name: "Prova atividade prática", date: "07/07/2025" }, {name: "Prova objetiva", date: "28/07/2025" }],
    assignments: [{ name: "Nenhum trabalho disponível", date: "" }],
    books: [{ name: "Arquitetura de Sistemas Operacionais", author: "MACHADO, Francis B.", library: "" }, {name: "Sistemas Operacionais Modernos", author: "TANENBAUM, Andrew S.", library: "" }]
  },
  "fundamentos-sistemas-informação": {
    name: "Fundamentos de Sistemas de Informação",
    icon: "",
    lessons: [
      { id: 1, title: "1: Conceitos Fundamentais de Sistemas de Informação", summary: "Os sistemas de informação (SI) têm exercido uma profunda influência..." },
      { id: 2, title: "2: Sistemas de Informação nas Organizações", summary: "Sistema de informação pode ser definido como um conjunto integrado..." },
      { id: 3, title: "3: Infraestrutura e Segurança de Sistemas de Informação", summary: "Com a ubiquidade dos dispositivos digitais nos negócios, a segurança..." },
      { id: 4, title: "4: Sistemas de Gestão e Big Data", summary: "Um sistema de gestão descreve como as empresas se organizam em suas..." },
      { id: 5, title: "5: Negócios Eletrônicos e Tendências", summary: "Negócios eletrônicos (e-business) pode ser compreendido como a..." },
      { id: 6, title: "6: Tendências em Sistemas de Informação", summary: "O metaverso é apresentado como a próxima geração da internet..." }
    ],
    assessments: [{ name: "APOL 1", date: "21/08/2025"}, {name: "APOL 2", date: "21/08/2025" }, {name: "Prova atividade prática", date: "21/08/2025"}, {name: "Prova objetiva", date: "18/09/2025"}],
    assignments: [{ name: "Nenhum trabalho disponível", date: "" }],
    books: [{ name: "Sistemas de Informação Gerenciais: administrando a empresa digital", author: "LAUDON, Kenneth Craig.", library: "" }, {name: "Sistemas de Informações Gerenciais na Atualidade", author: "ELEUTERIO, Marcos A. M.", library: "" }]
  },
  "logica-programacao": {
    name: "Lógica de Programação e Algoritmos",
    icon: "",
    lessons: [
      { id: 1, title: "1: Introdução à Lógica e Algoritmos", summary: "A palavra lógica tem origem grega (do termo logos) e significa..." },
      { id: 2, title: "2: Variáveis", summary: "Um algoritmo, e consequentemente todo programa computacional, é um..." },
      { id: 3, title: "3: Algoritmos: Estruturas de Decisão", summary: "Algoritmos sequenciais são definidos como algoritmos onde todas as instruções..." },
      { id: 4, title: "4: Estruturas de Repetição", summary: "Um dos desafios comuns na programação é a repetição de tarefas..." },
      { id: 5, title: "5: Funções", summary: "Ao longo desta etapa você irá aprender um recurso bastante utilizado..." },
      { id: 6, title: "6: Tuplas, Listas, Dicionários e Strings", summary: "Ao longo desta abordagem, vamos aprender a trabalhar com variáveis compostas..." }
    ],
    assessments: [{ name: "APOL 1", date: "01/09/2025"}, {name: "APOL 2", date: "01/09/2025" }, {name: "Prova objetiva", date: "18/09/2025"}],
    assignments: [{ name: "Trabalho prático", date: "01/09/2025" }],
    books: [{ name: "Python 3 - Conceitos e Aplicações: Uma abordagem didática", author: "BANIN, Sérgio L.", library: "" }, {name: "Lógica de Programação: A construção de algoritmos e estruturas de dados com aplicações em Python", author: "FORBELLONE, André Luiz Villar", library: "" }, {name: "Lógica para Desenvolvimento de Programação de Computadores", author: "MANZANO, José Augusto Navarro G.", library: "" }]
  },
  "design-interacao": {
    name: "Design de Interação",
    icon: "",
    lessons: [
      { id: 1, title: "1: Conceitos Iniciais", summary: "Antes do desenvolvimento de qualquer produto, incluindo software, é crucial..." },
      { id: 2, title: "2: Psicologia Cognitiva", summary: "A psicologia cognitiva estuda os processos envolvidos em dar sentido..." },
      { id: 3, title: "3: Compreender o Usuário e Desenvolver Ideias", summary: "Esta aula é dedicada ao design para dispositivos móveis, com foco principal..." },
      { id: 4, title: "4: Layouts", summary: "A história do layout web começa com Tim Berners-Lee, inventor da web..." },
      { id: 5, title: "5: Ergonomia de Elementos", summary: "Esta aula trata do design para dispositivos móveis e concentra-se nas orientações..." },
      { id: 6, title: "6: Prototipação", summary: "Antes da fase de desenvolvimento de um aplicativo, é fundamental elaborar o..." }
    ],
    assessments: [{ name: "APOL 1", date: "20/10/2025"}, {name: "APOL 2", date: "20/10/2025" }, {name: "Prova objetiva", date: "10/11/2025"}],
    assignments: [{ name: "Trabalho prático", date: "20/10/2025" }],
    books: [{ name: "Interação Humano Computador", author: "BENYON. D.", library: "" }, {name: "Desenvolvimento para Dispositivos Móveis: Volume 2", author: "SIMAS, V.L.", library: "" }, {name: "Design Thinking", author: "GAVIN, A; HARRIS, P.", library: "" }]
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