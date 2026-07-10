import React, { createContext, useState, useContext } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [hasNewNotifications, setHasNewNotifications] = useState(false);

  // Função que a tela de "Novo Chamado" vai chamar para acender o sininho
  const triggerNotification = () => {
    setHasNewNotifications(true);
  };

  // Função que o sininho chama para apagar a bolinha vermelha
  const clearNotifications = () => {
    setHasNewNotifications(false);
  };

  return (
    <NotificationContext.Provider
      value={{ hasNewNotifications, triggerNotification, clearNotifications }}
    >
      {children}
    </NotificationContext.Provider>

  );
}

// Hook personalizado para facilitar o uso nos componentes
export function useNotifications() {
  return useContext(NotificationContext);
}

// Compatibilidade: algumas versões antigas do código podem importar userNotifications
export { useNotifications as userNotifications };
