import React from 'react'
import { useParams } from 'react-router-dom'


const UseridName = () => {

    const user = useParams();
    console.log(user);


  return (
    <>
    <h1>Hello, {user.name} How Are You</h1>
    <br /><br />
    <h1>Your Id Is == {user.id}</h1>
    
    </>
  )
}

export default UseridName