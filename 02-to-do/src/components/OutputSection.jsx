function OutputSection({todo, todate}) {

    return (
        <>
            <div class="container text-center">
                <div class="row">
                    <div class="col-4" id="col">
                        {todo.map((to, index) => (
                            <p key={index}>{to}</p>
                        ))}
                    </div>
                    <div class="col-4" id="col">
                        {todate.map((to, index) => (
                            <p key={index}>{to}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OutputSection