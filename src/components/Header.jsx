import { useState } from "react";
import { Search, Bell, Menu, X, Home, PlusCircle, Archive } from "lucide-react";
import { NavLink } from "react-router-dom";

// Reutilizando os mesmos itens da NavBar para consistência
const navItems = [
  { to: "/", icon: Home, label: "Dashboard" },
  { to: "/novo-chamado", icon: PlusCircle, label: "Novo Chamado" },
  { to: "/encerrados", icon: Archive, label: "Encerrados" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-3 backdrop-blur-sm sm:px-6">
      {/* Botão do Menu Hambúrguer - Visível apenas em telas pequenas */}
      <button
        className="text-slate-400 hover:text-white md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Barra cinza na parte de cima */}
      <div className="hidden flex-1 items-center gap-2 sm:flex"></div>

      {/* Ícones da Direita: Notificações e Perfil */}
      <div className="flex items-center gap-3">
        <button className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-700/50 hover:text-white">
          <Bell size={20} />
        </button>
        <div className="h-8 w-8 rounded-full bg-slate-700">
          {/* Placeholder para a imagem do perfil */}
          <img
            src="/image-para-trabalho.png"
            alt="image_placeholder"
            className="h-full w-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Menu Overlay para Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col w-full h-screen bg-slate-950 bg-opacity-100 md:hidden">
          {/* Cabeçalho do Menu Mobile */}
          <div className="flex items-center justify-between border-b border-slate-800 p-4">
            <h2 className="text-lg font-semibold text-white">Menu</h2>
            <button
              className="text-slate-400 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          {/* Links de Navegação Mobile */}
          <nav className="flex flex-col gap-y-2 p-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-x-4 rounded-lg p-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "text-slate-400 hover:bg-slate-800"
                  }`
                }
              >
                <item.icon size={22} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
