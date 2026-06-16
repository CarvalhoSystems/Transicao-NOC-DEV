import IncidentRow from './IncidentRow'

function IncidentTable({ incidents, selectedId, onSelect }) {
  if (incidents.length === 0) {
    return (
      <div className="rounded-lg border border-slate-700/60 bg-slate-800/30 p-8 text-center text-slate-500">
        Nenhum incidente corresponde aos filtros aplicados.
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-slate-700/60 bg-slate-800/30">
      <table className="w-full min-w-[720px] text-left">
        <thead>
          <tr className="border-b border-slate-700/60 bg-slate-900/50 text-xs uppercase tracking-wide text-slate-500">
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Empresa</th>
            <th className="px-4 py-3">Título</th>
            <th className="px-4 py-3 hidden md:table-cell">Serviço</th>
            <th className="px-4 py-3">Severidade</th>
            <th className="px-4 py-3">Estado</th>
            <th className="px-4 py-3 hidden lg:table-cell">Responsável</th>
            <th className="px-4 py-3 hidden xl:table-cell">Aberto em</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident) => (
            <IncidentRow
              key={incident.id}
              incident={incident}
              isSelected={selectedId === incident.id}
              onSelect={onSelect}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IncidentTable
