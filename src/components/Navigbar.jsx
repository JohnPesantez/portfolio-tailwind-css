import { Navbar } from 'flowbite-react'
import logo from '../assets/icons/logo-1.gif'
import cv_d_dark from '../assets/icons/cv_download_dark.png'
import cv_d from '../assets/icons/cv_download.png'
import React, {useEffect, useState} from 'react';
import { Link } from 'react-scroll';
import {FaXmark, FaBars} from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";


  const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set toggle Menu
  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  }

  //dark mode
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
  }

  useEffect(() => {
      const handleScroll = () => {
          if(window.scrollY > 100){
              setIsSticky(true);
          }
          else {
              setIsSticky(false);
          }
      };
      window.addEventListener('scroll',handleScroll);

      return () => {
          window.addEventListener('scroll',handleScroll);
      }
  });
  const DonwloadCV = () => {
    const pdfUrl = "../files/John_Pesantez_CV 2.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "JohnPesantez_CV.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }
  //navitems array
  const navItems = [
      {link: "Home", path:"home"},
      {link: "About", path:"about"},
      {link: "Skills", path:"techstack"},
      {link: "Projects", path:"projects"},
      {link: "Contact", path:"contact"},
  ];

  return (
  <header className='w-full  md:bg-trasparent fixed top-0 left-0 right-0'>
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sitcky top-0 left-0 right-0 dark:border-slate-800 border dark:bg-slate-800 bg-white duration-300" : ""}`}>
          <div className='flex justify-between items-center text-base gap-8'>
              <a href='home' className='text-2x1 font-semibold flex items-center space-x-3'>
                  {/* <img src={logo} alt="" className='mr-3 h-6 sm:h-9'/> */}
                  <img src={logo} className=" w-10 inline-block items-center'" alt="Flowbite React Logo" />
                  <span>John Pesantez</span>
              </a>
              <div className="bg-yellow-">
            <button onClick={()=> darkModeHandler()}>
                {
                    
                    dark && <IoSunny />
                }
                {
                    !dark && <IoMoon />
                }
            </button>
        </div>
              {/* Nav items for large devices */}
              <ul className='md:flex  space-x-12 hidden'>
                  {
                      navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block cursor-pointer text-base text-gray900 hover:text-brandPrimary first:font-medium' >{link}</Link> )
                  }

              </ul>

              {/* btn for large devices */}
              <div className='space-x-12 hidden lg:flex items-center'>
                  <button 
                    onClick={DonwloadCV}
                    className='hidden lg:flex items-center text-brandPrimary hover:text-gray-900'>Donwload CV <img src={cv_d} className="dark:hidden mx-2 mr-3 h-6 sm:h-9" alt="Download CV Logo" /><img src={cv_d_dark} className="hidden dark:block mx-2 mr-3 h-6 sm:h-9" alt="Download CV Logo" /></button>
              </div>

              {/* menu btn for only mobile devices */}
              <div className='md:hidden'>
                  <button
                  onClick={toggleMenu}
                  className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                      {
                          isMenuOpen ? (<FaXmark className='h-6 w-6'/>) : (<FaBars className='h-6 w-6'/>)
                      }
                  </button>
              </div>
          </div>

          <div id='mobile_menu' className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${ isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"} `}>
              {
                  navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white hover:text-brandPrimary first:font-medium' >{link}</Link> )
              }

          </div>
      </nav>
  </header>
  )
}

export default NavBar
