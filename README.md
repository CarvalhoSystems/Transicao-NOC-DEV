# 🚀 Transição NOC-DEV - Dashboard de Incidentes

Este projeto é uma plataforma de gerenciamento de incidentes (NOC - Network Operations Center) desenvolvida durante a transição de fluxos manuais para automação e desenvolvimento (DEV). O objetivo é centralizar a triagem de alertas, monitoramento de saúde de serviços e atribuição de responsáveis em uma interface moderna e performática.

## 🛠️ Tecnologias Utilizadas

- **React 18**: Biblioteca principal para construção da UI.
- **React Router DOM**: Gerenciamento de rotas para navegação entre o Dashboard e o formulário de novos chamados.
- **Tailwind CSS**: Estilização baseada em utilitários para um design responsivo e tema dark (Slate/Cyan).
- **Lucide React** (implícito): Ícones para interface.
- **Hooks Avançados**: Uso de `useMemo` para otimização de filtros e `useState` para gestão de estado imutável.

## ✨ Funcionalidades

- **Dashboard de Estatísticas**: Visualização rápida de incidentes totais, abertos, em curso e críticos.
- **Filtragem Inteligente**: Busca em tempo real por ID, título ou serviço, além de filtros por severidade e status.
- **Painel de Triagem**: Interface lateral para seleção de incidentes onde é possível:
  - Visualizar detalhes técnicos.
  - Atribuir um operador do time de NOC.
  - Alterar o estado (Status) e a prioridade (Severidade).
- **Abertura de Chamados**: Rota dedicada para criação de novos incidentes com integração de estado global.
- **Design Responsivo**: Adaptado para diferentes resoluções com foco em legibilidade de dados operacionais.

## 📂 Estrutura do Projeto

```text
src/
├── components/        # Componentes reutilizáveis (Header, StatsBar, Table, etc.)
├── data/              # Mock de dados iniciais para simulação de API.
├── constants/         # Configurações de cores, nomes de times e estados.
├── App.jsx            # Lógica central, roteamento e gestão de estado global.
└── main.jsx           # Ponto de entrada da aplicação.
```

## 🚀 Como Executar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/transicao-noc-dev.git
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   `http://localhost:5173`

## 🧠 Conceitos de Engenharia Aplicados

- **Imutabilidade**: Atualização de estado seguindo as melhores práticas do React para garantir re-renderizações previsíveis.
- **Separação de Preocupações**: Componentes "burros" (presentational) focados em UI e lógica centralizada no `App.jsx`.
- **Performance**: Otimização de cálculos de filtragem para evitar processamento desnecessário em listas grandes.

---

Desenvolvido como parte da evolução técnica de operações de rede para engenharia de software. 💡