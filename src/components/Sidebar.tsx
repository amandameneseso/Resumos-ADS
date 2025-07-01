// src/components/Sidebar.tsx
import { NavLink } from 'react-router-dom';
import { studyData } from '../data';

const BoxTitleBar = ({ title }: { title: string }) => (
  <div className="box-title">
    <span>{title}</span>
    <span className="window-controls">─  ▢  X</span>
  </div>
);

function Sidebar() {
  const subjects = Object.keys(studyData);

  return (
    <aside className="sidebar-column">
      
      {/* Caixa de Navegação */}
      <div className="sidebar-box">
        <BoxTitleBar title="Navegação" />
        <div>
          <ul>
            <li className="box-content"><NavLink to="/" end>Início</NavLink></li>
            <li className="box-content"><NavLink to="/calendario">Calendário</NavLink></li>
          </ul>
        </div>
      </div>

      {/* Caixa de Disciplinas */}
      <div className="sidebar-box">
        <BoxTitleBar title="Disciplinas" />
        <div>
          <ul>
            {subjects.map(id => (
              <li key={id} className="box-content">
                <NavLink to={`/disciplina/${id}`}>
                  {studyData[id].name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;