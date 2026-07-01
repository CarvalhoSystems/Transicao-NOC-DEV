// Futuras instalacoes no projeto !!!
import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function Login({ onSwitchPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login enviado:", { email, password });
    alert("Tentativa de login enviada! Verifique o console do navegador.");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Bem-vindo de volta</h2>
        <p style={styles.subtitle}>
          Insira suas credenciais para acessar sua conta
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>E-mail</label>
            {/* Invólucro para o ícone e o input */}
            <div style={styles.inputWrapper}>
              <FaEnvelope style={styles.icon} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Senha</label>
            {/* Invólucro para o ícone e o input */}
            <div style={styles.inputWrapper}>
              <FaLock style={styles.icon} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={styles.input}
              />
            </div>
          </div>

          <button type="submit" style={styles.button}>
            Entrar
          </button>
        </form>

        <p style={styles.footerText}>
          Não tem uma conta?{""}
          <span onClick={onSwitchPage} style={styles.link}>
            Cadastre-se aqui
          </span>
        </p>
      </div>
    </div>
  );
}

// Estilos compartilhados e encapsulados no objeto
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 64px)", // Ocupa a altura total menos o Header
    fontFamily: "system-ui, sans-serif",
    backgroundColor: "#f3f4f6", // Fundo claro restaurado
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "2.5rem",
    borderRadius: "12px",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    width: "100%",
    maxWidth: "400px",
  },
  title: {
    margin: "0 0 0.5rem 0",
    color: "#111827",
    fontSize: "1.75rem",
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    margin: "0 0 2rem 0",
    color: "#6b7280",
    fontSize: "0.9rem",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    marginBottom: "1rem",
  },
  label: {
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#374151",
  },
  // Novo estilo para o container do input + ícone
  inputWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    padding: "0.75rem",
    backgroundColor: "#ffffff",
  },
  input: {
    // Estilos de borda e padding foram para o inputWrapper
    width: "100%",
    fontSize: "1rem",
    outline: "none",
    border: "none",
    backgroundColor: "transparent",
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "0.5rem",
  },
  footerText: {
    marginTop: "1.5rem",
    textAlign: "center",
    fontSize: "0.875rem",
    color: "#4b5563",
  },
  link: {
    color: "#2563eb",
    fontWeight: "600",
    cursor: "pointer",
    textDecoration: "underline",
  },
  // Novo estilo para o ícone
  icon: {
    color: "#6b7280",
  },
};