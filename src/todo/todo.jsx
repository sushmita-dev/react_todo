import React, { useState } from 'react'

function Todo() {
    const [todoText, setTodoText] = useState('')
    const [todolist, setTodoList] = useState([])

    const handleChange = (event) => {
        console.log(event.target.value)
        setTodoText(event.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setTodoList([...todolist, todoText])
        setTodoText('')
    }
    return (
        <div>
            <h3>Sushmita's Todos</h3>
            <div>
                <input value={todoText} type='text' onChange={e => handleChange(e)} />
                <button onClick={e => handleSubmit(e)} > Submit</button>
            </div>
            <div>
                <ul>
                    {
                        todolist.map((todo) => {
                            return <li>{todo}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Todo