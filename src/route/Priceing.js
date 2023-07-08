import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Priceing = () => {
  
  const location = useLocation();
  console.log(location);
  // pathname : "/pricing" .... we'll get...

  console.log(location.state);
  //Link NavLink Thi Data pnn Pass Karaai useLocation Hook Ni Help Thi
  //direct agar aa path prr aavsu to data nai malse but navigate link thi aavsu to jj
  //pass kreelaa data malseee



  // const redirect = location.search==="?redirect=shipping" ? "/shipping" : "/profile";
  
  // console.log(location.pathname); // /login
  // console.log(location.search);  // ?redirect=shipping

  // {new URLSearchParams(location.search).get('redirect')} ===== shipping

  // console.log("splitt   " + location.search.split("=")[1]);  // ?redirect=shipping
  // console.log(location);

  // https://www.educative.io/answers/how-to-use-the-uselocation-hook-in-react


  return (
    <>
      <h1>You can selectType:</h1>
      <li>
        {/* <NavLink to="/free">Free</NavLink> */}
        {/* Absolute paath che   but we want /pricing/freee*/}
      </li>
      <li>
        <NavLink to={`/pricing/free`}>Free</NavLink>
        {/* <NavLink to={location.pathname + `/free`}>Free</NavLink> */}
      </li>
      <li>
        <NavLink to={`/pricing/premium`}>Premium</NavLink>
        {/* <NavLink to={location.pathname + `/premium`}>Premium</NavLink> */}
        {/*But aa bovv lochaa waalu cheee /pricing/free/premium  evu thaai chee */}
      </li>

      <h6>Shirt Price Is : {location.state.shirt}</h6>

      <Outlet />
    </>
  );
};

export default Priceing;
