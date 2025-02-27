import React, { useState } from 'react'
import { useLocation } from 'react-router';
import { Link } from 'react-router';
function List({data}) {

  const [dataToShow, setDataToShow] = useState(data);

  function deleteCurrentItem(index){
    setDataToShow(prevData => {
      let newData = [...prevData];
      newData.splice(index, 1); 
      data.splice(index, 1);
      return newData;
    })
  }

  function editCurrentItem(indexToFind, newFormData){
    setDataToShow(prevData => {
      let newData = [...prevData];
      newData[indexToFind] = newFormData;
      data[indexToFind] = newFormData;
      return newData;
    })
  }

  return (
     <>
      <div className="mt-40">
        <h1 className="mb-10 text-3xl font-bold text-center text-gray-800">User Who want to contact</h1>
        <table className="bg-gray-300 rounded-xl w-290 mx-auto text-lg">
        
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
                <td className="px-6 py-3">{item.name}</td>
                <td className="px-6 py-3">{item.email}</td>
                <td className="px-6 py-3">{item.msg}</td>
                <td><Link to={`/edit/${index}`} onClick={editCurrentItem} className="px-6 py-1 bg-blue-700 rounded-3xl text-white">Edit</Link></td>
                <td><button onClick={() => {
                  const isConfirmed = confirm('Delete this data');
                  if(isConfirmed)
                  {
                    deleteCurrentItem(index)
                  }
                }} className='px-5 py-1 bg-red-700 rounded-3xl text-white'>Delete</button></td>
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