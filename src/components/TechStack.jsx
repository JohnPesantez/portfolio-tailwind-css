import React from 'react'

const TechStack = () => {
  return (
    <div id="techstack" className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
    <div className='text-center '>
    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Tech Stack</h2>
      </div>
      <div className='grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 text-gray-500 dark:text-gray-400'>
    <div className='flex justify-center items-center h-full'>
        <img className='h-20 w-20 rounded-lg' src="/src/assets/languages/html-5.png" alt="" />
    </div>
    <div className='flex justify-center items-center h-full'>
        <img className='h-20 w-20 rounded-lg' src="/src/assets/languages/react-js.png" alt="" />
    </div>
    <div className='flex  justify-center items-center h-full'>
        <img className='dark:hidden h-20 w-20 rounded-lg' src="/src/assets/languages/wordpress.png" alt="" />
        <img className='hidden dark:inline-block h-20 w-20 rounded-lg' src="/src/assets/languages/wordpress-dark.png" alt="" />

    </div>
    <div className='flex justify-center items-center h-full'>
        <img className='h-20 w-20 rounded-lg' src="/src/assets/languages/swift-ui.png" alt="" />
    </div>
    <div className='flex justify-center items-center h-full'>
        <img className='dark:hidden h-20 w-20 rounded-lg' src="/src/assets/languages/php.png" alt="" />
        <img className='hidden dark:inline-block h-20 w-20 rounded-lg' src="/src/assets/languages/php-dark.png" alt="" />
    </div>
    <div className='flex justify-center items-center h-full'>
        <img className='h-20 w-20 rounded-lg' src="/src/assets/languages/tailwind-css.svg" alt="" />
    </div>
</div>


    </div>
  )
}

export default TechStack
