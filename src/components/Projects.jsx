import ProjectCard from './ProjectCard.jsx'

const Projects = ({ projects }) => {
	return (
		<>
			<h1>Projects</h1>
			{projects && projects.map(project => <ProjectCard {...project} key={project._id} />)}
		</>
	)
}
export default Projects
