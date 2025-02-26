import React from 'react'

function Register() {
    return (
        <div>
            <div className="bg-green flex items-center justify-center pt-3">
                <div className="w-1/2 h-198 rounded-2xl bg-gray-400">
                    <p className="text-3xl font-bold pt-7">Registration Form</p>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register