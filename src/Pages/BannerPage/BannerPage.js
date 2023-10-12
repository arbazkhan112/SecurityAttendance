import React from 'react'
// IMPORTING NAVBAR & BODY COMPONENT
import Navbar from '../../components/Navbar/Navbar';
import Body from '../../components/BannerPage/Body';

export default function index() {
  return (
    <div>
      {/* CALLING BANNER PAGE COMPONENTS */}
      <Navbar />
      <Body />
    </div>
  )
}
