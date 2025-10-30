// src/pages/HomePage.tsx
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <div className="divider-top">
        {/* <img className="img-topo" src="images/83cf3400.png" alt="" /> */}
        <img className="img-topo" src="images/divider4.png" alt="" />
        <img className="img-topo" src="images/divider4.png" alt="" />
        <img className="img-topo" src="images/divider4.png" alt="" />
        <img className="img-topo" src="images/divider4.png" alt="" />
        <img className="img-topo" src="images/divider4.png" alt="" />
        <img className="img-topo" src="images/divider4.png" alt="" />
        <img className="img-topo" src="images/divider4.png" alt="" />
        <img className="img-topo" src="images/divider4.png" alt="" />
      </div>

      <h1>Análise e Desenvolvimento de Sistemas</h1>
      <hr />
      <div>
        <p>Bem-vindo(a)! ✧</p>
        <p> Este é o meu (nosso) cantinho de estudos de Análise e Desenvolvimento de Sistemas! Fiz esse site com o intuito de servir como um repositório dos resumos que fiz durante os estudos. Aqui você encontra conteúdos organizados por disciplina e questões ao final de cada resumo para facilitar seus estudos. Também fiz um calendário para me ajudar na organização das datas das provas e atividades. Seja bem-vindo(a) e aproveite sua estadia! ദ്ദി(˵ •̀ ᴗ - ˵ ).</p>
        <div className="quote">
         <p>“O sucesso é a soma de pequenos esforços repetidos dia após dia.”</p>
         <img className="img-topo" src="images/pen_4.gif" alt="" />
        </div>
      </div>

      {/* Seções lado a lado */}
      <div className="sections-container">
        <div className="section">
          <h2><img src="images/newe5.gif" alt="" /> Atualizações</h2>
          <ul>
            <p>23-09-2025: Resumos adicionados em Fundamentos de Desenvolvimento de Software.</p>
            <p>27-09-2025: Atualização no layout da home.</p>
            <p>29-10-2025: Adicionada a disciplina de Lógica de Programação e Algoritmos.</p>
            <p>30-10-2025: Adicionada a disciplina de Design de Interação.</p>
          </ul>
        </div>

        <div className="section">
          <h2>Dicas de estudo</h2>
          <ul>
            <li>Separe a garrafa de água e beba pelo menos 3x ao dia;</li>
            <li>Coloque sua playlist de estudos preferida;</li>
            <li>Limpe toda sua mesa/local de estudo;</li>
            <li>Use as questões ao final de cada aula como revisão.</li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <em>"O conhecimento que adquirimos não merece ficar parado. Compartilhar tudo o que sabemos e gerar valor na vida de outras pessoas pode ter efeitos incríveis. Viver em constante compartilhamento de informações ajuda nossa comunidade profissional a evoluir cada vez mais."</em>
    </div>
  );
}

export default HomePage;