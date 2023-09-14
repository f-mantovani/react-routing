import { useParams } from 'react-router-dom'
import MovieCard from './MovieCard.jsx'
import { useEffect, useState } from 'react'

const MovieDetails = ({ movies }) => {
	const { id } = useParams()
	// const params = useParams()
	// const id = params.id
	const [movie, setMovie] = useState()

	const moviesCarrousel = [...movies].sort(() => Math.random() - 0.5).slice(0, 3)

	useEffect(() => {
		const movieFound = movies.find(oneMovie => oneMovie.id === id)
		setMovie(movieFound)
	}, [id])

	return (
		<>
			<h1>Movie Details</h1>
			<MovieCard {...movie} />
			<div>
				<br />
				<p>Check those out</p>
				{moviesCarrousel.map(movie => (
					<MovieCard {...movie} />
				))}
			</div>
		</>
	)
}
export default MovieDetails
