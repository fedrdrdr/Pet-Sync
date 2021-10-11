import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import ProfileNav from '../Profile/ProfileNav'

function Pee() {
  const { id } = useParams()
  const [state, setState] = useState(false);
  const text = useRef();
  const petState = useSelector((state) => state.petsReducer.pet);

  const index = petState.findIndex((el) => el._id === id);


  const addPee = (ev) => {
    ev.preventDefault();
    const newPee = {
      spacies: petState[index].spacies,
      owner: id,
      AN16110: text.current.AN16110.value,
      AN116: text.current.AN116.value,
      AN28110: text.current.AN28110.value,
      AN15110: text.current.AN15110.value,
      AN114: text.current.AN114.value,
    };
        fetch("http://localhost:4000/addpee", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newPee),
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
              <h2>Анализ мочи</h2>
            </div>

            <div onClick={() => setState(true)} className="pet-item-add">
              <p>Добавить анализ</p>
            </div>

            {state && (
              <form className="form-body" ref={text}>
                <h2 className="form-title">Добавление анализа</h2>
                <div className="form-item">
                  <input
                    name="AN16110"
                    type="number"
                    placeholder="AN16110"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="AN116"
                    type="number"
                    placeholder="AN116"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="AN28110"
                    type="number"
                    placeholder="AN28110"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="AN15110"
                    type="number"
                    placeholder="AN15110"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="AN114"
                    type="number"
                    placeholder="AN114"
                    className="form-input"
                  />
                </div>
                <button onClick={addPee} className="form-buttom">
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

export default Pee
