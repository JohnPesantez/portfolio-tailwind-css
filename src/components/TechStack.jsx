import React from 'react'
import lan1 from "/src/assets/languages/html-5.png";
import lan2 from "/src/assets/languages/react-js.png";
import lan3 from "/src/assets/languages/wordpress.png";
import lan4 from "/src/assets/languages/wordpress-dark.png"
import lan5 from "/src/assets/languages/swift-ui.png"
import lan6 from "/src/assets/languages/php.png"
import lan7 from "/src/assets/languages/php-dark.png"
import lan8 from "/src/assets/languages/tailwind-css.svg"

const TechStack = () => {
  return (
    <div id="techstack" className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
    <div className='text-center '>
    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Tech Stack</h2>
      </div>
      <div className='grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 text-gray-500 dark:text-gray-400'>
    <div className='flex justify-center items-center h-full'>
        <img className='h-20 w-20 rounded-lg' src={lan1} alt="" />
    </div>
    <div className='flex justify-center items-center h-full'>
        <img className='h-20 w-20 rounded-lg' src={lan2} alt="" />
    </div>
    <div className='flex  justify-center items-center h-full'>
        <img className='dark:hidden h-20 w-20 rounded-lg' src={lan3} alt="" />
        <img className='hidden dark:inline-block h-20 w-20 rounded-lg' src={lan4} alt="" />

    </div>
    <div className='flex justify-center items-center h-full'>
        <img className='h-20 w-20 rounded-lg' src={lan5} alt="" />
    </div>
    <div className='flex justify-center items-center h-full'>
        <img className='dark:hidden h-20 w-20 rounded-lg' src={lan6} alt="" />
        <img className='hidden dark:inline-block h-20 w-20 rounded-lg' src={lan7} alt="" />
    </div>
    <div className='flex justify-center items-center h-full'>
        <img className='h-20 w-20 rounded-lg' src={lan8} alt="" />
    </div>
</div>


    </div>
  )
}

export default TechStack
