/**
 * Dados iniciais simulados — num projeto real viriam de uma API.
 * Mantemos fora do componente para o App.jsx não ficar gigante.
 */
export const initialIncidents = [
  {
    id: "INC-1042",
    title: "Falha de inicialização na WKS02 Cloudsy após restart",
    service: "Telefonia / Voip",
    severity: "critical",
    status: "open",
    assignee: null,
    createdAt: "2026-06-12T08:14:00",
    description:
      "Realizado o restart preventivo na workstation WKS02 da Cloudsy, porém a máquina não subiu os serviços de telefonia. Foi necessário acionar o suporte de terceiro (Avaya) para atuação emergencial.",
  },
  {
    id: "INC-1041",
    title: "Crash na API: Call Stack Size Exceeded no processamento de logs",
    service: "API-Gateway",
    severity: "high",
    status: "in_progress",
    assignee: "Ana Silva",
    createdAt: "2026-06-12T07:45:00",
    description:
      "Erro RangeError: Maximum call stack size exceeded disparado ao processar recursivamente o mapeamento de métricas do NOC na rota /api/v1/metrics.",
  },
  {
    id: "INC-1040",
    title: "Certificado TIM a expirar em 10 dias",
    service: "Segurança",
    severity: "medium",
    status: "open",
    assignee: null,
    createdAt: "2026-06-12T06:30:00",
    description: "Certificado *.portal.cliente expira a 14/06/2026.",
  },
  {
    id: "INC-1039",
    title: "Alerta de disco a 85% no servidor de logs",
    service: "Infraestrutura",
    severity: "low",
    status: "open",
    assignee: null,
    createdAt: "2026-06-12T05:10:00",
    description: "Partição /var/log atingiu threshold de warning.",
  },
  {
    id: "INC-1038",
    title: "Status Tronco TRK-TIM-BF",
    service: "Aplicações",
    severity: "critical",
    status: "in_progress",
    assignee: "Yasmin Borges",
    createdAt: "2026-06-12T04:22:00",
    description: "Timeout em todas as chamadas POST /payments.",
  },
  {
    id: "INC-1037",
    title: "Backup noturno Tel Telematica",
    service: "Infraestrutura, NOC",
    severity: "low",
    status: "resolved",
    assignee: "Maria Santos",
    createdAt: "2026-06-22T23:00:00",
    description: "2 ficheiros ignorados por lock — verificar logs.",
  },
];
