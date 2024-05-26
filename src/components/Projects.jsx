import React from 'react';
import prjct1 from  "../assets/DisruptX.png";
import prjct2 from  "../assets/adabusiness.png";
import prjct3 from  "../assets/Eduviz.png";

import { Link as ScrollLink } from 'react-scroll';

const Projects = () => {
  const blogs = [
    { id: 1, title: "Incubation and Acceleration Company Website", image: {prjct1}, URL: "https://www.disruptx.org" },
    { id: 2, title: "Consulting Wordpress Website", image: {prjct2}, URL: "https://www.adabusiness.co.uk" },
    { id: 3, title: "Visa and Education Wordpress Website", image: {prjct3}, URL: "https://www.eduviz.co.uk" },
  ];

  return (
    <div id="projects" className='self-align-center px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
      <div className='text-center '>
        <h2 className='text-4xl  font-semibold mb-4'>Projects</h2>
        <p className='text-sm font-light mb-8 md:w-3/4 mx-auto'>
          Welcome to my project showcase. Each piece represents a unique blend of technical skill, creativity, and problem-solving. From building mobile applications to web development, these projects highlight my expertise and commitment to producing high-quality, user-friendly software. Dive in to see the practical application of my knowledge in action.
        </p>
      </div>

      {/* all blogs */}
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
        {blogs.map(blog => (
          <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
            <a href={blog.URL} target="_blank" rel="noopener noreferrer">
              <img src={blog.image} alt={blog.title} className='hover:scale-95 transition-all duration-300' />
              <div className='text-center px-4 py-8 bg-white shadow-lg dark:bg-primary-dark rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                <h3 className='mb-3 text-black dark:bg-primary-dark font-semibold'>{blog.title}</h3>
                <div className='flex items-center dark:bg-primary-dark justify-center gap-8'>
                  <span className='inline-flex gap-2 font-bold text-black dark:bg-primary-dark hover:text-neutral-700'>
                    Visit Website
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:bg-primary-dark">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
