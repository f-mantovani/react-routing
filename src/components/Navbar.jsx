import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
	const navigate = useNavigate()

	function handleLogin() {
		// Some login logic
		// Sending credentials to backend
		// After backend confirms they're are correct
		setIsLoggedIn(!isLoggedIn)
		// redirect the user
		navigate('/profile')
	}

	return (
		<div className='nav'>
			<h2>
				<Link to='/'>React Routing</Link>
			</h2>
			<div className='nav-menu'>
				<NavLink to='/movies'>Movies</NavLink>
				<NavLink to='/about'>About</NavLink>
				<NavLink to={'/profile'}>Profile</NavLink>
				<button onClick={handleLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>
			</div>
		</div>
	)
}
export default Navbar
