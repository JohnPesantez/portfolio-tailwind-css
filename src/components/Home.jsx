import { Carousel } from 'flowbite-react';
import React from 'react';
import banner1 from "../assets/banner.png"


const Home = () => {
    const handleFiverrClick = () => {
        window.open('https://www.fiverr.com/johnpesantez', '_blank');
      };
  return (
    <div className='bg-neutralSilver' id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto ">
    
      <div id="about">
      {/* About text */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
    <div className='py-8 md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='w-full md:w-3/5 flex justify-center'>
            <img className='w-full max-w-lg' src={banner1} alt="" />
        </div>
        <div className='w-full md:w-3/5 mx-auto'>
            <h2 className='dark:text-white text-4xl font-semibold mb-4 md:w-4/5'>Full-Stack Software Developer <span className='text-primary-light'>Portfolio</span></h2>
            <p className='md:w-3/4 font-light text-sm text-neutralGrey mb-8'>
           I'm a Full-Stack Software Developer based in London with over three years of commercial experience building and maintaining business platforms, web applications and mobile applications. My experience spans backend development with PHP and Laravel, databases such as SQL Server and PostgreSQL, and frontend and mobile development using JavaScript, TypeScript, React and React Native.
            </p>
            <div className="flex flex-col sm:flex-row">
                  <a className='btn-primary' href="#contact">Contact me</a>
            </div>

        </div>
    </div>
</div>

        </div>
      </div>

    </div>
  )
}

export default Home;