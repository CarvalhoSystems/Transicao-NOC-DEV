import { NOC_TEAM, STATUS_CONFIG, SEVERITY_CONFIG } from "../constants";
import { Link } from "react-router-dom"; //Biblioteca de rotas de paginas

/**
 * Painel lateral de triagem — aparece quando há um incidente selecionado.
 * Aqui o operador atribui responsável e altera o estado.
 */
function TriagePanel({
  incident,
  onAssign,
  onStatusChange,
  onSeverityChange,
  onClose,
}) {
  return (
    <aside className="flex flex-col gap-4">
      {/* Card de Triagem do Incidente Selecionado */}
      {incident ? (
        <div className="rounded-lg border border-slate-700/60 bg-slate-800/50 p-5 shadow-xl backdrop-blur-sm animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="mb-4 flex items-start justify-between gap-2">
            <div>
              <p className="font-mono text-[10px] font-bold text-cyan-400/60 tracking-[0.2em] uppercase">
                {incident.id}
              </p>
              <h2 className="text-lg font-bold text-white leading-tight mt-1">
                {incident.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-1.5 text-slate-500 hover:bg-slate-700/50 hover:text-white transition-all"
              aria-label="Fechar painel"
            >
              ✕
            </button>
          </div>

          <div className="mb-6 rounded-md bg-slate-950/40 p-3 border border-slate-700/30">
            <p className="text-sm leading-relaxed text-slate-300">
              {incident.description}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="assignee"
                className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-slate-500"
              >
                Atribuir Responsável
              </label>
              <select
                id="assignee"
                value={incident.assignee ?? ""}
                onChange={(e) => onAssign(incident.id, e.target.value || null)}
                className="w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white transition-colors focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
              >
                <option value="">— Selecione um operador —</option>
                {NOC_TEAM.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="status"
                  className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-slate-500"
                >
                  Estado
                </label>
                <select
                  id="status"
                  value={incident.status}
                  onChange={(e) => onStatusChange(incident.id, e.target.value)}
                  className="w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white transition-colors focus:border-cyan-500 focus:outline-none"
                >
                  {Object.entries(STATUS_CONFIG).map(([key, { label }]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="severity"
                  className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-slate-500"
                >
                  Severidade
                </label>
                <select
                  id="severity"
                  value={incident.severity}
                  onChange={(e) =>
                    onSeverityChange(incident.id, e.target.value || null)
                  }
                  className="w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white transition-colors focus:border-cyan-500 focus:outline-none"
                >
                  {Object.entries(SEVERITY_CONFIG).map(([key, { label }]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex min-h-[280px] items-center justify-center rounded-lg border border-dashed border-slate-700/60 bg-slate-800/10 p-6 text-center text-xs text-slate-500 leading-relaxed italic">
          Selecione um incidente na tabela <br /> para realizar a triagem.
        </div>
      )}

      {/* Botão de Abrir Chamado separado em outra DIV */}
      <div className="rounded-lg border border-slate-700/40 bg-slate-900/40 p-4 shadow-lg border-t-2 border-t-cyan-500/20">
        <Link
          to="/novo-chamado"
          className="flex items-center justify-center gap-2 w-full rounded-md bg-cyan-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-900/20 hover:bg-cyan-500 active:scale-[0.98] transition-all"
        >
          <span className="text-lg leading-none">+</span> Abrir Novo Chamado
        </Link>
      </div>
    </aside>
  );
}

export default TriagePanel;
