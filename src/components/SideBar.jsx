import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ menuItems }) => {
  const location = useLocation();

  return (
    <aside className="bg-black text-white h-full w-[15%] p-4 shadow-md">
      <nav>
        <ul>
          {menuItems.map((menuItem, index) => (
            <li key={index} className="mb-4">
              <Link
                to={menuItem.path}
                className={`block py-2 px-4 rounded transition duration-200 ease-in-out ${
                  location.pathname === menuItem.path
                    ? "bg-white text-black font-semibold transform scale-105"
                    : "hover:bg-gray-800"
                }`}
                style={{
                  animation: `${
                    location.pathname === menuItem.path
                      ? "fadeIn 0.5s ease-in-out forwards"
                      : "none"
                  }`,
                }}
              >
                {menuItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar;
