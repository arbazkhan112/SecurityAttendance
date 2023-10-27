import React from 'react';

// ----------- IMPORTING ADMIN PAGES TO BE USED-------------
import BannerPage from './Pages/BannerPage(USED)/BannerPage';
import Login from './Pages/LoginPage(USED)/Login';
import Supervisor from './Pages/AddRemoveGuards(USED)/Supervisor';
import SupervisorAccess from './Pages/SupervisorAccess(USED)/SupervisorAccess';
import Signup from './Pages/SignupPage(USED)/Signup';
// ----------- IMPORTING SUPERADMIN PAGES TO BE USED-------------
import SA_Signup from './Pages/SA_Signup(USED)/SA_Signup';
import SA_Login from './Pages/SA_Login(USED)/SA_Login';
import SA_Dashboard from './Pages/SA_Dashboard(USED)/SA_SUMMARY';
// import Dashboardpage from './Pages/DashboardPage/Dashboardpage';
// import MenuOptions from './Pages/MenuOptions/MenuOptions';


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
          {/* --------------------ADMIN------------------- */}
          <Route path="/" element={<BannerPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/supervisor" element={<Supervisor />}></Route>
          <Route path="/supervisoraccess" element={<SupervisorAccess />}></Route>
          {/* ----------------SUPER ADMIN ----------------- */}
          <Route path="/SAlogin" element={<SA_Login />}></Route>
          <Route path="/SAsignup" element={<SA_Signup />}></Route>
          <Route path="/SAdashboard" element={<SA_Dashboard />}></Route>
          {/* <Route path="/menuoptions" element={<MenuOptions/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
