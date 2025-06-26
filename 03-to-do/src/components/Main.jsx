import { useState } from "react"

function Main() {

    const [todo, setTodo] = useState([])
    const [editIndex, setEditIndex] = useState([])
    const [editedText, setEditedText] = useState([])

    const todoElements = todo.map((t, index) => {
        return (
                <li key={index}>
                    {t.isEditing ? (
                        <input 
                            value={editedText[index]}
                            onChange={e => setEditedText(prev => ({ ...prev, [index]: e.target.value }))}
                        ></input> ) : t.text }
                    {t.isEditing 
                        ?<button style={{ cursor: "pointer", backgroundColor: "green", color: "aliceblue" }} onClick={() => handleEdit(index)}>Save</button>
                        :<button onClick={() => handleEdit(index)}>Edit</button>
                    }

                        <button style={{ cursor: "pointer", backgroundColor: "red", color: "aliceblue" }} onClick={() => handleDelete(index)} key={index}>delete</button>
                </li>
        )
    })

    const handleSubmit = (fromData) => {
        const newTodo = fromData.get("todo")
        setTodo(prevTodo => [...prevTodo, {text: newTodo, isEditing: false}])
    }

    const handleDelete = (indexDelete) => {
        const newTodo = todo.filter((_,index) => index != indexDelete)
        setTodo(newTodo)
    }

    const handleEdit = (indexEdit) => {
        if (todo[indexEdit].isEditing) {
  
            const newTodo = todo.map((item, i) =>
                i === indexEdit
                    ? { text: editedText[indexEdit], isEditing: false }
                    : item
            )
            setTodo(newTodo)
        } else {
            const newTodo = todo.map((item, i) =>
                i === indexEdit
                    ? { ...item, isEditing: true }
                    : item
            )
        setTodo(newTodo)
        setEditedText(prev => ({ ...prev, [indexEdit]: todo[indexEdit].text }))
}

    }

    return (
        <>
            <main>
                <div className="main-con">
                    <form action={handleSubmit}>
                        <input type="text" name="todo" placeholder="Enter a to-do..." required/>
                        <button>Submit</button>
                    </form>
                    <ul>
                        {todoElements}
                    </ul>
                </div>
            </main>
        </>
    )
}

export default Main