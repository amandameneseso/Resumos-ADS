# 📘 Repositório de Estudos

<!-- ![Imagem do Projeto](https://i.imgur.com/w2Y3wXN.png)  -->

Este é um site pessoal criado para ser um repositório dos resumos que fiz enquanto estudo Análise e Desenvolvimento de Sistemas. O projeto foi desenvolvido com React e TypeScript.

**[Ver a demonstração](https://resumos-ads.vercel.app/)**

## Funcionalidades

* **Navegação por disciplinas:** Uma sidebar à esquerda permite navegar facilmente entre as diferentes disciplinas do curso.
* **Resumos de aulas:** Cada aula é apresentada em formato de resumo, com suporte completo a [Markdown](https://www.markdownguide.org/basic-syntax/).
* **Conteúdo modular:** Os resumos de cada aula são armazenados em arquivos `.md` separados, mantendo o projeto organizado e fácil de atualizar.
* **Calendário:** Uma página de calendário exibe todas as datas de avaliações e trabalhos de todas as disciplinas, com cores diferentes para cada tipo de evento.

## Tecnologias utilizadas

* **Framework:** [React](https://reactjs.org/)
* **Build tool:** [Vite](https://vitejs.dev/)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Roteamento:** [React Router DOM](https://reactrouter.com/)
* **Renderização de markdown:** [React-Markdown](https://github.com/remarkjs/react-markdown)
* **Componente de calendário:** [FullCalendar](https://fullcalendar.io/)
* **Gerenciador de pacotes:** [Yarn](https://yarnpkg.com/)
* **Estilização:** CSS puro com variáveis

## Como rodar o projeto localmente

Para rodar este projeto na sua máquina, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/amandameneseso/Resumos-ADS.git]
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd Resumos-ADS
    ```

3.  **Instale as dependências:**
    ```bash
    yarn install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    yarn dev
    ```

5.  Abra seu navegador e acesse `http://localhost:5173` (ou o endereço que aparecer no seu terminal).

## Licença

Este projeto está sob a licença MIT.