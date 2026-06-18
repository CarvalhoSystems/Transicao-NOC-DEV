import IncidentTable from "./IncidentTable";

function ChamadosEncerrados({ incidents, selectedId, onSelect }) {
  // Filtramos apenas os incidentes que possuem o status 'resolved'
  const resolvedIncidents = incidents.filter((i) => i.status === "resolved");

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">Chamados Encerrados</h2>
        <p className="text-sm text-slate-400">
          Histórico de incidentes que já foram resolvidos pela equipe de NOC.
        </p>
      </div>

      <IncidentTable
        incidents={resolvedIncidents}
        selectedId={selectedId}
        onSelect={onSelect}
      />
    </main>
  );
}

export default ChamadosEncerrados;
