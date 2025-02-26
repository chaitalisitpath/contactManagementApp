import React from 'react'
import { useLocation } from 'react-router';
function List() {
  const location = useLocation();
  const { formData } = location.state;
  return (
    //   <div>
    //   {formData ? (
    //     <>
    //       <p>Name: {formData.name}</p>
    //       <p>Email: {formData.email}</p>
    //       <p>Message: {formData.msg}</p>
    //     </>
    //   ) : (
    //     <p>No data available.</p>
    //   )}
    // </div>
    <>
      <div className="mt-30">
        <table className="table-striped w-1/2 mx-auto text-lg">
          <thead className="font-bold">
            <tr>
              <td className="px-6 py-3">Name</td>
              <td className="px-6 py-3">Email</td>
              <td className="px-6 py-3">Message</td>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td className="px-6 py-3">{formData.name}</td>
            <td className="px-6 py-3">{formData.email}</td>
            <td className="px-6 py-3">{formData.msg}</td>
            </tr>
          </tbody>
        </table>

      </div>
      {/* <p>Name: {formData.name}</p>
         <p>Email: {formData.email}</p>
         <p>Message: {formData.msg}</p> */}
    </>
  )
}

export default List