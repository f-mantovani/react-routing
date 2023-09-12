import { Link } from 'react-router-dom'

const ProjectCard = ({ _id, name, technologies, year }) => {
	return (
		<div>
			{year && (
				<>
					<h5>{name}</h5>
					<p>Tech stack: {technologies}</p>
					<p>Year: {year.toString()}</p>
					<Link to={`/projects/${_id}`}>More Details</Link>
					<br />
					<br />
					<br />
					<br />
				</>
			)}
		</div>
	)
}
export default ProjectCard
