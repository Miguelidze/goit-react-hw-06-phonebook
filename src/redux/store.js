import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';
// import {createAction,nanoid} from '@reduxjs/toolkit'


const increment = createAction('contacts/increment');
const decrement = createAction('contacts/increment');


const myReducer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state + action.payload,

});
export const store = configureStore({
    reducer: {
      contacts: myReducer,   
  },
})



// const addTodo = createAction('todos/add', function prepare(text) {
      //   return {
      //     payload: {
      //       text,
      //       id: nanoid(),
      //       createdAt: new Date().toISOString(),
      //     },
      //   }
      // })

      // console.log(addTodo('Write more docs'))