import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ChatBot.css';
const ChatBot = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState<{ text: string; sender: 'bot' | 'user' }[]>([]);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setMessages([...messages, { text: "File uploaded! Analyzing your resume...", sender: 'user' }]);
      analyzeResume(uploadedFile);
    }
  };

  const analyzeResume = async (uploadedFile: File) => {
    setLoading(true);
    // Simulate an API call to analyze the resume
    setTimeout(() => {
      setLoading(false);
      const score = 85; // Replace with actual score from backend
      setMessages(prev => [...prev, { text: `Your PBS score is ${score}! Here are some tips to improve your profile.`, sender: 'bot' }]);
    }, 3000); // Simulate a 3-second loading time
  };

  return (
    <div className="chatbot-container max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg mt-16">
      <div className="chatbot-messages overflow-y-auto h-64 mb-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`message ${msg.sender === 'bot' ? 'bot-message' : 'user-message'}`}
          >
            {msg.text}
          </motion.div>
        ))}
        {loading && (
          <div className="loading-message">
            <p>Analyzing your resume.....</p>
            <div className="loader"></div> {/* Add a loader animation here */}
          </div>
        )}
      </div>

      <input
        type="file"
        accept=".pdf"
        onChange={handleFileUpload}
        className="file-input mb-4"
      />
      <button
        onClick={() => setMessages([...messages, { text: "Please upload your LinkedIn resume PDF.", sender: 'bot' }])}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Start
      </button>
    </div>
  );
};

export default ChatBot; 