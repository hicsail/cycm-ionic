import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    {
      name: "About Us",
      href: "about-us",
    },
    {
      name: "Our Feed",
      href: "discover",
    },
    {
      name: "Contact Us",
      href: location.pathname + "#footer",
    },
    {
      name: "Resources",
      href: "resources",
    },
  ];

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (
        open &&
        !document.querySelector("#navbar-dropdown")?.contains(e.target as Node)
      )
        setOpen(false);
    };

    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [open]);

  return (
    <nav className="fixed bg-white shadow-md border-gray-200 top-0 w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <h1 className="font-bold text-4xl dark:text-gray-800">CYCM</h1>
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            {!mobileOpen ? (
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            ) : (
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            )}
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${!mobileOpen && "hidden"}`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium mt-4 md:items-center md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block py-4 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
