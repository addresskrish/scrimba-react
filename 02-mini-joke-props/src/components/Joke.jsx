import { useId } from "react"

function Joke(props) {
    console.log(props)
    const { id, setup, punchline } = props

    return (
        <>
            <main>
                <h1>{ id }</h1>
                <h3>Setup: {props.setup}</h3>
                <h3>Puchline: {props.punchline}</h3>
            </main>
        </> 
    )
}

export default Joke