import Journey from './journey/Journey'
import Philosophy from './philosophy/Philosophy'

const About = () => {
  return (
    <section id='about' className='flex flex-col md:flex-row min-h-screen'>
      <Journey />
      <Philosophy />
    </section>
  )
}

export default About
