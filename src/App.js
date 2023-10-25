import React from 'react';

// IMPORTING PAGES TO BE USED
import BannerPage from './Pages/BannerPage/BannerPage';
import Dashboardpage from './Pages/DashboardPage/Dashboardpage';
import Login from './Pages/LoginPage/Login';
import Supervisor from './Pages/SupervisorPasswordPage/Supervisor';

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
          <Route path="/dashboard" element={<Dashboardpage />}></Route>
          <Route path="/supervisor" element={<Supervisor />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
