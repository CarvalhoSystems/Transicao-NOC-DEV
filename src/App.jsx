import { useState, useMemo } from "react";
import Header from "./components/Header";
import StatsBar from "./components/StatsBar";
import FilterBar from "./components/FilterBar";
import IncidentTable from "./components/IncidentTable";
import TriagePanel from "./components/TriagePanel";
import { initialIncidents } from "./data/incidents";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Biblioteca de rotas de paginas
import NovoChamado from "./components/NovoChamado"; // Novo Formulario que vai mudar de pagina
import ChamadosEncerrados from "./components/ChamadosEncerrados"; // Importando como Componente
import NavBar from "./components/NavBar"; // 1. Importando a nova NavBar
import Login from "./pages/login";
import Register from "./pages/Register";
import Email from "./pages/Email";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { NotificationProvider } from "./Context/NotificationContext"; // Certifique-se que a pasta começa com "Context" ou "context" conforme seu arquivo físico

// forçando redeploy

function App() {
  // Estado principal: lista de incidentes
  const [incidents, setIncidents] = useState(initialIncidents);

  // Filtros — quando mudam, o React re-renderiza e recalcula filteredIncidents
  const [searchTerm, setSearchTerm] = useState("");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // ID do incidente selecionado para triagem (null = nenhum)
  const [selectedId, setSelectedId] = useState(null);

  // Hook para verificar se a tela é maior que 'lg' (1024px)
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  // Novo estado para controlar a visibilidade do menu (desktop e mobile)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Filtro de incidentes memoizado
  const filteredIncidents = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return incidents.filter((incident) => {
      const matchesSearch =
        term === "" ||
        incident.id.toLowerCase().includes(term) ||
        incident.company.toLowerCase().includes(term) ||
        incident.title.toLowerCase().includes(term) ||
        incident.service.toLowerCase().includes(term);

      const matchesSeverity =
        severityFilter === "all" || incident.severity === severityFilter;

      const matchesStatus =
        statusFilter === "all" || incident.status === statusFilter;

      return matchesSearch && matchesSeverity && matchesStatus;
    });
  }, [incidents, searchTerm, severityFilter, statusFilter]);

  // Encontra o objeto completo do incidente selecionado
  const selectedIncident = incidents.find((i) => i.id === selectedId) ?? null;

  function updateIncident(id, changes) {
    setIncidents((prev) =>
      prev.map((incident) =>
        incident.id === id ? { ...incident, ...changes } : incident,
      ),
    );
  }

  function handleAssign(id, assignee) {
    updateIncident(id, {
      assignee,
      status: assignee ? "in_progress" : "open",
    });
  }

  function handleStatusChange(id, status) {
    updateIncident(id, { status });
  }

  function handleSeverityChange(id, severity) {
    updateIncident(id, { severity });
  }

  // Adiciona um novo incidente vindo do formulário de IA
  function handleAddIncident(newIncident) {
    setIncidents((prev) => [newIncident, ...prev]);
  }

  return (
    <NotificationProvider>
      {" "}
      {/* Envolvendo tudo para o contexto funcionar no Header e no NovoChamado */}
      <BrowserRouter>
        {/* 2. Layout principal com Flexbox */}
        <div className="flex min-h-screen bg-slate-950 text-slate-200">
          <NavBar
            isDesktop={isDesktop}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />

          {/* 3. Container do conteúdo principal */}
          <div className="flex-1 overflow-x-auto">
            {/* Passamos a função para o Header controlar o menu no mobile */}
            <Header onMenuClick={() => setIsMenuOpen((prev) => !prev)} />
            <Routes>
              {/* Rota principal do Dashboard */}
              <Route
                path="/"
                element={
                  <>
                    <StatsBar incidents={incidents} />
                    <FilterBar
                      searchTerm={searchTerm}
                      onSearchChange={setSearchTerm}
                      severityFilter={severityFilter}
                      onSeverityChange={setSeverityFilter}
                      statusFilter={statusFilter}
                      onStatusChange={setStatusFilter}
                    />

                    <main className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
                      <IncidentTable
                        incidents={filteredIncidents}
                        selectedId={selectedId}
                        onSelect={setSelectedId}
                      />
                    </main>

                    <TriagePanel
                      incident={selectedIncident}
                      onAssign={handleAssign}
                      onStatusChange={handleStatusChange}
                      onSeverityChange={handleSeverityChange}
                      onClose={() => setSelectedId(null)}
                    />
                  </>
                }
              />
              {/* Rota para o Login */}
              <Route path="/login" element={<Login />} />

              {/* Rota para o Register */}
              <Route path="/register" element={<Register />} />

              {/* Rota para o Email */}
              <Route path="/email" element={<Email />} />

              {/* Rota para o formulário de novo chamado */}
              <Route
                path="/novo-chamado"
                element={<NovoChamado onAddIncident={handleAddIncident} />}
              />

              {/* Rota para a área de Chamados Encerrados */}
              <Route
                path="/encerrados"
                element={
                  <>
                    <StatsBar incidents={incidents} />
                    <ChamadosEncerrados
                      incidents={incidents}
                      selectedId={selectedId}
                      onSelect={setSelectedId}
                    />

                    <TriagePanel
                      incident={selectedIncident}
                      onAssign={handleAssign}
                      onStatusChange={handleStatusChange}
                      onSeverityChange={handleSeverityChange}
                      onClose={() => setSelectedId(null)}
                    />
                  </>
                }
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
