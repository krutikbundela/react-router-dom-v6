import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./component/Navbar";
import Home from "./route/home";
import About from "./route/About";
import Contact from "./route/contact";
import Error from "./route/Error.js";
import MainHeader from "./component/MainHeader";
import Userid from "./route/Userid";
import UseridName from "./route/UseridName";
import Priceing from "./route/Priceing";
import Free from "./route/Free";
import Premium from "./route/Premium";
import Protected from "./route/Protected";
import Auth from "./Auth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<MainHeader />}>
            <Route index element={<Home />} />
            {/* index== <MainHeader/> saathe j path hoi te paath pr <Home/> content pnnn bataav se */}
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
            {/* React ma ERROR 404  maate path=='*' aapva nu ne pachi ema 404 na page nu component ppaass krri devaa nu  */}

            <Route path="/pricing" element={<Priceing />}>
              <Route path="free" element={<Free />} />
              <Route path="premium" element={<Premium />} />
            </Route>

            <Route element={<Protected />}>
              <Route path="auth" element={<Auth />} />
            </Route>
          </Route>
          {/*   Nested Route +Shared Route banavaaa   */}
          {/* parent enaa badhaa child ma same jj rese etle hve badhaa child maa thi <Navbar/>
             Kaddhi deii to pnn badhaa ma navbar to dekhaase jjjjjjj */}

          <Route path="/user/:id" element={<Userid />} />
          <Route path="/user/:id/:name" element={<UseridName />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// {/*  <Route path="/" element={ <div>Home</div> }/> basics */}
