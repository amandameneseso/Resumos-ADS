// src/components/Sidebar.tsx
import { NavLink } from "react-router-dom";
import { studyData } from "../data";

function Sidebar() {
  const subjects = Object.keys(studyData);

  return (
    <nav
      style={{
        borderRight: "2px dashed #BEE1FF",
        paddingRight: "20px",
        maxWidth: "200px",
      }}
    >
      <h2>Navegação</h2>

      <ul>
        <li
          style={{ marginBottom: "15px", marginLeft: "15px", padding: "2px" }}
        >
          <NavLink to="/" end>
            Início
          </NavLink>
        </li>

        <li style={{ marginBottom: '15px', marginLeft: '15px', padding: '2px' }}>
          <NavLink to="/calendario">
            Calendário
          </NavLink>
        </li>

        <hr
          style={{
            border: "none",
            borderBottom: "1px solid #BEE1FF",
            margin: "15px 0",
          }}
        />

        <h3>Disciplinas</h3>

        {subjects.map((id) => (
          <li
            key={id}
            style={{ marginBottom: "10px", marginLeft: "15px", padding: "2px" }}
          >
            <NavLink to={`/disciplina/${id}`}>{studyData[id].name}</NavLink>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "30px", border: "2px solid #BEE1FF", borderRadius: "7px", padding: "15px", margin: "30px 5px", fontSize: "14px", lineHeight: "1.3" }}>
        <div>Antes de iniciar os estudos:</div>
        <ul>
          <li>limpe toda sua mesa de estudo</li>
          <li>
            deixe seu celular longe do seu alcance (se usa ele, coloque no mudo)
          </li>
          <li>coloque sua playlist de estudos preferida </li>
          <li>separe a garrafa de água e beba pelo menos 3x ao dia</li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
