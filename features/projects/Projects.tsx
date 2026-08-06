import ProjectsSection from './components/ProjectsSection'

const Projects = () => {
  return (
    <section id='projects' className='border-t border-gold/10 pt-10 '>
      <h1 className=' relative ml-5 font-brand text-xs uppercase tracking-[0.5em] text-gold pb-3 border-b  border-gold/40 w-fit'>
        Personal Projects
      </h1>
      <ProjectsSection />
    </section>
  )
}

export default Projects
