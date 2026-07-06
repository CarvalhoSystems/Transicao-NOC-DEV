import { NavLink, Link } from "react-router-dom";
import { Zap, X } from "lucide-react";
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

function NavContent({ isExpanded }) {
  return (
    <nav className="flex flex-col gap-y-3">
      {navItems.map((item, index) =>
        item.isSeparator ? (
          <hr key={`sep-${index}`} className="my-2 border-slate-700/50" />
        ) : (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-x-3 rounded-lg p-3 transition-colors ${
                isActive
                  ? "bg-cyan-500/20 text-cyan-400"
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-300"
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
  );
}

function NavBar({ isDesktop, isMenuOpen, setIsMenuOpen }) {
  const isExpanded = isDesktop || isMenuOpen;

  // Menu para Desktop
  if (isDesktop) {
    return (
      <aside className="sticky top-0 flex h-screen flex-col gap-y-6 border-r border-slate-800 bg-slate-900 p-3">
        <Link
          to="/"
          className="flex items-center justify-center rounded-lg bg-cyan-500/80 p-2 text-white"
        >
          <Zap size={28} />
        </Link>
        <NavContent isExpanded={true} />
      </aside>
    );
  }

  // Menu para Mobile (Overlay)
  return (
    <>
      {/* Fundo escuro quando o menu está aberto */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Painel do menu que desliza */}
      <aside
        className={`fixed top-0 left-0 z-30 flex h-full w-64 flex-col gap-y-6 border-r border-slate-800 bg-slate-900 p-4 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="rounded-lg bg-cyan-500/80 p-2">
              <Zap size={24} />
            </div>
            <span className="text-lg font-bold">NOC-DEV</span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-slate-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>
        <NavContent isExpanded={true} />
      </aside>
    </>
  );
}

export default NavBar;
