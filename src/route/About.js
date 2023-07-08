import React from 'react'
import { useNavigate } from 'react-router-dom'

// import Navbar from '../component/Navbar'

const About = () => {

    const navigate = useNavigate();


    const goTo = () =>{

        navigate("/contact");
    } 


  return (
    <>
       {/* <Navbar/> */}
       <b>about</b>
       <button onClick={() => goTo()}>go to contact pageeee</button>
    </>
  )
}

export default About