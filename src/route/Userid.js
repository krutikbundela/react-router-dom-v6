import React from 'react'
import { useParams } from 'react-router-dom'

const Userid = () => {

    const user = useParams();
  return (
    
    <>
    <h1>Hello {user.id}</h1>
    </>
  )
}

export default Userid