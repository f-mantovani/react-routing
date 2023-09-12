import { useEffect, useState } from 'react'

import MovieCard from './MovieCard.jsx'

const MovieDetails = ({ movies }) => {
	const [movie, setMovie] = useState()

	useEffect(() => {
		setMovie()
	}, [])
	return <MovieCard {...movie} />
}
export default MovieDetails
