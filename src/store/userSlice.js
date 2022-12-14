import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: { name: 'Kim', age: 30 },
  reducers: {
    changeName(state) {
      state.name = 'Park';
    },

    increaseAge(state, action) {
      state.age += action.payload;
    },
  },
});

export let { changeName, increaseAge } = user.actions;

export default user;
