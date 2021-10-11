import React from 'react'
import Slider from '../Slider/Slider'
import './Main.css'

function Main() {
  return (
    <>
      <div className="container">
        <div className="offer">
          <div className="offer-title">
            <h1>Трекер здоровья питомца</h1>
            <h2>Сделаем жизнь вашего животного лучше</h2>
          </div>
          <img className="img-offer" src="/offerbg.png" alt="" width="410px" />
        </div>
        <Slider />
        <div className="main-wrapper1">

          <div className="main1">
            <div className="main-item1">
              <h2 className="main-title">Базовая диета</h2>
              <p className="main-desc">
                Инфографика по состоянию здоровья вашего животного на основе
                анализов
              </p>
            </div>
            <div className="main-item1">
              <h2 className="main-title">Базовая диета</h2>
              <p className="main-desc">
                Инфографика по состоянию здоровья вашего животного на основе
                анализов
              </p>
            </div>
            <div className="main-item1">
              <h2 className="main-title">Базовая диета</h2>
              <p className="main-desc">
                Инфографика по состоянию здоровья вашего животного на основе
                анализов
              </p>
            </div>
            <div className="main-item1">
              <h2 className="main-title">Базовая диета</h2>
              <p className="main-desc">
                Инфографика по состоянию здоровья вашего животного на основе
                анализов
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
