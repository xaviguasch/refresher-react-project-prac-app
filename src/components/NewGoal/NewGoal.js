import React from 'react'

import './NewGoal.css'

function NewGoal(props) {
  const addGoalHandler = e => {
    e.preventDefault()

    const newGoal = {
      id: Math.random().toString(),
      text: 'My new goal'
    }

    props.onAddGoal(newGoal)
  }

  return (
    <form className='new-goal' onSubmit={addGoalHandler}>
      <input type='text' />
      <button type='submit'>Add Goals</button>
    </form>
  )
}

export default NewGoal
