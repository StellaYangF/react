import React, { useState, useEffect } from "react";
import { createStore } from 'redux';
export default function() {
  let [ counter, setCounter ] = useState({ number: 0 });
  let reducer = (state = counter, action) => {
    if (action.type === 'increment') return { number: state.number + 1 };
    else return state;
  }
  let store = createStore(reducer);

  useEffect(() => {
    return store.subscribe(() => setCounter({ number: store.getState().number }));
  })

  return (
    <>
      {/* <p>{ counter.number }</p> */}
      {/* <button onClick={ () => setCounter ({ number: counter.number + 1 }) } className='btn btn-primary'>+</button> */}
      <br />
      <p>{ counter.number }</p>
      <button onClick={ () => store.dispatch({ type: 'increment' }) } className='btn btn-primary'>+</button>
    </>
  )
}