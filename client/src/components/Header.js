import { NavLink } from 'react-router-dom'

function Header(props) {
    return (
        <header>
            <h3>{props.logo}</h3>
            <nav>
                {props.user ? (
                    <>
                        <span>Welcome, {props.user.email}</span>
                    </>
                ) : (
                    <>
                        <NavLink to="/">Home</NavLink>
                    </>
                )}

            </nav>
        </header>
    )
}

export default Header