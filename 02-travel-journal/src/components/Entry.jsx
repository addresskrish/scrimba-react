import JapanImg from "../assets/images/japan.jpeg"
import MarkerLogo from "../assets/images/marker.png"

function Entry() {
    return (
        <>
            <main>
                <div className="main-1">
                        <img src={ JapanImg } alt="Japan-img" />
                </div>
                <div className="main-2">
                    <div className="main-2-1">
                        <img src={ MarkerLogo } alt="marker-img" width="15px"/>
                        <p className="name">JAPAN</p>
                        <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
                    </div>
                    <div className="main-2-2">
                        <h1>Mount Fuji</h1>
                    </div>
                    <div className="main-2-3">
                        <p className="date">12, Jan, 2023 - 24 Jan, 2023</p>
                    </div>
                    <div className="main-2-4">
                        <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Entry