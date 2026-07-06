import React, { useState } from "react";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { FiType, FiMessageSquare } from "react-icons/fi";

export default function Email() {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envio simulada
    console.log("Enviando e-mail:", { recipient, subject, message });
    alert(
      `E-mail para ${recipient} com o assunto "${subject}" foi enviado com sucesso! (Verifique o console)`,
    );
    // Limpa o formulário
    setRecipient("");
    setSubject("");
    setMessage("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Enviar E-mail</h2>
        <p style={styles.subtitle}>
          Entre em contato com a empresa que abriu o chamado
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Para (E-mail da Empresa)</label>
            <div style={styles.inputWrapper}>
              <FaEnvelope style={styles.icon} />
              <input
                type="email"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="empresa@exemplo.com"
                required
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Assunto</label>
            <div style={styles.inputWrapper}>
              <FiType style={styles.icon} />
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Assunto do e-mail"
                required
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Mensagem</label>
            <div style={styles.inputWrapper}>
              <FiMessageSquare style={styles.icon} />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite sua mensagem aqui..."
                required
                style={{ ...styles.input, height: "120px", resize: "none" }}
              />
            </div>
          </div>

          <button type="submit" style={styles.button}>
            <FaPaperPlane style={{ marginRight: "8px" }} />
            Enviar E-mail
          </button>
        </form>
      </div>
    </div>
  );
}

// Estilos reutilizados e adaptados de outras páginas
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 64px)",
    fontFamily: "system-ui, sans-serif",
    backgroundColor: "var(--bg-color)",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "2.5rem",
    borderRadius: "12px",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    width: "100%",
    maxWidth: "500px",
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
  form: { display: "flex", flexDirection: "column", gap: "1.25rem" },
  inputGroup: { display: "flex", flexDirection: "column", gap: "0.5rem" },
  label: { fontSize: "0.875rem", fontWeight: "500", color: "#000000" },
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
    width: "100%",
    fontSize: "1rem",
    outline: "none",
    border: "none",
    backgroundColor: "transparent",
    color: "#000000",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  icon: { color: "#6b7280" },
};
