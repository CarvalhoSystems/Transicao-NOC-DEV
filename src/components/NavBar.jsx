import { NavLink } from "react-router-dom";
import { Home, Zap } from "lucide-react";
import {
  TbLayoutDashboard,
  TbCirclePlus, // <-- Mudou aqui!
  TbArchive,
  TbMail,
  TbLogin2,
  TbUserPlus,
} from "react-icons/tb";

const navItems = [
  { to: "/", icon: TbLayoutDashboard, label: "Dashboard" },
  { isSeparator: true },
  { to: "/novo-chamado", icon: TbCirclePlus, label: "Novo Chamado" }, // <-- E aqui!
  { to: "/encerrados", icon: TbArchive, label: "Encerrados" },
  { isSeparator: true },
  { to: "/email", icon: TbMail, label: "Email" },
  { isSeparator: true },
  { to: "/login", icon: TbLogin2, label: "Login" },
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
        <Zap size={28} />
      </div>

      {/* Navegação Principal */}
      <nav className="flex flex-col gap-y-3">
        {navItems.map((item, index) =>
          item.isSeparator ? (
            <hr key={`sep-${index}`} className="border-slate-700/50" />
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
              title={isExpanded ? "" : item.label}
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
