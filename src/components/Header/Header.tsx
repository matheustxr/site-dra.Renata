import React from "react";
import {
  Navbar,
  Collapse,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import logo from '/logo.svg'
 

 
export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);


  function NavList() {
    return (
      <ul className="pt-5 flex flex-col md:flex-row md:items-center gap-5 lg:gap-[27px] text-white shadow-none">
        <NavLink to="/" className="text-lg md:text-xl cursor-pointer hover:underline">
          Home
        </NavLink>
  
        <NavLink to="/sobre" className="text-lg md:text-xl cursor-pointer hover:underline">
          Sobre Mim
        </NavLink>
  
        <NavLink to="/especialidade" className="text-lg md:text-xl cursor-pointer hover:underline">
          Especialidade
        </NavLink>
  
        {/* <a 
          href="https://www.photopea.com/"
          className="text-lg md:text-xl cursor-pointer hover:underline"
        >
          Contato
        </a> */}

        <NavLink to="/celebre" className="!w-fit px-5 py-2 text-lg md:text-xl text-[#1d3273] hover:text-[#e57870] font-black bg-[#ffd892] hover:bg-[#fbf8e7] transition-all rounded-3xl cursor-pointer hover:underline shadow-botao ">
          Celebre
        </NavLink>
      </ul>
    );
  }
  
  function NavListMobile() {
    return (
      <ul className={ openNav ? "pt-5 flex flex-col md:flex-row md:items-center gap-5 lg:gap-[27px] text-white" : "hidden"}>
        <NavLink to="/" className="text-lg md:text-xl cursor-pointer">
          Home
        </NavLink>
  
        <NavLink to="/sobre" className="text-lg md:text-xl cursor-pointer">
          Sobre Mim
        </NavLink>
  
        <NavLink to="/especialidade" className="text-lg md:text-xl cursor-pointer">
          Especialidade
        </NavLink>
  
        {/* <a 
          href="https://www.photopea.com/"
          className="text-lg md:text-xl cursor-pointer"
        >
          Contato
        </a> */}

        <NavLink to="/celebre" className="!w-fit px-5 py-2 text-lg md:text-xl text-[#1d3273] hover:text-[#e57870] font-black bg-[#ffd892] hover:bg-[#fbf8e7] transition-all rounded-3xl cursor-pointer hover:underline shadow-botao ">
          Celebre
        </NavLink>
      </ul>
    );
  }
 
  return (
    <Navbar className="pt-5 mx-auto max-w-[950px] px-5 py-5 md:pb-10 lg:pb-20 bg-transparent rounded-none border-none" placeholder="">
      <div className="flex items-center justify-between text-blue-gray-900">

        <NavLink to="/" className=" cursor-pointer">
          <img src={logo} alt="" className="" />
        </NavLink>

        <div className="hidden md:block">
          <NavList />
        </div>
        
        <button
            className="md:hidden"
            onClick={() => setOpenNav(!openNav)}
        >
          { openNav ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" className="text-white" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            : 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" className="text-white" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          }
        </button>

        
      </div>
      <Collapse open={openNav}>
          <NavListMobile />
      </Collapse>

      
    </Navbar>
  );
}