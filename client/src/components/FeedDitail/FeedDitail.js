import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { editFeedAC } from '../../utils/redux/actionCreators/actionCreators'

function FeedDitail({ value }) {
  const feedArray = useSelector((state) => state.feedReducer.feed)
  const dispatch = useDispatch()
  const { id } = useParams()
  const history = useHistory()
  const [state, setState] = useState(true)
  const text = useRef()

  const findFeed = feedArray.find((item) => item._id === id)

  const editFeed = (ev) => {
    ev.preventDefault()
    const editFeed = {
      _id: findFeed._id,
      img: findFeed.img,
      type: text.current.type.value,
      age: text.current.age.value,
      size: text.current.size.value,
      veterinaryDiet: text.current.veterinaryDiet.value,
      brand: text.current.brand.value,
      name: text.current.name.value,
    }
    dispatch(editFeedAC(editFeed))
    fetch(`http://localhost:4000/edit/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editFeed),
    })
      .then((res) => res.json())
      .then((result) => {
        alert('Изменения успешно сохранены')
      })
      .then(setState(true))
  }

  const delFeed = (ev) => {
    ev.preventDefault()
    fetch(`http://localhost:4000/delfeed/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status) {
          alert('Корм успешно удален из базы')
        } else {
          alert('Что-то пошло не так')
        }
      })
      .then(() => history.push('/feed'))
  }

  return (
    <div>
      {state === false ? (
        <form ref={text}>
          <div>
            <label>
              <h5>
                {' '}
                Брэнд: <input name="brand" defaultValue={value.brand} />{' '}
              </h5>
            </label>
            <label>
              {' '}
              <p>
                Наименование: <input name="name" defaultValue={value.name} />
              </p>
            </label>
            <label>
              {' '}
              <p>
                Для кого: <input name="type" defaultValue={value.type} />
              </p>
            </label>
            <label>
              <p>
                Возраст: <input name="age" defaultValue={value.age} />
              </p>
            </label>
            <label>
              <p>
                Размер: <input name="size" defaultValue={value.size} />
              </p>
            </label>
            <label>
              <p>
                Особые потребности:{' '}
                <input
                  name="veterinaryDiet"
                  defaultValue={value.veterinaryDiet}
                />
              </p>
            </label>
          </div>
          <button onClick={editFeed} type="button">
            Сохранить
          </button>
          <button
            onClick={() => {
              setState(true)
            }}
            type="button"
          >
            Передумал
          </button>
        </form>
      ) : (
        <div>
          <img src={value.img} alt="" />
          <div>
            <h5>Брэнд: {value.brand}</h5>
            <p>Наименование: {value.name}</p>
            <p>Для кого: {value.type}</p>
            <p>Возраст: {value.age}</p>
            <p>Размер: {value.size}</p>
            <p>Особые потребности: {value.veterinaryDiet}</p>
          </div>
          <button
            onClick={() => {
              setState(false)
            }}
            type="button"
          >
            Редактировать
          </button>
          <button onClick={delFeed} type="button">
            Удалить
          </button>
        </div>
      )}
    </div>
  )
}

export default FeedDitail
