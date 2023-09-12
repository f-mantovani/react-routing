import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard.jsx'

const ProjectDetails = ({ projects }) => {
	const { id } = useParams()
	const [project, setProject] = useState()

	useEffect(() => {
		const projectFound = projects.find(project => project._id === id)
		setTimeout(() => {
			setProject(projectFound)
		}, 3000)
	}, [id])

	return (
		<>
			<h1>Project Details</h1>
			<h6>for {project && project.name}</h6>
			<br />
			<ProjectCard {...project} />
		</>
	)
}
export default ProjectDetails
