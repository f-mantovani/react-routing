import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import MoviesList from './components/MoviesList.jsx'
import About from './components/About.jsx'
import moviesData from './movies.json'
import MovieDetails from './components/MovieDetails.jsx'
import { useState } from 'react'
import Profile from './components/Profile.jsx'

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	return (
		<div className='App'>
			<Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movies' element={<MoviesList movies={moviesData} />} />
				<Route path='/movies/:id' element={<MovieDetails movies={moviesData} />} />
				<Route path='/profile' element={<Profile isLoggedIn={isLoggedIn} />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</div>
	)
}

export default App
