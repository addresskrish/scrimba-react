import GlobeLogo from "../assets/images/globe.png"

function Header() {
    return (
        <>
            <header>
                <img src={ GlobeLogo } alt="globe-img" height="30px" />
                <p className="header-p">Travel Journal</p>
            </header>
        </>
    )
}

export default Header