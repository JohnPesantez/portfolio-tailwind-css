import React from 'react'
import { BsEnvelope } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      id="contact"
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12"
    >

      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">

        <div className="w-full text-center">

          <h2 className="text-4xl font-semibold mb-4">
            Let's connect!
            <br />
            <span className="text-primary-light">
              I'm open to new opportunities
            </span>
          </h2>

          <p className="text-sm text-neutralGrey mb-8 max-w-xl mx-auto">
            If you'd like to discuss a project, a role, or simply get in touch,
            feel free to reach out.
          </p>

          <div className="flex justify-center items-center gap-4">

            <a
              href="mailto:info@johnpesantez.co.uk"
              className="border border-black rounded-full p-3 hover:bg-gray-100 transition"
              aria-label="Email me"
            >
              <BsEnvelope className="w-6 h-6" />
            </a>

            <div className="text-left">
              <p className="text-sm text-neutralGrey">
                Email me at
              </p>

              <a
                href="mailto:info@johnpesantez.co.uk"
                className="text-sm font-bold hover:text-primary-light transition"
              >
                info@johnpesantez.co.uk
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact