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
            <h2 className='dark:text-white text-4xl font-semibold mb-4 md:w-4/5'>Welcome to My Web Developer <span className='text-primary-light'>Portfolio</span></h2>
            <p className='md:w-3/4 font-light text-sm text-neutralGrey mb-8'>
            I am a passionate web developer dedicated to creating responsive and modern websites. With extensive experience in a variety of languages and libraries, including React JS, PHP, HTML5, and Tailwind CSS, I bring versatility and expertise to every project. My proficiency in WordPress further enables me to develop dynamic, user-friendly websites that meet contemporary standards.

</p>
            <div className="flex flex-col sm:flex-row">
                  <button onClick={handleFiverrClick} className='btn-primary mb-4 sm:mb-0 sm:mr-4'>Check my gig on Fiverr</button>
                  <button className='btn-primary'>Contact me</button>
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