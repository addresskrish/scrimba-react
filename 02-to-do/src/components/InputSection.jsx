function InputSection({setTodo, setTodoDate}) {

    function handClick() {
        const input = document.getElementById("input");
        const todoDate = document.getElementById("todoDate");
        const newTodo = input.value;
        const newTodoDate = todoDate.value;
        setTodo((prevTodos) => [...prevTodos, newTodo]);
        setTodoDate((prevTodoDate) => [...prevTodoDate, newTodoDate]);
        input.value = "";
        todoDate.value = "";
    }

    return (
        <>
            <div class="container text-center">
                <div class="row">
                    <div class="col-4">
                        <input id="input" name="text" placeholder="Enter to-do"></input>
                    </div>
                    <div class="col-4">
                        <input type="date" id="todoDate"></input>
                    </div>
                    <div class="col-4">
                        <button type="button" class="btn btn-success" onClick={handClick}>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InputSection