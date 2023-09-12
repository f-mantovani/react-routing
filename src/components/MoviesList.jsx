import '../styles/MoviesList.styles.css'
import MovieCard from './MovieCard.jsx'

const MoviesList = ({ movies }) => {
	return (
		<div className='movie-list'>
			{movies.map(movie => (
				<MovieCard key={movie.title + movie.year} {...movie} />
			))}
		</div>
	)
}
export default MoviesList
