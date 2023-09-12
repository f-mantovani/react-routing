import './App.css'
import MovieCard from './components/MovieCard.jsx'
import MoviesList from './components/MoviesList.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
	return (
		<div className='App'>
			<Navbar />
			<MoviesList />
			<MovieCard />
		</div>
	)
}

export default App
