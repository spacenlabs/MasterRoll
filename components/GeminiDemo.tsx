import React, { useState, useRef, useEffect } from 'react';
import { BrainCircuit, Send, User, Loader2, Sparkles } from './Icons';
import { generateAiResponse } from '../services/geminiService';
import { ChatMessage, ChatRole } from '../types';

const GeminiDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: ChatRole.MODEL, text: "Namaste! I am your MasterRoll AI Tutor. I can help you with math problems, science concepts, or explain how MasterRoll works. Ask me anything!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: ChatRole.USER, text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate network delay for better UX if API is instant
    const responseText = await generateAiResponse(input);
    
    setIsLoading(false);
    setMessages(prev => [...prev, { role: ChatRole.MODEL, text: responseText }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div id="ai-demo" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 p-12 opacity-10">
        <BrainCircuit size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Side */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/50 text-brand-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Powered by Google Gemini
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Instant Doubt Solving with <span className="text-brand-400">AI</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              MasterRoll isn't just management; it's a learning companion. Our integrated AI tutor helps students revise NCERT concepts, solve math equations, and prepare for exams 24/7.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-slate-300">
                <div className="bg-brand-500/20 p-2 rounded-full mr-4">
                  <BrainCircuit className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <strong className="text-white block">Smart Summaries</strong>
                  Summarize chapters in seconds.
                </div>
              </li>
              <li className="flex items-center text-slate-300">
                <div className="bg-brand-500/20 p-2 rounded-full mr-4">
                  <Loader2 className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <strong className="text-white block">Homework Helper</strong>
                  Step-by-step explanations for complex problems.
                </div>
              </li>
            </ul>
          </div>

          {/* Interactive Demo Side */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-700 h-[500px] flex flex-col">
            {/* Chat Header */}
            <div className="bg-brand-600 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <BrainCircuit className="text-white w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">MasterRoll AI Tutor</h3>
                  <p className="text-brand-100 text-xs">Always Online</p>
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl p-4 text-sm ${
                    msg.role === ChatRole.USER 
                      ? 'bg-slate-800 text-white rounded-br-none' 
                      : 'bg-white text-slate-800 border border-gray-200 shadow-sm rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-slate-800 border border-gray-200 shadow-sm rounded-2xl rounded-bl-none p-4 flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin text-brand-600" />
                    <span className="text-xs text-gray-500">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex items-center space-x-2 bg-gray-50 rounded-full border border-gray-200 px-4 py-2 focus-within:ring-2 focus-within:ring-brand-500/50 focus-within:border-brand-500 transition-all">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a question about physics, history, etc..."
                  className="flex-1 bg-transparent border-none outline-none text-slate-900 text-sm placeholder-gray-400"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-2 bg-brand-600 rounded-full text-white hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GeminiDemo;