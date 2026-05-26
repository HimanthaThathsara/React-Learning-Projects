
import React, { useState } from 'react';
import { Message } from '../types';
import MessageItem from './MessageItem';

interface ThreadSidebarProps {
  parentMessage: Message;
  replies: Message[];
  onClose: () => void;
  onSendReply: (content: string) => void;
  channelName: string;
}

const ThreadSidebar: React.FC<ThreadSidebarProps> = ({
  parentMessage,
  replies,
  onClose,
  onSendReply,
  channelName
}) => {
  const [replyValue, setReplyValue] = useState('');

  const handleSend = () => {
    if (replyValue.trim()) {
      onSendReply(replyValue);
      setReplyValue('');
    }
  };

  return (
    <div className="flex flex-col flex-shrink-0 w-1/4 max-w-xs border-l border-gray-300 bg-gray-50 h-full">
      <div className="flex items-center h-16 border-b border-gray-300 px-4 flex-shrink-0 bg-white">
        <div>
          <h2 className="text-sm font-semibold leading-none">Thread</h2>
          <span className="text-xs text-gray-500">{channelName}</span>
        </div>
        <button 
          onClick={onClose}
          className="flex items-center justify-center w-6 h-6 rounded hover:bg-gray-200 ml-auto transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col flex-grow overflow-auto bg-white">
        <div className="border-b border-gray-200 bg-gray-50">
          <MessageItem message={parentMessage} />
        </div>
        
        <div className="flex flex-col py-2">
          {replies.length > 0 ? (
            replies.map((reply) => (
              <MessageItem key={reply.id} message={reply} />
            ))
          ) : (
            <div className="px-4 py-8 text-center text-gray-400 text-sm">
              Be the first to reply!
            </div>
          )}
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex flex-col border border-gray-300 rounded p-1">
          <textarea
            className="w-full text-sm px-3 py-2 outline-none resize-none min-h-[30px]"
            placeholder="Reply..."
            rows={1}
            value={replyValue}
            onChange={(e) => setReplyValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <div className="flex justify-end">
            <button
              onClick={handleSend}
              disabled={!replyValue.trim()}
              className={`p-1 rounded ${replyValue.trim() ? 'text-blue-600 hover:bg-blue-50' : 'text-gray-300'}`}
            >
              <svg className="h-5 w-5 transform rotate-90" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadSidebar;
