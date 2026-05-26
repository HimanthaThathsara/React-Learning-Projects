
import React, { useState, useRef, useEffect } from 'react';
import { Message, Channel } from '../types';
import MessageItem from './MessageItem';

interface ChatWindowProps {
  channel: Channel;
  messages: Message[];
  onSendMessage: (content: string) => void;
  onOpenThread: (message: Message) => void;
  onClose: () => void;
  isFocused?: boolean;
  onFocus: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ 
  channel, 
  messages, 
  onSendMessage, 
  onOpenThread,
  onClose,
  isFocused,
  onFocus
}) => {
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div 
      onClick={onFocus}
      className={`flex flex-col flex-1 min-w-[300px] border-r border-gray-300 bg-white h-full transition-all duration-200 relative ${
        isFocused ? 'ring-2 ring-blue-500 ring-inset z-10 shadow-lg' : 'opacity-95 grayscale-[0.1] hover:grayscale-0'
      }`}
    >
      {/* Header */}
      <div className={`flex items-center flex-shrink-0 h-16 border-b border-gray-300 px-4 justify-between transition-colors ${isFocused ? 'bg-blue-50' : 'bg-white'}`}>
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="text-sm font-bold leading-none truncate">
              {channel.type === 'channel' ? '#' : ''}{channel.name}
            </h1>
            {isFocused && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse flex-shrink-0"></span>}
          </div>
          {channel.topic && (
            <span className="text-[10px] text-gray-500 leading-none truncate mt-1">{channel.topic}</span>
          )}
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="p-1.5 hover:bg-gray-200 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
          title="Close chat"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Message Feed */}
      <div className="flex flex-col flex-grow overflow-auto">
        <div className="flex flex-col py-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 text-center text-gray-400">
              <p className="text-xs uppercase tracking-widest font-semibold mb-2">Beginning of history</p>
              <div className="h-px w-full bg-gray-100 mb-4"></div>
            </div>
          ) : messages.map((msg) => (
            <MessageItem 
              key={msg.id} 
              message={msg} 
              onOpenThread={onOpenThread}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="px-3 pb-3">
        <div className={`flex flex-col border-2 rounded-md p-1 transition-colors ${isFocused ? 'border-blue-300 bg-white shadow-sm' : 'border-gray-200 bg-gray-50'}`}>
          <textarea 
            className="w-full text-sm px-2 py-2 outline-none resize-none min-h-[40px] bg-transparent"
            placeholder={`Message ${channel.type === 'channel' ? '#' : ''}${channel.name}`}
            rows={1}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <div className="flex items-center justify-between px-1 pb-1">
            <div className="flex space-x-0.5">
              <InputButton icon={<LightningIcon />} />
              <div className="w-px h-3 bg-gray-300 mx-1 self-center" />
              <InputButton icon={<BoldIcon />} />
              <InputButton icon={<EmojiIcon />} />
            </div>
            <div className="flex space-x-0.5 items-center">
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className={`flex items-center justify-center h-7 w-7 rounded transition-colors ${
                  inputValue.trim() ? 'bg-blue-600 text-white hover:bg-blue-700' : 'text-gray-400'
                }`}
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputButton = ({ icon }: { icon: React.ReactNode }) => (
  <button className="flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200 text-gray-500 transition-colors">
    {icon}
  </button>
);

const LightningIcon = () => <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const BoldIcon = () => <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>;
const EmojiIcon = () => <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" /></svg>;
const SendIcon = () => <svg className="h-3.5 w-3.5 transform rotate-90" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>;

export default ChatWindow;
