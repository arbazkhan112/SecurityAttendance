import React from 'react';

// IMPORTING PAGES TO BE USED
import BannerPage from './Pages/BannerPage/BannerPage';
import Dashboardpage from './Pages/DashboardPage/Dashboardpage';
import Login from './Pages/LoginPage/Login';

// IMPORTING ROUTERS
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SupervisorPassword from './Pages/SupervisorPasswordPage/SupervisorPassword';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BannerPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboardpage />}></Route>
          <Route path="/supervisorpassword" element={<SupervisorPassword />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
