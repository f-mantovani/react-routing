import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
	const handleClassName = ({ isActive }) => (isActive ? 'selected' : '')
	return (
		<div className='nav'>
			<h2>
				<Link to='/'>React Routing</Link>
			</h2>
			<div className='nav-menu'>
				<NavLink to='/projects'>Projects</NavLink>
				<NavLink to='/about'>About</NavLink>
			</div>
		</div>
	)
}
export default Navbar
