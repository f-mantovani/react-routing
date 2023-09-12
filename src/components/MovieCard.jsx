import '../styles/MovieCard.styles.css'

const MovieCard = ({ title, cast, year, genres }) => {
	return (
		<div className='movie-card'>
			<h3>{title}</h3>
			<div className='cast'>
				Cast:{' '}
				{cast.map((castMember, i) => (
					<span key={castMember + i}>
						<span>{castMember}</span>
						{cast[i + 1] !== undefined && ' -'}
					</span>
				))}
			</div>
			<div>Year: {year}</div>
			<div className='genres'>
				Genres:{' '}
				{genres.map((genre, i) => (
					<span key={genre + i}>
						<span>{genre}</span>
						{genres[i + 1] !== undefined && ' -'}
					</span>
				))}
			</div>
		</div>
	)
}
export default MovieCard
