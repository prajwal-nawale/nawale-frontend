import { useState } from 'react'

function ProjectCard({ project }: any) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border-2 border-black shadow-[6px_6px_0px_black]">

      {/* Top bar */}
      <div className="border-b-2 border-black px-4 py-2 flex items-center gap-2 text-xs">
        <div className="w-3 h-3 border border-black"></div>
        <div className="w-3 h-3 border border-black"></div>
        <div className="w-3 h-3 border border-black"></div>
        <span className="ml-2">{project.date}</span>
      </div>

      {/* Image — only when collapsed */}
      {!expanded && project.image && (
        <div className="border-b-2 border-black">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-36 md:h-40 object-cover grayscale"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-4 md:p-5 flex flex-col gap-3 md:gap-4">

        <h3 className="font-bold text-base md:text-lg">{project.title}</h3>

        {!expanded ? (
          <>
            <p className="text-sm text-gray-600 line-clamp-3">
              {project.description}
            </p>

            <button
              onClick={() => setExpanded(true)}
              className="border-2 border-black px-4 py-2 text-sm w-fit shadow-[3px_3px_0px_black] hover:shadow-none transition"
            >
              Expand →
            </button>
          </>
        ) : (
          <>
            <ul className="text-sm flex flex-col gap-2 list-disc pl-5">
              {project.points.map((point: string, i: number) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="flex gap-4 mt-2 flex-wrap">
              <a
                href={project.link}
                target="_blank"
                className="border-2 border-black px-4 py-2 text-sm shadow-[3px_3px_0px_black] hover:shadow-none transition"
              >
                View Project
              </a>

              <button
                onClick={() => setExpanded(false)}
                className="text-sm underline"
              >
                Collapse
              </button>
            </div>
          </>
        )}

      </div>

    </div>
  )
}

export default ProjectCard
