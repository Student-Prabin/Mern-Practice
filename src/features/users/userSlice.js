import { createSlice } from "@reduxjs/toolkit";
import { getUsersFromLocal, setUsersToLocal } from "../../local/localStorage";





export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: getUsersFromLocal()
  },

  reducers: {

    addUser: (state, action) => {
      state.users.push(action.payload);
      setUsersToLocal(state.users);
    },

    updateUser: (state, action) => {

    },

    removeUser: (state, action) => {
      state.users.splice(action.payload, 1);
      setUsersToLocal(state.users);
    }

  }



});

export const { addUser, removeUser } = userSlice.actions;