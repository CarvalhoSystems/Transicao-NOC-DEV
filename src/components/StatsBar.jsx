/**
 * Recebe a lista completa via props e calcula contagens.
 * Não guarda estado próprio — é um componente "burro" (só apresenta dados).
 */
function StatsBar({ incidents }) {
  const openCount = incidents.filter((i) => i.status === 'open').length
  const inProgressCount = incidents.filter((i) => i.status === 'in_progress').length
  const criticalCount = incidents.filter((i) => i.severity === 'critical').length

  const cards = [
    { label: 'Total', value: incidents.length, color: 'text-white' },
    { label: 'Abertos', value: openCount, color: 'text-slate-300' },
    { label: 'Em curso', value: inProgressCount, color: 'text-cyan-400' },
    { label: 'Críticos', value: criticalCount, color: 'text-red-400' },
  ]

  return (
    <section className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-6 py-4 sm:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-lg border border-slate-700/60 bg-slate-800/50 px-4 py-3"
        >
          <p className="text-xs uppercase tracking-wide text-slate-500">{card.label}</p>
          <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
        </div>
      ))}
    </section>
  )
}

export default StatsBar
