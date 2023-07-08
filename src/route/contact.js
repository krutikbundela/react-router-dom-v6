import React from 'react'
// import Navbar from '../component/Navbar'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    const navigate = useNavigate();


    const goTo = () =>{

        navigate("/");
    } 


  return (
    <>
     {/* <Navbar/> */}
    <b>contact</b>
<hr /><hr />

    <button onClick={goTo}>go to Home pageeee</button>
<hr /><hr />

    <button onClick={() => 
        {navigate(-1);}
    }>go back</button>
</>
  )
}

export default Contact