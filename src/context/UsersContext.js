import React, { createContext, useReducer } from 'react'
import users from '../data/users'

const initialState = { users }
const UsersContext = createContext({})

const actions = {
  createUser(state, action) {
    const payload = action.payload
    const user = payload?.user
    user.id = state.users.pop().id + 1

    return {
      ...state,
      users: [...state.users, user]
    }
  },

  updateUser(state, action) {
    const payload = action.payload
    const user = payload?.user
    
    return {
      ...state,
      users: state.users.map(u => u.id !== user.id ? u : user)
    }
  },
  
  deleteUser(state, action) {
    const payload = action.payload
    const user = payload?.user

    return {
      ...state,
      users: state.users.filter(u => u.id !== user.id),
    }
  }
}

export const UsersProvider = props => {
  
  function reducer(state, action) {
    const reducerFunction = actions[action.type]
    return reducerFunction ? reducerFunction(state, action) : state
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  
  return(
    <UsersContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UsersContext.Provider>
  )
}

export default UsersContext