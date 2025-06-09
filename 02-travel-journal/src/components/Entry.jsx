import MarkerLogo from "../assets/images/marker.png"

function Entry(props) {
    const { img, name, link, mainname, date, description } = props
    return (
        <>
            <main>
                <div className="main-1">
                        <img src={ img.src } alt={ img.alt }/>
                </div>
                <div className="main-2">
                    <div className="main-2-1">
                        <img src={ MarkerLogo } alt="marker-img" width="15px"/>
                        <p className="name">{ name }</p>
                        <a href={ link }>View on Google Maps</a>
                    </div>
                    <div className="main-2-2">
                        <h1>{ mainname }</h1>
                    </div>
                    <div className="main-2-3">
                        <p className="date">{ date }</p>
                    </div>
                    <div className="main-2-4">
                        <p>{ description }</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Entry