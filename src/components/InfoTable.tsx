// src/components/InfoTable.tsx
// 1. Criamos uma interface de props "genérica" usando <T>.
// T será o tipo dos objetos dentro do array 'data'.
// 'extends object' garante que T seja sempre um tipo de objeto.
interface InfoTableProps<T extends object> {
  headers: string[];
  data: T[];
}

// 2. Definimos o componente como genérico: const InfoTable = <T extends object>...
const InfoTable = <T extends object>({ headers, data }: InfoTableProps<T>) => {
  // Se não houver dados, não renderizamos nada.
  if (!data || data.length === 0) {
    return null;
  }

  // 3. Pegamos as chaves do primeiro item de dados. Agora, TypeScript sabe
  // que 'keys' é um array de chaves do tipo T (ex: 'name', 'author', 'library').
  const keys = Object.keys(data[0]) as Array<keyof T>;

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #00FF00', marginBottom: '20px' }}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} style={{ border: '1px solid #00FF00', padding: '8px', backgroundColor: '#FFFBFB' }}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {keys.map((key, cellIndex) => (
              // 4. Acessamos item[key] com total segurança de tipos.
              <td key={cellIndex} style={{ border: '1px solid #00FF00', padding: '8px' }}>
                {String(item[key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InfoTable;