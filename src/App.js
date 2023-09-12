import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import Projects from './components/Projects.jsx'
import projectsData from './projects.json'

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects' element={<Projects projects={projectsData} />} />
				<Route path='*' element={<h1>Error Page</h1>} />
			</Routes>
		</div>
	)
}

export default App
