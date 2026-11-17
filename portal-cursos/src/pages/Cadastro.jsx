import { useState } from "react";

export default function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    curso: "",
    senha: "",
    confirmar: "",
  });

  const [erros, setErros] = useState({});
  const [sucesso, setSucesso] = useState("");

  function alterar(evento) {
    const { name, value } = evento.target;
    setForm((anterior) => ({ ...anterior, [name]: value }));
    setErros((anterior) => ({ ...anterior, [name]: "" }));
    setSucesso("");
  }

  function validar() {
    const novosErros = {};

    if (form.nome.trim().length < 3) {
      novosErros.nome = "Informe pelo menos 3 caracteres.";
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(form.email.trim())) {
      novosErros.email = "Digite um e-mail válido.";
    }

    if (!form.curso) {
      novosErros.curso = "Selecione um curso de interesse.";
    }

    if (form.senha.length < 6) {
      novosErros.senha = "Use pelo menos 6 caracteres.";
    }

    if (form.confirmar !== form.senha || !form.confirmar) {
      novosErros.confirmar = "As senhas devem ser iguais.";
    }

    return novosErros;
  }

  function enviar(evento) {
    evento.preventDefault();
    const novosErros = validar();
    setErros(novosErros);

    if (Object.keys(novosErros).length === 0) {
      setSucesso(
        `Pré-matrícula confirmada! Parabéns, ${form.nome.trim()}, sua vaga em ${form.curso} foi registrada com sucesso.`
      );
      setForm({
        nome: "",
        email: "",
        curso: "",
        senha: "",
        confirmar: "",
      });
    }
  }

  return (
    <section>
      <div className="form-header">
        <h1>Cadastro de Estudante</h1>
        <p>Preencha os dados abaixo para solicitar sua vaga na turma.</p>
      </div>

      <form onSubmit={enviar} noValidate>
        <label htmlFor="nome">Nome completo</label>
        <input
          id="nome"
          name="nome"
          placeholder="Ex.: Ana Paula Silva"
          value={form.nome}
          onChange={alterar}
          aria-invalid={!!erros.nome}
          aria-describedby={erros.nome ? "erro-nome" : undefined}
        />
        {erros.nome && (
          <small id="erro-nome" className="erro">
            {erros.nome}
          </small>
        )}

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Ex.: ana@email.com"
          value={form.email}
          onChange={alterar}
          aria-invalid={!!erros.email}
          aria-describedby={erros.email ? "erro-email" : undefined}
        />
        {erros.email && (
          <small id="erro-email" className="erro">
            {erros.email}
          </small>
        )}

        <label htmlFor="curso">Curso de interesse</label>
        <select
          id="curso"
          name="curso"
          value={form.curso}
          onChange={alterar}
          aria-invalid={!!erros.curso}
          aria-describedby={erros.curso ? "erro-curso" : undefined}
        >
          <option value="">-- Selecione um curso --</option>
          <option value="Desenvolvimento Front-end com React">
            Desenvolvimento Front-end com React
          </option>
          <option value="APIs RESTful com Node.js">
            APIs RESTful com Node.js
          </option>
          <option value="Banco de Dados e SQL na Prática">
            Banco de Dados e SQL na Prática
          </option>
        </select>
        {erros.curso && (
          <small id="erro-curso" className="erro">
            {erros.curso}
          </small>
        )}

        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          name="senha"
          type="password"
          placeholder="Mínimo de 6 caracteres"
          value={form.senha}
          onChange={alterar}
          aria-invalid={!!erros.senha}
          aria-describedby={erros.senha ? "erro-senha" : undefined}
        />
        {erros.senha && (
          <small id="erro-senha" className="erro">
            {erros.senha}
          </small>
        )}

        <label htmlFor="confirmar">Confirmar senha</label>
        <input
          id="confirmar"
          name="confirmar"
          type="password"
          placeholder="Repita a senha criada"
          value={form.confirmar}
          onChange={alterar}
          aria-invalid={!!erros.confirmar}
          aria-describedby={erros.confirmar ? "erro-confirmar" : undefined}
        />
        {erros.confirmar && (
          <small id="erro-confirmar" className="erro">
            {erros.confirmar}
          </small>
        )}

        <button type="submit">Confirmar Cadastro</button>
      </form>

      {sucesso && (
        <p className="sucesso" role="status">
          {sucesso}
        </p>
      )}
    </section>
  );
}