import { useState } from "react";
import IncidentRow from "./IncidentRow";

function IncidentTable({ incidents, selectedId, onSelect }) {
  // Estado para controlar a ordem: 'asc' (crescente) ou 'desc' (decrescente)
  const [sortOrder, setSortOrder] = useState("asc");

  if (incidents.length === 0) {
    return (
      <div className="rounded-lg border border-slate-700/60 bg-slate-800/30 p-8 text-center text-slate-500">
        Nenhum incidente corresponde aos filtros aplicados.
      </div>
    );
  }

  // Ordena a lista de incidentes com base no ID antes de renderizar
  const sortedIncidents = [...incidents].sort((a, b) => {
    // Se o ID for uma String/Texto, use localCompare. Se for número, use a - b.
    if (sortOrder === "asc") {
      return String(a.id).localeCompare(String(b.id), undefined, {
        numeric: true,
      });
    } else {
      return String(b.id).localeCompare(String(a.id), undefined, {
        numeric: true,
      });
    }
  });

  return (
    <div className="space-y-3">
      {/* Container do Select de Ordenação */}
      <div className="flex justify-end items-center gap-2">
        <label
          htmlFor="sort-id"
          className="text-xs uppercase tracking-wide text-slate-500 font-medium"
        >
          Ordenar ID:
        </label>
        <select
          id="sort-id"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="rounded border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-300 shadow-sm focus:border-slate-500 focus:outline-none"
        >
          <option value="asc">Crescente (Menor primeiro)</option>
          <option value="desc">Decrescente (Maior primeiro)</option>
        </select>
      </div>

      {/* Tabela */}
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
            {/* Agora mapeamos a lista já ordenada */}
            {sortedIncidents.map((incident) => (
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
    </div>
  );
}

export default IncidentTable;
