import React, { useState } from 'react'

import './NewGoal.css'

function NewGoal(props) {
  const [enteredText, setEnteredText] = useState('')

  const addGoalHandler = e => {
    e.preventDefault()

    const newGoal = {
      id: Math.random().toString(),
      text: enteredText
    }

    setEnteredText('')

    props.onAddGoal(newGoal)
  }

  const textChangeHandler = e => {
    setEnteredText(e.target.value)
  }

  return (
    <form className='new-goal' onSubmit={addGoalHandler}>
      <input type='text' value={enteredText} onChange={textChangeHandler} />
      <button type='submit'>Add Goals</button>
    </form>
  )
}

export default NewGoal
