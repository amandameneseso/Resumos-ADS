// src/utils/formatEvents.ts
import { studyData } from '../data';

// Função para converter data de DD/MM/AAAA para AAAA-MM-DD
const convertDate = (dateStr: string): string => {
  if (!dateStr || dateStr.length < 10) return '';
  const [day, month, year] = dateStr.split('/');
  
  // CORREÇÃO: Usando a sintaxe de template literal corretamente
  return `${year}-${month}-${day}`;
};

export const getCalendarEvents = () => {
  const events = [];

  for (const subjectId in studyData) {
    const subject = studyData[subjectId];

    // Processa as avaliações
    for (const assessment of subject.assessments) {
      // Ignora entradas "placeholder"
      if (assessment.name.toLowerCase().includes('nenhuma')) continue;

      events.push({
        // CORREÇÃO: Usando a sintaxe de template literal corretamente
        title: `Prova: ${assessment.name} (${subject.name})`,
        date: convertDate(assessment.date),
        color: '#A0C4FF', // Cor de evento para avaliações (azul)
        textColor: '#1E293B'
      });
    }

    // Processa os trabalhos
    for (const assignment of subject.assignments) {
      if (assignment.name.toLowerCase().includes('nenhum')) continue;

      events.push({
        // CORREÇÃO: Usando a sintaxe de template literal corretamente
        title: `Trabalho: ${assignment.name} (${subject.name})`,
        date: convertDate(assignment.date),
        color: '#FFD6A5', // Cor de evento para trabalhos (pêssego)
        textColor: '#4D2F00'
      });
    }
  }

  return events;
};