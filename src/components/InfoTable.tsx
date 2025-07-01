// src/components/InfoTable.tsx
interface InfoTableProps<T extends object> {
  headers: string[];
  data: T[];
}

const InfoTable = <T extends object>({ headers, data }: InfoTableProps<T>) => {
  // Se não houver dados, não renderizamos nada.
  if (!data || data.length === 0) {
    return null;
  }

  const keys = Object.keys(data[0]) as Array<keyof T>;

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #4ccdff', marginBottom: '20px' }}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} style={{ border: '1px solid #72aac075', padding: '8px', backgroundColor: '#72aac015' }}>
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
              <td key={cellIndex} style={{ border: '1px solid #72aac075', padding: '8px' }}>
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