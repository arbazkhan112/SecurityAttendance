import React from 'react';

// IMPORTING PAGES TO BE USED
import BannerPage from './Pages/BannerPage/BannerPage';
// import Dashboardpage from './Pages/DashboardPage/Dashboardpage';
import Login from './Pages/LoginPage/Login';
import SA_Login from './Pages/SA_Login/SA_Login';
import Signup from './Pages/SignupPage/Signup';
import Supervisor from './Pages/AddRemoveGuards/Supervisor';
import SupervisorAccess from './Pages/SupervisorAccess/SupervisorAccess';
import SA_Signup from './Pages/SA_Signup/SA_Signup';

// IMPORTING ROUTERS
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BannerPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/SAlogin" element={<SA_Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/SAsignup" element={<SA_Signup/>}></Route>
          {/* <Route path="/dashboard" element={<Dashboardpage />}></Route> */}
          <Route path="/supervisor" element={<Supervisor />}></Route>
          <Route path="/supervisoraccess" element={<SupervisorAccess/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
