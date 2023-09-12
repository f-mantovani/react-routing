import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import MoviesList from './components/MoviesList.jsx'
import About from './components/About.jsx'

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movies' element={<MoviesList />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</div>
	)
}

export default App
