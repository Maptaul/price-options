import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu2Fill } from "react-icons/ri";
import Link from "../Link/Link";

const NavbarSelf = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog/:id", name: "Blog Post" },
  ];

  return (
    <div className="container px-4 py-4">
      <div
        className="md:hidden text-2xl bg-yellow-400 text-black p-6"
        onClick={() => setOpen(!open)}
      >
        {open === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <RiMenu2Fill></RiMenu2Fill>
        )}
      </div>
      <ul
        className={`md:flex duration-1000 absolute md:static
          ${open ? "top-14" : "-top-60"} 
          bg-yellow-100  shadow-lg rounded-xl`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </div>
  );
};

export default NavbarSelf;
