import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
      <div className='projects_bottom'>
        <a
          href='https://github.com/thalalhassan'
          aria-label='source code'
          className='link link--icon'
        >
          More
        </a>
      </div>
    </section>
  )
}

export default Projects
