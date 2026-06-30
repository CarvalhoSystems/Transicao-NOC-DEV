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
  { to: "/register", icon: FaUserPlus, label: "Registrar" },
];

function NavBar() {
  return (
    <aside className="flex flex-col items-center gap-y-6 border-r border-slate-800 bg-slate-900 p-3">
      {/* Logo Placeholder */}
      <div className="rounded-lg bg-cyan-500/80 p-2 text-white">
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
              // Estiliza o link se ele estiver ativo (correspondente à rota atual)
              className={({ isActive }) =>
                `rounded-lg p-3 transition-colors ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "text-slate-500 hover:bg-slate-800 hover:text-slate-300"
                }`
              }
              title={item.label} // Tooltip com o nome da página
            >
              {/* O componente do ícone já é renderizável */}
              <item.icon size={22} />
            </NavLink>
          ),
        )}
      </nav>
    </aside>
  );
}

export default NavBar;
