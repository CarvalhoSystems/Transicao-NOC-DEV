import { SEVERITY_CONFIG, STATUS_CONFIG } from '../constants'

function formatDate(isoString) {
  return new Date(isoString).toLocaleString('pt-PT', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}

/**
 * Uma linha da tabela — recebe callbacks para ações de triagem.
 * isSelected controla o destaque visual quando o operador clica na linha.
 */
function IncidentRow({ incident, isSelected, onSelect }) {
  const severity = SEVERITY_CONFIG[incident.severity]
  const status = STATUS_CONFIG[incident.status]

  return (
    <tr
      onClick={() => onSelect(incident.id)}
      className={`cursor-pointer border-b border-slate-700/40 transition-colors hover:bg-slate-700/30 ${
        isSelected ? 'bg-cyan-500/10' : ''
      }`}
    >
      <td className="px-4 py-3 font-mono text-sm text-cyan-400">{incident.id}</td>
      <td className="px-4 py-3 text-sm text-white">{incident.title}</td>
      <td className="px-4 py-3 text-sm text-slate-400">{incident.service}</td>
      <td className="px-4 py-3">
        <span className={`rounded border px-2 py-0.5 text-xs font-medium ${severity.badge}`}>
          {severity.label}
        </span>
      </td>
      <td className="px-4 py-3">
        <span className={`rounded border px-2 py-0.5 text-xs font-medium ${status.badge}`}>
          {status.label}
        </span>
      </td>
      <td className="px-4 py-3 text-sm text-slate-400">
        {incident.assignee ?? '—'}
      </td>
      <td className="px-4 py-3 text-xs text-slate-500">{formatDate(incident.createdAt)}</td>
    </tr>
  )
}

export default IncidentRow
