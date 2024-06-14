// import { LogOut } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuTrigger,
// } from "../../components/ui/dropdown-menu";
// import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const name = localStorage.getItem("USER_NAME");
  const email = localStorage.getItem("EMAIL");

  const logoutHandle = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("USER_NAME");
    localStorage.removeItem("EMAIL");
    navigate("/");
  };

  return (
    <header className="bg-white p-4 shadow-md flex items-center justify-between h-[60px]">
      <h1 className="text-2xl font-bold text-black">
        Hospital Appointment Booking
      </h1>
      {/* <h1>Demo</h1> */}
      <div className="p-4">
        {/* <DropdownMenu>
          <DropdownMenuTrigger className="outline:none">
            <CgProfile size={25} className="cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Name {name}</DropdownMenuItem>
            <DropdownMenuItem>Email {email}</DropdownMenuItem>
            <DropdownMenuItem onClick={() => logoutHandle()}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
    </header>
  );
};

export default Header;
