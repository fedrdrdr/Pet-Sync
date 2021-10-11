import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import ProfileNav from '../Profile/ProfileNav'
import './PetPage.css'
import {
  editPetAC,
  editPetImgAC,
} from '../../utils/redux/actionCreators/actionCreators'
import { Link } from 'react-router-dom'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import firebase from 'firebase/app'
import 'firebase/storage'
import Loader from '../Loader/Loader'
import Modal from '../Modal/Modal'

function PetPersonPage(props) {
  const { id } = useParams()
  const history = useHistory()
  const petState = useSelector((state) => state.petsReducer.pet)
  const dispatch = useDispatch()

  const pet = petState.find((el) => el._id === id)
  console.log('state',petState)
  
  const [petImg, setPetImg] = useState(pet.image !== '')

  const [loading, setLoading] = useState(false)

  const [modalActive, setModalActive] = useState(false)

  const text = useRef()


  const handleDelete = () => {
    fetch(`http://localhost:4000/delete/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((result) => {
      })
      .then(() => history.push('/mypets'))
  }

  const handleChange = (event) => {
    event.preventDefault()
    const name = text.current.name.value
    const spacies = text.current.spacies.value
    const breed = text.current.breed.value
    const sex = text.current.sex.value
    const weight = text.current.weight.value
    const birthdate = text.current.birthdate.value
    dispatch(editPetAC({ name, spacies, breed, sex, weight, birthdate, id }))
    
    fetch(`http://localhost:4000/put/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, spacies, breed, sex, weight, birthdate }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status) setModalActive(false)
      })
  }
  const firebaseConfig = {
    apiKey: 'AIzaSyCxVb7MPS_-gKr-bUl9VccxfkpwS5EgxT0',
    authDomain: 'pet-sync-e6f45.firebaseapp.com',
    projectId: 'pet-sync-e6f45',
    storageBucket: 'pet-sync-e6f45.appspot.com',
    messagingSenderId: '327180827350',
    appId: '1:327180827350:web:d2b79d0c57824fb3582777',
  }

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  const storage = firebase.storage()

  const onDrop = useCallback(
    async (acceptedFiles) => {
      setLoading(true)
      let formdata = new FormData()
      formdata.append('uploadedFiles', acceptedFiles)
      const file = acceptedFiles[0]
      const ref = await storage.ref(`photos/${file.name}`)
      await ref.put(file)
      const res = await fetch(
        `https://firebasestorage.googleapis.com/v0/b/pet-sync-e6f45.appspot.com/o/photos%2F${file.name}`
      )
      const result = await res.json()
      let token = result.downloadTokens
      const url = `https://firebasestorage.googleapis.com/v0/b/pet-sync-e6f45.appspot.com/o/photos%2F${file.name}?alt=media&token=${token}`
      const photo = await fetch(`http://localhost:4000/put/photo/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: url }),
      })
      const resultFetch = await photo.json()
      dispatch(editPetImgAC({ url: resultFetch.name, id: pet._id }))

      setPetImg(true)
      setLoading(false)
    },
    [storage, dispatch, id, pet._id]
  )

  useEffect(() => {}, [petState])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <>
      <div className="container">
        <div className="main-wrapper1">
          <ProfileNav />

          <div className="pet-profile">
            <div className="formater">
              <div {...getRootProps()} className="image">
                <>
                  {petImg ? (
                    <img
                      src={pet.image}
                      className="pet-image"
                      alt=""
                      width="100%"
                      height="100%"
                    />
                  ) : (
                    <>
                      {loading ? (
                        <Loader />
                      ) : (
                        <>
                          <input {...getInputProps()} />
                          {isDragActive ? (
                            <p>Отпусти для загрузки...</p>
                          ) : (
                            <p>
                              Перетащите сюда фото или кликните, чтобы выбрать
                              файл.
                            </p>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              </div>

              <div className="pet-info">
                <h2 className="info-item">Кличка: {pet.name}</h2>
                <p className="info-item">Вид: {pet.spacies} </p>
                <p className="info-item">Порода: {pet.breed}</p>
                <p className="info-item">Пол: {pet.sex} </p>
                <p className="info-item">Вес: {pet.weight}</p>
                <p className="info-item">Дата рождения: {pet.birthdate}</p>
              </div>
              <div className="edit">
                <img
                  onClick={() => setModalActive(true)}
                  src="/pencil.svg"
                  alt="Изменить информацию"
                  width="50px"
                  title="Изменить информацию"
                />
              </div>
              <div className="del">
                <img
                  onClick={handleDelete}
                  src="/delete.svg"
                  alt="Удалить питомца"
                  width="50px"
                  title="Удалить питомца"
                />
              </div>
            </div>

          </div>
          <Modal active={modalActive} setActive={setModalActive}>
            <form ref={text} className="form-body">
              <h2 className="form-title">Изменить информацию</h2>
              <div className="form-item">
                <input
                  name="name"
                  type="text"
                  placeholder="Кличка"
                  className="form-input"
                  defaultValue={pet.name}
                />
              </div>
              <div className="form-item">
                <input
                  name="spacies"
                  type="text"
                  placeholder="Вид"
                  className="form-input"
                  defaultValue={pet.spacies}
                />
              </div>
              <div className="form-item">
                <input
                  name="breed"
                  type="text"
                  placeholder="Порода"
                  className="form-input"
                  defaultValue={pet.breed}
                />
              </div>
              <div className="form-item">
                <input
                  name="sex"
                  type="text"
                  placeholder="Пол"
                  className="form-input"
                  defaultValue={pet.sex}
                />
              </div>
              <div className="form-item">
                <input
                  name="weight"
                  type="number"
                  placeholder="Вес"
                  className="form-input"
                  defaultValue={pet.weight}
                />
              </div>
              <div className="form-item">
                <input
                  name="birthdate"
                  type="date"
                  placeholder="Вес"
                  className="form-input"
                  defaultValue={pet.birthdate}
                />
              </div>
              <button onClick={handleChange} className="form-buttom">
                Изменить
              </button>
            </form>
          </Modal>

          <div className="diet">
            <Link to={`/feed/${pet._id}`}>
              <div className="pet-diet-base">
                <h2>Базовая диета для {pet.name ? pet.name : 'животного'}</h2>
                <p>Базовая диета</p>
              </div>
            </Link>
            <div className="pet-diet-exact">
              <h2>Точная диета для {pet.name ? pet.name : 'животного'}</h2>
              <p>Точная диета</p>
            </div>
          </div>

          <div className="pet-test">
            <Link
              to={`/tests/blood/${pet._id}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <div className="test-item">
                <h2 className="test-title">Анализ крови</h2>
                <p className="test-desc">Описание теста</p>
                <img className="img" src="/test.jpeg" alt="" width="260px" />
                <img className="plus" src="/plus.svg" alt="" width="50px" />
              </div>
            </Link>
            <Link
              to={`/tests/pee/${pet._id}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <div className="test-item">
                <h2 className="test-title">Анализ мочи</h2>
                <p className="test-desc">Описание теста</p>
                <img className="img" src="/test.jpeg" alt="" width="260px" />
                <img className="plus" src="/plus.svg" alt="" width="50px" />
              </div>
            </Link>
            <Link
              to={`/tests/research/${pet._id}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <div className="test-item">
                <h2 className="test-title">Анализ на витамины</h2>
                <p className="test-desc">Описание теста</p>
                <img className="img" src="/test.jpeg" alt="" width="260px" />
                <img className="plus" src="/plus.svg" alt="" width="50px" />
              </div>
            </Link>
          </div>
          {/* <Link to={`/addanalysis/${id}`}>
            <div className="pet-item-add">
              <p>Добавить анализ</p>
            </div>
            </Link> */}
          {/* <ChartList  /> */}
        </div>
      </div>
    </>
  )
}

export default PetPersonPage
