import { Link } from 'react-router-dom'
import '../styles/MovieCard.styles.css'

const MovieCard = ({ id, title, cast, year, genres }) => {
	return (
		<div className='movie-card'>
			<h3>{title}</h3>
			<div className='cast'>
				Cast:{' '}
				{cast &&
					cast.map((castMember, i) => (
						<span key={castMember + i}>
							<span>{castMember}</span>
							{cast[i + 1] !== undefined && ' -'}
						</span>
					))}
			</div>
			<div>Year: {year}</div>
			<div className='genres'>
				Genres:{' '}
				{genres &&
					genres.map((genre, i) => (
						<span key={genre + i}>
							<span>{genre}</span>
							{genres[i + 1] !== undefined && ' -'}
						</span>
					))}
			</div>
			<Link to={`/movies/${id}`}>See details</Link>
		</div>
	)
}
export default MovieCard
