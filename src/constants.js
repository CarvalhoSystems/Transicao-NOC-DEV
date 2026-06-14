/**
 * Mapas de labels e cores — centralizados para evitar strings repetidas.
 * Se amanhã mudarem "critical" para "P1", alteramos só aqui.
 */
export const SEVERITY_CONFIG = {
  critical: {
    label: "Crítico",
    badge: "bg-red-500/20 text-red-400 border-red-500/40",
  },
  high: {
    label: "Alto",
    badge: "bg-orange-500/20 text-orange-400 border-orange-500/40",
  },
  medium: {
    label: "Médio",
    badge: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
  },
  low: {
    label: "Baixo",
    badge: "bg-blue-500/20 text-blue-400 border-blue-500/40",
  },
};

// Estado dos Chamados 
export const STATUS_CONFIG = {
  open: {
    label: "Aberto",
    badge: "bg-slate-500/20 text-slate-300 border-slate-500/40",
  },
  in_progress: {
    label: "Em curso",
    badge: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40",
  },
  resolved: {
    label: "Resolvido",
    badge: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
  },
};

// Operadores do NOC 
export const NOC_TEAM = [
  "Ana Silva",
  "Rodrigo Carvalho",
  "Yasmin Borges",
  "Pedro Lima",
  "Paulo Santos",
];
