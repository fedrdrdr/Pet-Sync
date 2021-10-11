import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { listAnalysesAC } from '../../utils/redux/actionCreators/actionCreators'
import ChartLineALB from '../ChartLine/ChartLineALB'
import ChartLineLDH from '../ChartLine/ChartLineLDH'
import ChartLineALP from '../ChartLine/ChartLineALP'
import ChartLineALT from '../ChartLine/ChartLineALT'
import ChartLineAST from '../ChartLine/ChartLineAST'
import ChartLineGLU from '../ChartLine/ChartLineGLU'
import ChartLineTB from '../ChartLine/ChartLineT_B'
import ChartLineTCho from '../ChartLine/ChartLineT_Cho'
import ChartLineTP from '../ChartLine/ChartLineT_P'

import ChartList from '../ChartList/ChartList'
import DetailsBloodAnalyse from '../DetailsBloodAnalyse/DetailsBloodAnalyse'
import ProfileNav from '../Profile/ProfileNav'
import './Analysis.css'

function Blood(props) {
  const [details, setDetails] = useState(false)
  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:4000/analyses/list')
      .then((res) => res.json())
      .then((data) => dispatch(listAnalysesAC(data)))
  }, [dispatch])

  const [state, setState] = useState(false)
  const text = useRef()
  const petState = useSelector((state) => state.petsReducer.pet)

  const addBlood = (ev) => {
    ev.preventDefault()
    const index = petState.findIndex((el) => el._id === id)
    const newBlood = {
      spacies: petState[index].spacies,
      owner: id,
      LDH: text.current.LDH.value,
      ALT: text.current.ALT.value,
      AST: text.current.AST.value,
      ALB: text.current.ALB.value,
      T_Pro: text.current.T_Pro.value,
      T_Bil: text.current.T_Bil.value,
      GLU: text.current.GLU.value,
      T_Cho: text.current.T_Cho.value,
      ALP: text.current.ALP.value,
    }

    fetch('http://localhost:4000/addblood', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBlood),
    })
      .then((res) => res.json())
      .then((result) => {
        setState(false)
      })
  }

  return (
    <>
      <div className="container">
        <div className="main-wrapper1">
          <ProfileNav />
          <div className="tests">
            <div className="tests-info">
              <Link to={`/mypets/${id}`}>
                <img
                  style={{ marginBottom: '40px' }}
                  src="/left-arrow.svg"
                  alt=""
                  width="40px"
                />
              </Link>
              <h2>Анализ крови</h2>

              <div onClick={() => setState(true)} className="pet-item-add">
                <p>Добавить анализ</p>
              </div>

            </div>
            <div style={{ marginBottom: '50px' }}>
              <ChartList />
            </div>

            {state && (
              <form className="form-body" ref={text}>
                <h2 className="form-title">Добавление анализа</h2>
                <div className="form-item">
                  <input
                    name="LDH"
                    type="number"
                    placeholder="LDH"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="ALT"
                    type="number"
                    placeholder="ALT"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="AST"
                    type="number"
                    placeholder="AST"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="ALB"
                    type="number"
                    placeholder="ALB"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="T_Pro"
                    type="number"
                    placeholder="T_Pro"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="T_Bil"
                    type="number"
                    placeholder="T_Bil"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="GLU"
                    type="number"
                    placeholder="GLU"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="T_Cho"
                    type="number"
                    placeholder="T_Cho"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="ALP"
                    type="number"
                    placeholder="ALP"
                    className="form-input"
                  />
                </div>
                <button onClick={addBlood} className="form-buttom">
                  Добавить анализ
                </button>
              </form>
            )}

            <button onClick={() => setDetails(!details)}>
              Подробный анализ &rarr;
            </button>
            {details ? (
              <>
                <DetailsBloodAnalyse /> <ChartLineLDH /> <ChartLineALB />
                <ChartLineALP />
                <ChartLineALT />
                <ChartLineAST />
                <ChartLineGLU />
                <ChartLineTB />
                <ChartLineTCho />
                <ChartLineTP /> <ChartLineALP />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default Blood
