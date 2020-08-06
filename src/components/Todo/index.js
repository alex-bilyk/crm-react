import React, { useState } from 'react'

function Todo () {
    const [data, setData] = useState([])
    const [value, setValue] = useState('')

    function handleChange (event) {
        setValue(event.target.value)
    }
    
    function handleSubmit (event) {
        event.preventDefault()

        if (!value) {
            alert('The field is empty')

            return
        }

        setData([...data, value])
        setValue('')
    }

    function removeItemFromData (index) {
        const updatedData = [...data]

        updatedData.splice(index, 1)

        setData(updatedData)
    }

    return (
        <>
            <h4>Input a task</h4>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                />

                <button>Submit</button>
            </form>

            <div className="mt-5">
                <h2>Todo list</h2>

                {!!data.length ? <ol className="mt-3 list-group">
                    {data.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="list-group-item list-group-item-action d-flex"
                            >
                                <span className="mr-3">{index + 1}.</span>

                                <span className="font-weight-bold">{item}</span>

                                <span
                                    className="ml-auto btn btn-danger"
                                    onClick={() => removeItemFromData(index)}
                                >
                                    x
                                </span>
                            </li>
                        )
                    })}
                </ol> : <p className="list-group-item">List is empty</p>}
            </div>
        </>
    )
}

export default Todo