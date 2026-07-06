import { TbMenu2, TbBell, TbUserCircle } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";

const getPageTitle = (pathname) => {
  switch (pathname) {
    case "/":
      return "Dashboard";
    case "/novo-chamado":
      return "Novo Chamado";
    case "/encerrados":
      return "Chamados Encerrados";
    case "/email":
      return "Enviar E-mail";
    case "/login":
      return "Login";
    case "/register":
      return "Registro";
    default:
      return "Dashboard";
  }
};

function Header({ onMenuClick }) {
  const { pathname } = useLocation();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const title = getPageTitle(pathname);

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 backdrop-blur-sm sm:px-6">
      <div className="flex items-center gap-4">
        {!isDesktop && (
          <button
            onClick={onMenuClick}
            className="text-slate-400 hover:text-white"
          >
            <TbMenu2 size={24} />
          </button>
        )}
        <h1 className="text-lg font-semibold text-white">{title}</h1>
      </div>
    </header>
  );
}

export default Header;
