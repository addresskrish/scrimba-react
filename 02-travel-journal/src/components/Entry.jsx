import MarkerLogo from "../assets/images/marker.png"

function Entry(props) {
    const { id, img, country, googleMapsLink, title, dates, text } = props
    return (
        <>
            <main>
                <div className="main-1">
                        <img src={ img.src } alt={ img.alt }/>
                </div>
                <div className="main-2">
                    <div className="main-2-1">
                        <img src={ MarkerLogo } alt="marker-img" width="15px"/>
                        <p className="name">{ country }</p>
                        <a href={ googleMapsLink }>View on Google Maps</a>
                    </div>
                    <div className="main-2-2">
                        <h1>{ title }</h1>
                    </div>
                    <div className="main-2-3">
                        <p className="date">{ dates }</p>
                    </div>
                    <div className="main-2-4">
                        <p>{ text }</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Entry