import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import logo from "../assets/images/logo.jfif";
import logoSigma from "../assets/images/sigma-logo.webp";
import { NavLink, useLocation } from "react-router-dom";

type NavbarProps = {
  items: Array<{
    label: string;
    to: string;
  }>;
};

function Navbar({ items }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.search]);

  return (
    <header className="relative px-3 py-4 md:px-4 lg:flex lg:h-25 lg:items-center lg:justify-between lg:gap-8 lg:px-9 lg:py-0">
      <div className="flex items-center justify-between lg:block">
        <NavLink to="/" className="inline-flex items-center" aria-label="Inicio">
          <img
            src={logo}
            alt="Psicología ula"
            className="h-auto w-22.5 object-contain lg:w-26.25"
          />

          <img
            src={logoSigma}
            alt="Sigma"
            className="ml-3 h-auto w-28 object-contain invert"
          />
        </NavLink>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-700 lg:hidden"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navbar-popover"
          onClick={() => setIsMenuOpen((current) => !current)}>
          <span className="flex flex-col gap-[5px]">
            <span className="block h-[2px] w-5 bg-current" />
            <span className="block h-[2px] w-5 bg-current" />
            <span className="block h-[2px] w-5 bg-current" />
          </span>
        </button>
      </div>

      <nav className="hidden items-center gap-9 lg:flex" aria-label="Navegación principal">
        {items.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `border-b-2 pb-1 text-[1.07rem] font-medium no-underline transition-colors ${
                isActive
                  ? "border-b-[#3875c9] text-[#3875c9]"
                  : "border-b-transparent text-slate-800"
              }`
            }
            end={item.to === "/"}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-3 lg:mt-0 lg:w-[300px]">
        <SearchBar />
      </div>

      {isMenuOpen && (
        <div
          id="mobile-navbar-popover"
          className="absolute top-full right-3 left-3 z-50 mt-2 rounded-xl border border-slate-200 bg-white p-4 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-3" aria-label="Navegación principal móvil">
            {items.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `border-b pb-2 text-[0.98rem] font-medium no-underline transition-colors ${
                    isActive
                      ? "border-b-[#3875c9] text-[#3875c9]"
                      : "border-b-slate-200 text-slate-800"
                  }`
                }
                end={item.to === "/"}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
