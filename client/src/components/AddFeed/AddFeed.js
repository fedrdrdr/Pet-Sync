import React, { useRef } from 'react';
import { useHistory } from "react-router-dom";

function AddFeed() {
  const text = useRef()
  const history = useHistory()
  const addFeed = (event) => {
    event.preventDefault()
    const newFeed = {
      img: '',
      type: text.current.type.value,
      age: text.current.age.value,
      size: text.current.size.value,
      veterinaryDiet: text.current.veterinaryDiet.value,
      brand: text.current.brand.value,
      name: text.current.name.value,
    };
    fetch("http://localhost:4000/addfeed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFeed),
    })
      .then((res) => res.json())
      .then((result) => alert(result.message))
      .then(() => history.push("/feed"));
  };
  return (
    <form ref={text}>
      <label>
        Животное
        <select name="type">
          <option>Собаки</option>
          <option>Кошки</option>
        </select>
      </label>
      <br />
      <label>
        Возраст
        <select name="age">
          <option>1 - 12 мес</option>
          <option>от 1 года до 7 лет</option>
          <option>от 7 лет</option>
        </select>
      </label>
      <br />
      <label>
        Размер
        <select name="size">
          <option></option>
          <option>Маленькая</option>
          <option>Средняя</option>
          <option>Крупная</option>
        </select>
      </label>
      <br />
      <label>
        Особые потребности
        <select name="veterinaryDiet">
          <option></option>
          <option>Чувствительное пищеварение</option>
          <option>Стерилизованное или кастрированное животное</option>
          <option>Контроль над весом</option>
        </select>
      </label>
      <br />
      <label>
        Производитель
        <input name="brand" />
      </label>
      <br />
      <label>
        Наименование
        <input name="name" />
      </label>
      <br />
      <button onClick={addFeed}>Сохранить</button>
    </form>
  );
}

export default AddFeed;
