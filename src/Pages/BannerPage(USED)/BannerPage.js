import React from 'react'
// IMPORTING NAVBAR & BODY COMPONENT
import Navbar from '../../components/BannerPageNavbar(USED)/Navbar';
import Body from '../../components/BannerPageBody(USED)/Body';

export default function index() {
  return (
    <div>
      {/* CALLING BANNER PAGE COMPONENTS */}
      <Navbar />
      <Body />
    </div>
  )
}
