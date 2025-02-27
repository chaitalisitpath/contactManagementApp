import React, { useState } from 'react'
import { useNavigate } from "react-router";
function Edit() {

return (
  <>
    <div className="flex justify-center text-black mt-35 ">
      <div className="bg-green-200 rounded-xl h-150 w-190">
        <h2 className="text-center text-4xl font-bold pt-10">Edit Form</h2>
        <form>
          <div className="flex justify-center mt-10">
            <div className="relative z-0 w-150">
              <input
                type="text"
                name="name"
                pattern="[a-zA-Z]*"
                title="Please enter only characters"
                maxLength={30}
                minLength={3}
                id="name"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-md text-gray-700 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="relative z-0 w-150">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-md text-gray-700 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email Address
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="relative z-0 w-150">
              <textarea
                minLength="10"
                maxLength="200"
                type="text"
                rows="5"
                name="msg"
                id="msg"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="msg"
                className="peer-focus:font-medium absolute text-md text-gray-700 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="pr-4 rounded-xl pl-4 pt-2 pb-2 text-white bg-green-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
)
}

export default Edit