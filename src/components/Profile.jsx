import { Navigate } from 'react-router-dom'

const Profile = ({ isLoggedIn }) => {
	return isLoggedIn ? <div>Welcome, Felipe</div> : <Navigate to={'/'} />
}

export default Profile
