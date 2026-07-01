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
        </div>
      </div>
    </header>
  );
}

export default Header;
