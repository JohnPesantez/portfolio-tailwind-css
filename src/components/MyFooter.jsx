import { Footer } from 'flowbite-react'
import React from 'react'
import logo from '../assets/icons/logo-1.gif'
import { BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer container className='rounded-none'>
    <div className="w-full">
      <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div className='space-y-4 mb-8'>
          <a href="home" className="text-2xl font-semibold flex items-center space-x-3">
                          <img src={logo} alt="" className="w-10 inline-block" />
                          <span>John Pesantez</span>
          </a>
          <div >
            <p>Copyright © 2024 John Pesantez</p>
            <p>All rights reserved</p>
          </div>  
        </div>
        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <Footer.Title title="about" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Flowbite</Footer.Link>
              <Footer.Link href="#">Tailwind CSS</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Follow us" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Github</Footer.Link>
              <Footer.Link href="#">Discord</Footer.Link>
            </Footer.LinkGroup>
          </div>
          
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
        </div>
      </div>
      <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="https://www.linkedin.com/in/john-pesantez-a678b0235/" icon={BsLinkedin} />
          <Footer.Icon href="https://github.com/JohnPesantez" icon={BsGithub} />
          <Footer.Icon href="mailto:info@johnpesantez.co.uk" icon={BsEnvelope} />
        </div>
      </div>
    </div>
  </Footer>

  )
}

export default MyFooter
