import React from 'react'
import { Link } from 'react-router-dom'
import './Pet.css'

function Pet({ value }) {
  return (
    <>
      <Link
        to={`/mypets/${value._id}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <div className="pet-item">
          <h2 className="pet-title">{value.name}</h2>
          <p className="pet-desc">{value.breed}</p>
          <img className="img" src="/kotenok.jpeg" alt="" width="260px" />
        </div>
      </Link>
    </>
  )
}

export default Pet
