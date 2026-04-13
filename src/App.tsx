import { useState, useRef, useEffect } from 'react'
import axios from 'axios'

interface Message {
  role: 'user' | 'bot'
  content: string
}

function App() {
  const [messages, setMessages] = useState<Message[]>([])
  const [question, setQuestion] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    if (!question.trim() || loading) return

    const userMessage: Message = { role: 'user', content: question }
    setMessages(prev => [...prev, userMessage])
    setQuestion('')
    setLoading(true)

    try {
      const res = await axios.post('https://api.nawale.in/chat', {
        question
      })
      const botMessage: Message = { role: 'bot', content: res.data.answer }
      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      const errMessage: Message = {
        role: 'bot',
        content: 'Something went wrong. Try again!'
      }
      setMessages(prev => [...prev, errMessage])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage()
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">

      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-2">Prajwal Nawale</h1>
        <p className="text-orange-500 text-xl mb-4">AI Engineer · Full Stack Developer</p>
        <p className="text-gray-400 max-w-md mx-auto">
          Building intelligent systems with LangChain, LangGraph, RAG pipelines, and modern web tech.
        </p>
        <div className="flex gap-4 justify-center mt-6">
          <a href="https://github.com/prajwal-nawale" target="_blank"
            className="border border-orange-500 text-orange-500 px-6 py-2 rounded hover:bg-orange-500 hover:text-black transition">
            GitHub
          </a>
          <a href="/prajwal_nawale.pdf" target="_blank"
            className="bg-orange-500 text-black px-6 py-2 rounded font-bold hover:bg-orange-400 transition">
            Resume
          </a>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-bold mb-4 text-orange-500">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {["Python", "Flask", "LangChain", "LangGraph", "RAG", "LlamaIndex",
            "React", "TypeScript", "Node.js", "Docker", "MongoDB", "MySQL"].map(skill => (
            <span key={skill}
              className="border border-gray-600 text-gray-300 px-4 py-1 rounded-full text-sm hover:border-orange-500 hover:text-orange-500 transition">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="mb-12 text-center max-w-3xl w-full">
        <h2 className="text-2xl font-bold mb-4 text-orange-500">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "AI Resume Chatbot",
              desc: "RAG pipeline using LlamaIndex, Pinecone, and OpenRouter. Deployed on Render.",
              link: "https://nawale-backend.onrender.com"
            },
            {
              title: "Portfolio Website",
              desc: "React + TypeScript + Tailwind. Dark cinematic theme. Deployed on Vercel.",
              link: "#"
            }
          ].map(project => (
            <div key={project.title}
              className="border border-gray-700 rounded-lg p-4 text-left hover:border-orange-500 transition">
              <h3 className="text-white font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{project.desc}</p>
              <a href={project.link} target="_blank"
                className="text-orange-500 text-sm hover:underline">
                View →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Chatbot */}
      <div className="w-full max-w-2xl mb-12">
        <h2 className="text-2xl font-bold mb-2 text-orange-500 text-center">
          Ask My AI Assistant
        </h2>
        <p className="text-gray-400 text-center text-sm mb-4">
          Ask anything about my skills, projects, or background
        </p>

        {/* Messages */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 h-72 overflow-y-auto mb-3 flex flex-col gap-3">
          {messages.length === 0 && (
            <p className="text-gray-600 text-sm text-center mt-24">
              Ask me anything about Prajwal...
            </p>
          )}
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                msg.role === 'user'
                  ? 'bg-orange-500 text-black font-medium'
                  : 'bg-gray-800 text-gray-200'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-800 text-gray-400 px-4 py-2 rounded-lg text-sm">
                Typing...
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Prajwal's skills, projects..."
            className="flex-1 bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg text-sm focus:outline-none focus:border-orange-500 transition"
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-orange-500 text-black px-6 py-2 rounded-lg font-bold hover:bg-orange-400 transition disabled:opacity-50">
            Send
          </button>
        </div>
      </div>

      {/* Contact */}
      <div className="text-center text-gray-500 text-sm">
        <p>📧 prajwalnawale817@gmail.com · 📍 Pune, Maharashtra</p>
        <p className="mt-1">
          <a href="https://linkedin.com/in/prajwalnawale" target="_blank"
            className="text-orange-500 hover:underline">LinkedIn</a>
          {" · "}
          <a href="https://github.com/prajwal-nawale" target="_blank"
            className="text-orange-500 hover:underline">GitHub</a>
        </p>
      </div>

    </div>
  )
}

export default App