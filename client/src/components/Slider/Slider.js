import React from 'react'
import './Slider.css'

function Slider() {
  return (
    <div className="main-wrapper">
      <div className="main">
        <div className="main-item">
          <h2 className="main-title">Профиль питомца</h2>
          <p className="main-desc">
            Инфографика по состоянию здоровья вашего животного на основе
            анализов
          </p>
          <img className="img1" src="/dogbg.png" alt="" width="180px" />
        </div>
        <div className="main-item">
          <h2 className="main-title">Удобные напоминаия</h2>
          <p className="main-desc">
            Напоминание о вакцинации и дегельминтизации
          </p>
          <img className="img2" src="/kotenok.jpeg" alt="" width="270px" />
        </div>
        <div className="main-item">
          <h2 className="main-title">Электронная запись</h2>
          <p className="main-desc">Онлайн чат с клиникой</p>
          <img className="img3" src="/djek.png" alt="" width="230px" />
        </div>
      </div>
    </div>
  )
}

export default Slider
