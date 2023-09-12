import '../styles/MoviesList.styles.css'
import MovieCard from './MovieCard.jsx'

const MoviesList = ({ movies }) => {
	return (
		<>
			<h1>Movies List</h1>
			<div className='movie-list'>
				<br />
				{movies && movies.map(movie => <MovieCard key={movie.id} {...movie} />)}
			</div>
		</>
	)
}
export default MoviesList
