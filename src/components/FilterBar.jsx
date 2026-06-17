import { SEVERITY_CONFIG, STATUS_CONFIG } from '../constants'

/**
 * Controlo de filtros — cada input chama uma função do pai (lifting state up).
 * O estado vive no App.jsx; este componente só emite eventos.
 */
function FilterBar({
  searchTerm,
  onSearchChange,
  severityFilter,
  onSeverityChange,
  statusFilter,
  onStatusChange,
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-4">
      <div className="flex flex-col gap-3 rounded-lg border border-slate-700/60 bg-slate-800/30 p-4 sm:flex-row sm:items-center">
        <input
          type="search"
          placeholder="Pesquisar por ID, Empresa, título ou serviço..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="flex-1 rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none"
        />

        <select
          value={severityFilter}
          onChange={(e) => onSeverityChange(e.target.value)}
          className="w-full sm:w-auto rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white focus:border-cyan-500 focus:outline-none"
        >
          <option value="all">Todas severidades</option>
          {Object.entries(SEVERITY_CONFIG).map(([key, { label }]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>

        <select
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
          className="w-full sm:w-auto rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white focus:border-cyan-500 focus:outline-none"
        >
          <option value="all">Todos estados</option>
          {Object.entries(STATUS_CONFIG).map(([key, { label }]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}

export default FilterBar
