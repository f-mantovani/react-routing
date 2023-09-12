const ProjectCard = ({ _id, name, technologies, year }) => {
	return (
		<div key={_id}>
			<h5>{name}</h5>
			<p>Tech stack: {technologies}</p>
			<p>Year: {year}</p>
			<br />
		</div>
	)
}
export default ProjectCard
