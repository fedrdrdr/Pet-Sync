import React, { useRef } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../Forms/FormStyle.css'


function PetCard() {
  const userState = useSelector((state) => state.usersReducer)
  const text = useRef()
  const history = useHistory()
  //событие по кнопке
  const addAnimal = (event) => {
    event.preventDefault()
    //объект для загрузки в бд
    const newPet = {
      image: 'asd',
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
      .then((result) => alert(result.message))
      //редирект на MyPets
      .then(() => history.push('/mypets'))
  }

  return (
    <div>
      {/* <form ref={text} className="form-body">
        <input required name="name" placeholder="Кличка" />
        <input name="spacies" placeholder="Вид" />
        <input name="breed" placeholder="Порода" />
        <input name="sex" placeholder="Пол" />
        <input name="birthdate" placeholder="Дата рождения" />
        <input name="weight" placeholder="Вес" />

        <button onClick={addAnimal} type="submit">
          Добавить питомца
        </button>
      </form> */}
      {/* <div className="form"> */}
          
        {/* </div> */}
    </div>
  )
}

export default PetCard
