
import React, { useState, useEffect } from 'react';
import { Bell, User, Sun, Moon } from 'lucide-react';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-[#161b22] p-4 flex items-center justify-between border-b border-[#30363d]">
      <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
        IoT Smart Desalination Monitoring System
      </h1>
      <div className="flex items-center space-x-4">
        <div className="text-sm text-gray-400">
          {currentTime.toLocaleString()}
        </div>
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-[#30363d]">
          {isDarkMode ? <Sun size={20} color="#9B59B6" /> : <Moon size={20} color="#F39C12" />}
        </button>
        <button className="p-2 rounded-full hover:bg-[#30363d]">
          <Bell size={20} color="#00c6ff" />
        </button>
        <button className="p-2 rounded-full hover:bg-[#30363d]">
          <User size={20} color="#0072ff" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
