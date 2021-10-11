import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import ProfileNav from '../Profile/ProfileNav'

function Hormonal() {
  const { id } = useParams()
    const [state, setState] = useState(false);
    const text = useRef();
    const petState = useSelector  ((state) => state.petsReducer.pet);

    const addHormonal = (ev) => {
      ev.preventDefault();
      const index = petState.findIndex((el) => el._id === id);
      const newHormonal = {
        spacies: petState[index].spacies,
        owner: id,
        ACT: text.current.ACT.value,
        ALD: text.current.ALD.value,
        INS: text.current.INS.value,
        PTH: text.current.PTH.value,
        T4: text.current.T4.value,
        COR: text.current.COR.value,
        GAS: text.current.GAS.value,
      };
      fetch("http://localhost:4000/addhormonal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newHormonal),
      })
        .then((res) => res.json())
        .then((result) => {
          setState(false);
        });
    };

  return (
    <>
      <div className="container">
        <div className="main-wrapper1">
          <ProfileNav />
          <div className="tests">
            <div className="tests-info">
              <Link to={`/mypets/${id}`}>
                <img
                  style={{ marginBottom: "40px" }}
                  src="/left-arrow.svg"
                  alt=""
                  width="40px"
                />
              </Link>
              <h2>Гормональное исследование</h2>
            </div>
            <div onClick={() => setState(true)} className="pet-item-add">
              <p>Добавить анализ</p>
            </div>
            {state && (
              <form className="form-body" ref={text}>
                <h2 className="form-title">Добавление анализа</h2>
                <div className="form-item">
                  <input
                    name="ACT"
                    type="number"
                    placeholder="ACT"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="ALD"
                    type="number"
                    placeholder="ALD"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="INS"
                    type="number"
                    placeholder="INS"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="PTH"
                    type="number"
                    placeholder="PTH"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="T4"
                    type="number"
                    placeholder="T4"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="COR"
                    type="number"
                    placeholder="COR"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="GAS"
                    type="number"
                    placeholder="GAS"
                    className="form-input"
                  />
                </div>
                <button onClick={addHormonal} className="form-buttom">
                  Добавить анализ
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hormonal
