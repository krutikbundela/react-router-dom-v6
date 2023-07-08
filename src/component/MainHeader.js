import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./Navbar"

const MainHeader = () => {
  return (
   <>
    <Navbar />
     <h1>Main Header Page </h1>
     
     <Outlet/>
     {/*Badhaa child Routes ma Render to thssee jjj....  */}
       {/*   Nested Route +Shared Route banavaaa   */}
        {/* parent enaa badhaa child ma same jj rese etle hve badhaa child maa thi <Navbar/>
            Kaddhi deii to pnn badhaa ma navbar to dekhaase jjjjjjj */}

   </>
  )
}

export default MainHeader