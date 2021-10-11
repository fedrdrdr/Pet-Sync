import React from 'react'
import ProfileNav from '../Profile/ProfileNav'
import './Appointment.css'

function Appointment(props) {
  return (
    <>
      <div className="container">
        <div className="main-wrapper1">
          <ProfileNav />
          <div className="main-appointment">
          <iframe title="yclients" height="700px" width="900px" scrolling="no" frameborder="0" allowtransparency="true" id="ms_booking_iframe" src="https://n561042.yclients.com/"></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Appointment
