import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from './About'
import { Addcannel } from './Addcannel'
import { Analytics } from './Analytics'
import { Channels } from './Channels'
import { Customer } from './Customer'
import { Engagement } from './Engagement'
import Facebookanalytics from './Facebookanalytics'
import { Home } from './Home'
import Instagramanalytics from './Instagramanalytics'
import { Login } from './Login'
import { Pricing } from './Pricing'
import { Publishing } from './Publishing'
import ReqAuth from './ReqAuth'

export const Mainroute = () => {
  return (
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/pricing" element={<Pricing />} /> */}
          <Route path="/publishing" element={
                <ReqAuth>
                    <Publishing />
                </ReqAuth>
                } 
            />
          <Route path="/customer" element={<Customer />} />
          <Route path="/channels" element={<Channels />} />
          <Route path="/channels/addchannel" element={<Addcannel />} />
          <Route path="/engagement" element={<Engagement />} />
          {/* <Route path="/analytics" element={<Analytics />} /> */}
      <Route path="/publishing" element={<Publishing />} />
      <Route path="/analytics" element={<Facebookanalytics />} />
      <Route path="/instagramanalytics" element={<Instagramanalytics />} />
      
      
          
    </Routes>
  )
}
