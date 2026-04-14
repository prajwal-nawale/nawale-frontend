
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
    <div className="flex flex-col gap-6 flex-1">

      <h3 className="text-lg font-semibold">{title}</h3>

      {skills.map((skill: any) => (
        <div key={skill.name} className="flex flex-col gap-2">

          {/* Label */}
          <div className="flex justify-between text-sm">
            <span>{skill.name}</span>
            <span>{skill.level}/100 XP</span>
          </div>

          {/* Bar */}
          <div className="w-full border-2 border-black h-5">
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
    <section id="skills" className="max-w-5xl mx-auto px-10 py-5 mt-5 bg-[radial-gradient(#000_0.4px,transparent_0.4px)] bg-[size:6px_6px]">

      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      {/* Two Column Layout */}
      <div className="flex gap-12">

        <SkillColumn title="AI / Backend" skills={coreSkills} />
        <SkillColumn title="Web / DevOps" skills={webSkills} />

      </div>

    </section>
  )
}

export default Skills