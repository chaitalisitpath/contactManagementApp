import React from 'react'
import { useLocation} from 'react-router';
function List() {
    const location = useLocation();
    const {formData} = location.state;
  return (
    <div>
    {formData ? (
      <>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Message: {formData.msg}</p>
      </>
    ) : (
      <p>No data available.</p>
    )}
  </div>
  )
}

export default List