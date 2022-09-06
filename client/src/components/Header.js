import { NavLink, Navigate, useNavigate } from 'react-router-dom'



function Header(props) {

    const navigate = useNavigate()

    const handleSubmit = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <header>
            <h3>{props.logo}</h3>
            <nav>
                {props.user ? (
                    <>
                        <span>Welcome, {props.user.email}</span>
                        {props.user ? <button onClick={handleSubmit}>Logout</button> : <></>}
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