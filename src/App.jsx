import { useState, useMemo } from "react";
import Header from "./components/Header";
import StatsBar from "./components/StatsBar";
import FilterBar from "./components/FilterBar";
import IncidentTable from "./components/IncidentTable";
import TriagePanel from "./components/TriagePanel";
import { initialIncidents } from "./data/incidents";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //Biblioteca de rotas de paginas
import NovoChamado from "./components/NovoChamado"; //Novo Formulario que vai mudar de pagina

function App() {
  // Estado principal: lista de incidentes (equivalente ao array que manipulavas no Vanilla JS)
  const [incidents, setIncidents] = useState(initialIncidents);

  // Filtros — quando mudam, o React re-renderiza e recalcula filteredIncidents
  const [searchTerm, setSearchTerm] = useState("");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // ID do incidente selecionado para triagem (null = nenhum)
  const [selectedId, setSelectedId] = useState(null);

  /**
   * useMemo evita recalcular o filtro a cada render se os inputs não mudaram.
   * Para o teste, o importante é perceber: filtramos o array antes de passar à tabela.
   */
  const filteredIncidents = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return incidents.filter((incident) => {
      const matchesSearch =
        term === "" ||
        incident.id.toLowerCase().includes(term) ||
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

  /**
   * Padrão imutável: em vez de mutar o objeto, criamos um novo array.
   * No Vanilla JS farias incident.assignee = name; aqui o React precisa de uma cópia nova
   * para detetar a mudança e atualizar o ecrã.
   */
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
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-200">
        <Header />

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

                <main className="mx-auto grid max-w-7xl gap-6 px-4 pb-8 sm:px-6 lg:grid-cols-[1fr_320px]">
                  <IncidentTable
                    incidents={filteredIncidents}
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
                </main>
              </>
            }
          />

          {/* Rota para o formulário de novo chamado */}
          <Route
            path="/novo-chamado"
            element={<NovoChamado onAddIncident={handleAddIncident} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
