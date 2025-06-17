import headerLogo from '../assets/chef-claude-icon.png'

function Header() {
    return (
        <>
            <header>
                <img src={headerLogo} alt="header-logo" height="50px" />
                <h1>Chef Claude</h1>
            </header>
        </>
    )
}

export default Header