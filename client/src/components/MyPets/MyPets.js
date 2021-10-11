import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pet from '../Pet/Pet'
import ProfileNav from '../Profile/ProfileNav'
import '../Pet/Pet.css'
import { useHistory } from 'react-router-dom'
import { initPetAC } from '../../utils/redux/actionCreators/actionCreators'
import Modal from '../Modal/Modal'

function MyPets() {
  const userState = useSelector((state) => state.usersReducer)

  const petState = useSelector((state) => state.petsReducer.pet)
  const dispatch = useDispatch()

  const [modalActive, setModalActive] = useState(false)

  //fetch в БД, получаем животных
  useEffect(() => {
    fetch('http://localhost:4000/findpet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: userState.user.id }),
    })
      .then((res) => res.json())
      .then((result) => {
        dispatch(initPetAC(result.petsArr))
      })
  }, [userState, modalActive, dispatch])

  const text = useRef()
  const history = useHistory()
  //событие по кнопке
  const addAnimal = (event) => {
    event.preventDefault()
    //объект для загрузки в бд
    const newPet = {
      name: text.current.name.value,
      spacies: text.current.spacies.value,
      sex: text.current.sex.value,
      breed: text.current.breed.value,
      birthdate: text.current.birthdate.value,
      weight: text.current.weight.value,
      owner: userState.user.id,
    }

    //fetch к бд
    fetch('http://localhost:4000/addPet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPet),
    })
      .then((res) => res.json())
      //alert "питомец загружен"
      .then((result) => {
        setModalActive(false)
      })
    //редирект на MyPets

    history.push('/mypets')
  }

  return (
    <>
      <div className="container">
        <div className="main-wrapper1">
          <ProfileNav />
          <div className="pet-wrapper">
            {petState &&
              petState.map((pet) => <Pet key={pet._id} value={pet} />)}

            <div onClick={() => setModalActive(true)} className="pet-item-add">
              <p>Добавить питомца</p>
            </div>

            <Modal active={modalActive} setActive={setModalActive}>
              <form ref={text} onSubmit={addAnimal} className="form-body">
                <h2 className="form-title">Добавление питомца</h2>
                <div className="form-item">
                  <input
                    name="name"
                    type="text"
                    placeholder="Кличка"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="spacies"
                    type="text"
                    placeholder="Вид"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="breed"
                    type="text"
                    placeholder="Порода"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="sex"
                    type="text"
                    placeholder="Пол"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="weight"
                    type="number"
                    placeholder="Вес"
                    className="form-input"
                  />
                </div>
                <div className="form-item">
                  <input
                    name="birthdate"
                    type="date"
                    placeholder="Дата рождения"
                    className="form-input"
                  />
                </div>
                <button className="form-buttom">Добавить питомца</button>
              </form>
            </Modal>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyPets
