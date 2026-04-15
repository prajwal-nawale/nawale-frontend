import { useState, useRef, useEffect } from 'react'
import axios from 'axios'

function Chatbot() {
  const [messages, setMessages] = useState<any[]>([])
  const [question, setQuestion] = useState('')
  const [loading, setLoading] = useState(false)

  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight
    }
  }, [messages])

  const sendMessage = async () => {
    if (!question.trim()) return

    const userMsg = { role: 'user', content: question }
    setMessages((prev) => [...prev, userMsg])
    setQuestion('')
    setLoading(true)

    try {
      const res = await axios.post('https://api.nawale.in/chat', {
        question,
      })

      const botMsg = { role: 'bot', content: res.data.answer }
      setMessages((prev) => [...prev, botMsg])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'bot', content: 'Something went wrong.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="chatbot" className="max-w-5xl mx-auto px-6 py-12 md:py-20">
      <h2 className="text-3xl font-bold mb-6">AI Assistant</h2>

      <div className="border-2 border-black shadow-[6px_6px_0px_black]">

        {/* Header */}
        <div className="border-b-2 border-black px-4 py-2 text-sm">
          Bravo-6 | Status: ONLINE
        </div>

        {/* Messages */}
        <div
          ref={chatContainerRef}
          className="h-52 md:h-80 overflow-y-auto p-4 flex flex-col gap-3"
        >
          {messages.map((msg, i) => (
            <div key={i} className={msg.role === 'user' ? 'text-right' : ''}>
              <span className="border-2 border-black px-3 py-1 inline-block text-sm">
                {msg.content}
              </span>
            </div>
          ))}

          {loading && <p className="text-sm text-gray-500">Typing...</p>}
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            sendMessage()
          }}
          className="border-t-2 border-black flex"
        >
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask about my projects..."
            className="flex-1 px-4 py-2.5 outline-none text-sm min-w-0"
          />

          <button
            type="submit"
            className="border-l-2 border-black px-5 py-2.5 text-sm font-medium flex-shrink-0"
          >
            Send
          </button>
        </form>

      </div>
    </section>
  )
}

export default Chatbot
