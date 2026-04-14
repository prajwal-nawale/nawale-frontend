import { useRef } from 'react'
import { projects } from '../data'
import ProjectCard from './ProjectCard'

function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 350,
      behavior: 'smooth'
    })
  }

  return (
    <section id="projects" className="max-w-5xl mx-auto px-10 pb-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold">Projects</h2>

        {/* Next Button */}
        <button
          onClick={scrollRight}
          className="border-2 border-black px-4 py-2 text-sm shadow-[3px_3px_0px_black] hover:shadow-none transition"
        >
          Next →
        </button>
      </div>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {projects.map((project) => (
          <div key={project.title} className="min-w-[300px]">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

    </section>
  )
}

export default Projects