import React from 'react'
import { useLocation} from 'react-router';
function List() {
    const location = useLocation();
    
    const formData = location.state;
  return (
    <>
    <div>List</div>
    <p>{formData.name}</p>
    <p>{formData.email}</p>
    <p>{formData.msg}</p>
    </>
  )
}

export default List