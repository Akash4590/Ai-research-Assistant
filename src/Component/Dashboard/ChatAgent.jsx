import React, { useState, useRef, useEffect } from "react";
import { Send, Mic, Sparkles, Zap, CheckCircle2 } from "lucide-react";

const INITIAL_MESSAGES = [
  {
    from: "ai",
    text: "Hey there 👋 I'm your Mindscribe assistant. Upload a document or just ask me anything!",
  },
];

const ChatAgent = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "ai",
          text: "I've analyzed your query and here's what I found. Feel free to ask follow-up questions or upload a document for deeper insights.",
        },
      ]);
      setIsTyping(false);
    }, 1600);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Status badges */}
      <div className="flex gap-2 mb-4">
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-semibold bg-[#4f8ef7]/10 text-[#4f8ef7] border border-[#4f8ef7]/20">
          <Zap size={10} /> AI Ready
        </span>
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-semibold bg-[#34d399]/10 text-[#34d399] border border-[#34d399]/20">
          <CheckCircle2 size={10} /> Connected
        </span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-4 pb-2 pr-1">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-end gap-2 ${msg.from === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            {msg.from === "ai" && (
              <div className="w-7 h-7 min-w-[28px] rounded-full bg-gradient-to-br from-[#4f8ef7] to-[#7c5cfc] flex items-center justify-center">
                <Sparkles size={12} color="white" />
              </div>
            )}
            <div
              className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm leading-relaxed animate-[fadeUp_0.25s_ease]
                ${
                  msg.from === "user"
                    ? "bg-gradient-to-br from-[#4f8ef7] to-[#7c5cfc] text-white rounded-br-sm shadow-[0_4px_20px_rgba(79,142,247,0.3)]"
                    : "bg-[#131a28] border border-white/[0.06] text-[#e8edf5] rounded-bl-sm"
                }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-end gap-2">
            <div className="w-7 h-7 min-w-[28px] rounded-full bg-gradient-to-br from-[#4f8ef7] to-[#7c5cfc] flex items-center justify-center">
              <Sparkles size={12} color="white" />
            </div>
            <div className="flex gap-1.5 px-4 py-3 bg-[#131a28] border border-white/[0.06] rounded-2xl rounded-bl-sm">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#8899b4] animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Input area */}
      <div className="mt-4 flex items-end gap-2.5 bg-[#131a28] border border-white/[0.06] rounded-2xl px-3 py-3 focus-within:border-[#4f8ef7]/35 transition-colors">
        <button className="w-[38px] h-[38px] rounded-[10px] bg-[#0e1420] border border-white/[0.1] text-[#8899b4] hover:text-white flex items-center justify-center transition-colors shrink-0">
          <Mic size={15} />
        </button>
        <textarea
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything about your documents…"
          className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder-[#5a6680] resize-none max-h-32 leading-relaxed"
        />
        <button
          onClick={handleSend}
          className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-[#4f8ef7] to-[#7c5cfc] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(79,142,247,0.35)] hover:opacity-90 hover:scale-105 active:scale-95 transition-all shrink-0"
        >
          <Send size={15} />
        </button>
      </div>
    </div>
  );
};

export default ChatAgent;