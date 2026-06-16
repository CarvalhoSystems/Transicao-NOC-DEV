import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NovoChamado({ onAddIncident }) {
  const navigate = useNavigate();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    description: "",
    service: "",
  });

  // Simulação de lógica de IA para classificação
  const analyzeWithAI = (title, description) => {
    const text = (title + " " + description).toLowerCase();

    let severity = "low";
    // Lógica de Severidade
    if (
      text.includes("fora") ||
      text.includes("down") ||
      text.includes("parado") ||
      text.includes("critical")
    ) {
      severity = "critical";
    } else if (
      text.includes("lento") ||
      text.includes("erro") ||
      text.includes("falha")
    ) {
      severity = "high";
    } else if (text.includes("ajuda") || text.includes("duvida")) {
      severity = "medium";
    }

    // Lógica de Categorização (Serviço)
    let service = "Outros";
    if (
      text.includes("internet") ||
      text.includes("wifi") ||
      text.includes("rede") ||
      text.includes("ping") ||
      text.includes("switch")
    ) {
      service = "Redes";
    } else if (
      text.includes("servidor") ||
      text.includes("backup") ||
      text.includes("storage") ||
      text.includes("vm") ||
      text.includes("nuvem")
    ) {
      service = "Infraestrutura";
    } else if (
      text.includes("bug") ||
      text.includes("api") ||
      text.includes("sistema") ||
      text.includes("erro de código") ||
      text.includes("crash") || // Adicionado para cobrir erros de dev comuns
      text.includes("stack")
    ) {
      service = "Desenvolvimento";
    } else if (
      text.includes("monitoramento") ||
      text.includes("zabbix") ||
      text.includes("alerta") ||
      text.includes("dashboard")
    ) {
      service = "NOC";
    } else if (
      text.includes("telefone") ||
      text.includes("ramal") ||
      text.includes("voip") ||
      text.includes("cloudsy") || // Adicionado para o seu exemplo real!
      text.includes("avaya") // Adicionado para o seu exemplo real!
    ) {
      service = "Telefonia";
    }

    return { severity, service };
  };

  async function handleFormSubmit(event) {
    event.preventDefault();
    if (!formData.company || !formData.title || !formData.description) {
      return alert("Preencha o nome da empresa, o título e a descrição!");
    }

    setIsAnalyzing(true);

    // Simulando atraso de processamento da IA
    setTimeout(() => {
      const { severity, service } = analyzeWithAI(
        formData.title,
        formData.description,
      );

      const newIncident = {
        id: `INC-${Math.floor(1000 + Math.random() * 9000)}`,
        company: formData.company,
        title: formData.title,
        description: formData.description,
        service: service,
        severity: severity,
        status: "open",
        assignee: null,
        createdAt: new Date().toISOString(),
      };

      onAddIncident(newIncident);
      setIsAnalyzing(false);
      navigate("/"); // Volta para o dashboard
    }, 1500);
  }

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center p-6 bg-slate-950">
      <div className="w-full max-w-2xl rounded-xl border border-slate-800 bg-slate-900/50 p-8 shadow-2xl backdrop-blur-md">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white">Novo Incidente</h2>
          <p className="text-sm text-slate-400 mt-1">
            Descreva o problema e nossa IA fará a triagem automática de
            severidade.
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-6">
          {/* Grupo: Título */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="company"
              className="text-xs font-bold uppercase tracking-widest text-slate-500"
            >
              Empresa
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              placeholder="Ex : TIM, INPI"
              className="rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="text-xs font-bold uppercase tracking-widest text-slate-500"
            >
              Título do Incidente
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="Ex: Ping Down, Efetuar Backup no Servidor"
              className="rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="description"
              className="text-xs font-bold uppercase tracking-widest text-slate-500"
            >
              Descrição Detalhada
            </label>
            <textarea
              id="description"
              rows="5"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Descreva aqui os detalhes do incidente, logs ou comportamento observado..."
              className="rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none"
            />
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <Link
              to="/"
              className="text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              disabled={isAnalyzing}
              className={`flex items-center gap-2 rounded-md bg-cyan-600 px-8 py-3 font-bold text-white transition-all hover:bg-cyan-500 active:scale-95 ${isAnalyzing ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isAnalyzing ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                  IA Analisando...
                </>
              ) : (
                "Registrar Incidente"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default NovoChamado;
