import Hero from '@/features/hero/Hero'
import Projects from '@/features/projects/Projects'
import Technologies from '@/features/technologies/Technologies'
import About from '@/features/about/About'
import Contact from '@/features/contact/Contact'
import Navigation from '@/features/navigation/Navigation'
import Footer from '@/features/footer/Footer'

export default function Home () {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Technologies />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
