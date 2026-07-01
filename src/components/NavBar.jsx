import { Home, PlusCircle, Archive } from "lucide-react";
import { NavLink } from "react-router-dom";
import { FaUser, FaUserPlus } from "react-icons/fa";

// Itens da navegação com seus ícones e rotas correspondentes
const navItems = [
  { to: "/", icon: Home, label: "Dashboard" },
  { to: "/novo-chamado", icon: PlusCircle, label: "Novo Chamado" },
  { to: "/encerrados", icon: Archive, label: "Encerrados" },
  // Adicionando um separador visual para as rotas de autenticação
  { isSeparator: true },
  { to: "/login", icon: FaUser, label: "Login" },
];

function NavBar({ isExpanded }) {
  return (
    <aside
      className={`flex flex-col gap-y-6 border-r border-slate-800 bg-slate-900 p-3 transition-all duration-300 ${
        isExpanded ? "items-start" : "items-center"
      }`}
    >
      {/* Logo Placeholder */}
      <div
        className={`rounded-lg bg-cyan-500/80 p-2 text-white ${isExpanded ? "self-center" : ""}`}
      >
        <Home size={28} />
      </div>

      {/* Navegação Principal */}
      <nav className="flex flex-col gap-y-3">
        {navItems.map((item, index) =>
          item.isSeparator ? (
            <hr key={index} className="border-slate-700/50" />
          ) : (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-x-3 rounded-lg p-3 transition-colors ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "text-slate-500 hover:bg-slate-800 hover:text-slate-300"
                }`
              }
              title={isExpanded ? "" : item.label} // Mostra tooltip apenas quando colapsado
            >
              <item.icon size={22} />
              {isExpanded && (
                <span className="whitespace-nowrap text-sm font-medium">
                  {item.label}
                </span>
              )}
            </NavLink>
          ),
        )}
      </nav>
    </aside>
  );
}

export default NavBar;
