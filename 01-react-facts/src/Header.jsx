import reactLogo from './assets/react-logo.png'
function Header() {
    return (
        <>
            <nav>
                <img src={ reactLogo } width="40px" alt="react-logo" />
                <span><h1>React Facts</h1></span>
            </nav>
        </>
    )
}

export default Header