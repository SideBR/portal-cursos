import { Link } from "react-router";

export default function Inicio() {
  return (
    <section>
      <div className="hero">
        <span className="hero-tag">Inscrições Abertas 2026</span>
        <h1>Bem-vindo à Academia Tech Palmas</h1>
        <p>
          Desenvolva habilidades práticas para o mercado de tecnologia com
          trilhas focadas em projetos reais. Escolha sua área de interesse e
          faça sua pré-matrícula online em poucos segundos.
        </p>
        <Link to="/cadastro" className="btn-cta">
          Fazer minha inscrição agora &rarr;
        </Link>
      </div>

      <h2 className="secao-titulo">Trilhas de Formação Disponíveis</h2>
      <div className="cursos-grid">
        <article className="curso-card">
          <h3>Front-end com React</h3>
          <p>
            Interfaces modernas, componentização, rotas SPA e gerenciamento de
            estado.
          </p>
          <span className="curso-carga">Carga horária: 60h</span>
        </article>

        <article className="curso-card">
          <h3>APIs RESTful com Node.js</h3>
          <p>
            Construção de servidores, autenticação, regras de negócio e
            integração web.
          </p>
          <span className="curso-carga">Carga horária: 60h</span>
        </article>

        <article className="curso-card">
          <h3>Banco de Dados e SQL</h3>
          <p>
            Modelagem relacional, consultas otimizadas e persistência segura de
            dados.
          </p>
          <span className="curso-carga">Carga horária: 40h</span>
        </article>
      </div>
    </section>
  );
}