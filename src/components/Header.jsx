import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-slate-700/60 bg-slate-900/80 px-6 py-4 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-cyan-500">
            NOC Operations
          </p>
          <h1 className="text-xl font-semibold text-white">
            Painel de Triagem de Incidentes
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-sm text-emerald-400">
              Monitorização ativa
            </span>
          </div>

          {/* Botão Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="Menu"
          >
            <span
              className={`h-0.5 w-6 bg-slate-300 transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-slate-300 transition-all ${isMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-slate-300 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full border-b border-slate-700 bg-slate-900 p-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            <Link
              to="/novo-chamado"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 rounded-md px-4 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors"
            >
              <span className="text-cyan-500">✚</span> Novo Chamado
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 rounded-md px-4 py-3 text-left text-sm font-medium text-slate-400 hover:bg-slate-800 transition-colors"
            >
              <span className="text-slate-500">⚙</span> Configurações
            </button>
            <div className="md:hidden mt-2 pt-2 border-t border-slate-800 flex items-center gap-2 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-xs text-emerald-400 uppercase tracking-widest">
                Ativo
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
