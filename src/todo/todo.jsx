import React, { useState } from 'react'
import bin from '../assests/images/trash-can.png'
import './todo.css'

function Todo() {
    const [todoText, setTodoText] = useState('')
    const [todolist, setTodoList] = useState([])

    const handleChange = (event) => {
        console.log(event.target.value)
        setTodoText(event.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (todoText.trim() === '') {
            return;
        }

        setTodoList([...todolist, todoText])
        setTodoText('')
    }
    return (
        <div className='todo'>
            <div className='todo-header'>
                <h3>Sushmita's Todos</h3>
            </div>
            <form className='todo-input' onSubmit={e => handleSubmit()}>
                <input placeholder="Add some todos..." value={todoText} type='text' onChange={e => handleChange(e)} className='todo-text-input' />
                <button onClick={e => handleSubmit(e)} className='todo-button'> Submit</button>
            </form>
            <div className='todo-body'>
                {
                    todolist.length === 0 ?

                        <span className='empty-todo'>
                            Your Todo is empty
                        </span>
                        : <div className='todo-list'>
                            {
                                todolist.map((todo) => {
                                    return <div className='todo-element'>{todo}<img className="delete-button"width='20px' height='20px' src={bin} alt="delete icon" /> </div>
                                })
                            }
                        </div>

                }
            </div>
        </div>
    )
}

export default Todo