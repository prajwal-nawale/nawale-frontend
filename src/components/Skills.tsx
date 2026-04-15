const coreSkills = [
  { name: "Python", level: 90 },
  { name: "LangGraph", level: 80 },
  { name: "LlamaIndex", level: 80 },
  { name: "RAG", level: 90 },
  { name: "TypeScript", level: 70 },
  { name: "Flask", level: 75 },
]

const webSkills = [
  { name: "React", level: 87 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 80 },
  { name: "MySQL", level: 95 },
  { name: "Docker", level: 70 },
  { name: "Git", level: 85 },
]

function SkillColumn({ title, skills }: any) {
  return (
    <div className="flex flex-col gap-5 flex-1 min-w-0">

      <h3 className="text-base md:text-lg font-semibold">{title}</h3>

      {skills.map((skill: any) => (
        <div key={skill.name} className="flex flex-col gap-1.5">

          {/* Label row — flex wrap so it never overflows */}
          <div className="flex justify-between items-baseline gap-2 text-xs md:text-sm flex-wrap">
            <span className="font-medium">{skill.name}</span>
            <span className="text-gray-500 flex-shrink-0">{skill.level}/100 XP</span>
          </div>

          {/* Bar */}
          <div className="w-full border-2 border-black h-4">
            <div
              className="h-full bg-black"
              style={{ width: `${skill.level}%` }}
            />
          </div>

        </div>
      ))}

    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-8 mt-4 bg-[radial-gradient(#000_0.4px,transparent_0.4px)] bg-[size:6px_6px]">

      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <div className="flex flex-col md:flex-row gap-10 md:gap-12">
        <SkillColumn title="AI / Backend" skills={coreSkills} />
        <SkillColumn title="Web / DevOps" skills={webSkills} />
      </div>

    </section>
  )
}

export default Skills
