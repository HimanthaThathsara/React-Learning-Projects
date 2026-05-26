
import React from 'react';
import { Message } from '../types';

interface MessageItemProps {
  message: Message;
  onOpenThread?: (message: Message) => void;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, onOpenThread }) => {
  return (
    <div className="flex px-4 py-3 hover:bg-gray-50 transition-colors group">
      <div className={`h-10 w-10 rounded flex-shrink-0 flex items-center justify-center text-lg font-bold ${message.isAi ? 'bg-indigo-200 text-indigo-700' : 'bg-gray-300'}`}>
        {message.sender.charAt(0)}
      </div>
      <div className="ml-2 flex-grow">
        <div className="-mt-1">
          <span className="text-sm font-semibold">{message.sender}</span>
          <span className="ml-1 text-[10px] text-gray-500">{message.timestamp}</span>
        </div>
        <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">{message.content}</p>
        
        {message.reactions && message.reactions.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {message.reactions.map((reaction, i) => (
              <button 
                key={i} 
                className="flex items-center pl-1 pr-2 h-5 bg-gray-200 hover:bg-gray-300 rounded-full text-[10px] font-medium transition-colors"
              >
                <span>{reaction.emoji}</span>
                <span className="ml-1">{reaction.count}</span>
              </button>
            ))}
          </div>
        )}

        {(message.repliesCount || onOpenThread) && (
          <div className="flex items-center mt-2">
            {message.repliesCount ? (
              <>
                <div className="flex -space-x-1">
                  <div className="h-6 w-6 rounded bg-gray-300 border-2 border-white"></div>
                  <div className="h-6 w-6 rounded bg-gray-400 border-2 border-white"></div>
                </div>
                <button 
                  onClick={() => onOpenThread?.(message)}
                  className="text-blue-600 text-xs font-medium ml-2 hover:underline"
                >
                  {message.repliesCount} replies
                </button>
                <span className="text-[10px] text-gray-500 ml-2">Last reply {message.lastReplyTime}</span>
              </>
            ) : (
              <button 
                onClick={() => onOpenThread?.(message)}
                className="opacity-0 group-hover:opacity-100 text-blue-600 text-[10px] font-medium hover:underline transition-opacity"
              >
                Reply in thread
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageItem;
