import React from 'react'
import { Link, NavLink } from 'react-router'

function Header() {
  return (

    <nav className="p-8 fixed w-full top-0">
      <div className="flex justify-between">
        <div>

          <Link to="" className="flex rtl:space-x-reverse">
            <img src="./src\assets\LOGO_OF_LOGO.svg" className="h-10 w-30" alt="" />
          </Link>
        </div>
        <div>
          <ul className="text-lg font-bold flex md:flex-row md:space-x-8">

            <li>
              <NavLink to=""
                className={({ isActive }) =>
                  `${isActive ? "text-green-500" : "text-black-700"} hover:text-green-500`
                }>Home</NavLink>
            </li>

            <li>
              <NavLink to="about"
                className={({ isActive }) =>
                `${isActive ? "text-green-500" : "text-black-700"} hover:text-green-500`
                }>About Us</NavLink></li>
            
            <li>
              <NavLink to="contact"
              className={({isActive}) =>
              `${isActive ? "text-green-500" : "text-black-700"} hover:text-green-500`
              }>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <Link to="" type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Register</Link>
        </div>
      </div>
    </nav>

  )
}

export default Header