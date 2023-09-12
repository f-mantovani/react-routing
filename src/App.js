import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects' element={<h1> Projects </h1>} />
				<Route path='*' element={<h1>Error Page</h1>} />
			</Routes>
		</div>
	)
}

export default App
