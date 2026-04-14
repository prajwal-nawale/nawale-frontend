import Hero from '../components/Hero'
import QuickLinks from '../components/QuickLinks'
import Projects from '../components/Projects'
import Chatbot from '../components/Chatbot'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

function Home() {
  return (
    <main>
      <Hero />
      <QuickLinks />
      <Projects />
      <Chatbot />
      <Skills />
      <Contact />
    </main>
  )
}

export default Home