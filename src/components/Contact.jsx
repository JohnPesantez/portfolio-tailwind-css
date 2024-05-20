import { FloatingLabel, Footer, FooterIcon } from 'flowbite-react'
import {React, useState} from 'react'
import { Form } from 'react-bootstrap'
import Contact_img from '../assets/contact-img.svg'
import { BsEnvelope} from "react-icons/bs";

const Contact = () => {
   
        const [message, setMessage] = useState('');
      
        const handleInputChange = (event) => {
          setMessage(event.target.value);
        };
        // eslint-disable-next-line react/prop-types
        const Icon = ({ className, href, icon: IconComponent }) => (
            <a href={href} className={`ml-12 inline-block p-2 ${className}`}>
              <IconComponent className="w-6 h-6" />
            </a>
          );
          
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'  id='contact'>
    <div className='md:w-11/12 flex flex-col md:flex-row-reverse justify-between inverse-order  gap-12'>
    <div className='md:w-3/5 mx-auto text-center md:text-left'>
      <h2 className='text-4xl font-semibold mb-4 md:w-4/5 mx-auto'>Lets chat! <br/><span className='text-primary-light'>Tell me about your project</span></h2>
      <p className='md:w-3/4 text-sm text-neutralGrey mb-8 mx-auto'>Lets create something amazing together</p>
      <div className='flex flex-col md:flex-row gap-4 items-center md:items-start justify-center md:justify-start mx-auto'>
        <Icon className='border border-black rounded-full md:mb-0' href="mailto:info@johnpesantez.co.uk" icon={BsEnvelope} />
        <div>
          <p className='text-sm text-neutralGrey mb-2'>Email me at</p>
          <a href='mailto:info@johnpesantez.co.uk'>
            <p className='text-sm text-neutralGrey font-bold mb-8'>info@johnpesantez.co.uk</p>
          </a>
        </div>
      </div>
    </div>
            <div className='md:w-3/5 mx-auto px-4 lg:px-0'>
      <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Contact me</h2>
      <Form className='grid gap-6 mb-6 md:grid-cols-2'>
        <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <FloatingLabel className='dark:bg-neutral-dark text-primary-light dark:text-white' variant="outlined" label="First Name" />
        </div>
        <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <FloatingLabel className='dark:bg-neutral-dark text-primary-light dark:text-white' variant="outlined" label="Last Name" />
        </div>
        <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <FloatingLabel className='dark:bg-neutral-dark text-primary-light dark:text-white' variant="outlined" label="Phone Number" />
        </div>
        <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <FloatingLabel className='dark:bg-neutral-dark text-primary-light dark:text-white' variant="outlined" label="Email" />
        </div>
        <div className="relative block mb-2 text-sm font-medium text-gray-900 dark:text-white md:col-span-2">
          <textarea
            id="floatingTextarea"
            className="block p-2.5 min-h-20 w-full text-sm dark:bg-neutral-dark text-primary-light dark:text-white bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-transparent dark:focus:ring-blue-500 dark:focus:border-blue-500 peer"
            placeholder=" "
            value={message}
            onChange={handleInputChange}
          ></textarea>
          <label
            htmlFor="floatingTextarea"
            className={`absolute text-sm text-primary-light dark:text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-neutral-dark px-2 ${
              message ? 'peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 left-1' : 'peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
            }`}
          >
            Message
          </label>
        </div>
        <div className="md:col-span-2">
          <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Submit
          </button>
        </div>
      </Form>
    </div>
    </div>
  </div>
    
  )
}

export default Contact
