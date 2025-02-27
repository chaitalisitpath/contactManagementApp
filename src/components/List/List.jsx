import React, { useState } from 'react'
import { useLocation } from 'react-router';
function List({data}) {

  const [dataToShow, setDataToShow] = useState(data);

  function deleteCurrentItem(index){
    setDataToShow(prevData => {
      let newData = [...prevData];
      newData.splice(index, 1); 
      return newData;
    })
  }

  function editCurrentItem(indexToFind, newFormData){
    setDataToShow(prevData => {
      let newData = [...prevData];
      newData[indexToFind] = newFormData;
      return newData;
    })
  }

  return (
     <>
      <div className="mt-30">
        <table className="bg-gray-300 w-1/2 mx-auto text-lg">
        
          <thead className="font-bold">
            <tr>
              <td className="px-6 py-3">Name</td>
              <td className="px-6 py-3">Email</td>
              <td className="px-6 py-3">Message</td>
            </tr>
          </thead>
          <tbody>
            {dataToShow.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.msg}</td>
                <td><button onClick={() => {
                  const isConfirmed = confirm('Are you sure you want to delete?');
                  if(isConfirmed)
                  {
                    deleteCurrentItem(index)
                  }
                }} className='bg-red-700 text-white'>Delete</button></td>
              </tr>
            ))}

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