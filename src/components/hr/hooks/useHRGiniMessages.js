import { useState } from 'react';

export function useHRGiniMessages() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('hrGiniChat.messages');
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        text: "Hi! 👋 Ich bin Gini, die HR-Assistentin. Mit meinem Zugriff auf das Internet und die Datenbank können wir effektiv zusammenarbeiten! Lassen Sie uns die besten Ideen finden! ✨",
        sender: 'gini',
      },
    ];
  });
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
    };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const giniResponse = {
        id: messages.length + 2,
        text: "Entschuldigung, ich bin noch in der Entwicklung und kann noch nicht richtig antworten. Bald werde ich Ihnen bei der Ideenbewertung helfen können!",
        sender: 'gini',
      };
      setMessages(prev => [...prev, giniResponse]);
      setIsTyping(false);
      localStorage.setItem('hrGiniChat.messages', JSON.stringify([...messages, userMessage, giniResponse]));
    }, 2000);
  };

  return {
    messages,
    inputText,
    setInputText,
    isTyping,
    handleSubmit
  };
}