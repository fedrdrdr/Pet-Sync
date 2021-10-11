import { INIT_PET, EDIT_PET, EDIT_PET_IMG } from '../actionTypes/actionTypes'

const petsReducer = (state = {}, action) => {
  switch (action.type) {
    case INIT_PET:
      return { ...state, pet: action.payload }

    case EDIT_PET:
      const newArr = [...state.pet]
      const pet = newArr.find((el) => el._id === action.payload.id)
      pet.name = action.payload.name
      pet.spacies = action.payload.spacies
      pet.breed = action.payload.breed
      pet.sex = action.payload.sex
      pet.weight = action.payload.weight
      pet.birthdate = action.payload.birthdate
      return { ...state, pet: newArr }

    case EDIT_PET_IMG:
      
      return { ...state, pet: state.pet.map(el => {
          if (el._id === action.payload.id) {
            
            return {
              ...el, image: action.payload.url
            }
          }
          return el
      })}

    default:
      return state
  }
}

export default petsReducer
