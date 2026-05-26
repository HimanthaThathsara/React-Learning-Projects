
import React, { useState } from 'react';
import { Channel, Message } from './types';
import WorkspaceRail from './components/WorkspaceRail';
import NavigationSidebar from './components/NavigationSidebar';
import ChatWindow from './components/ChatWindow';
import ThreadSidebar from './components/ThreadSidebar';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import { getGeminiResponse } from './services/geminiService';

const INITIAL_CHANNELS: Channel[] = [
  { id: 'council', name: 'council-of-elrond', topic: "Let's sort this ring thing out hey!?!", type: 'channel' },
  { id: 'fellowship', name: 'the-fellowship', type: 'channel' },
  { id: 'breakfast', name: 'second-breakfast-fans', type: 'channel', isLocked: true },
];

const INITIAL_DMS: Channel[] = [
  { id: 'frodo', name: 'Frodo Baggins', type: 'dm', status: 'online', unreadCount: 3 },
  { id: 'gandalf', name: 'Gandalf The Grey', type: 'dm', status: 'online' },
  { id: 'gimli', name: 'Gimli son of Gloin', type: 'dm', status: 'offline' },
];

const INITIAL_MESSAGES: Record<string, Message[]> = {
  'council': [
    { id: '1', sender: 'Elrond', timestamp: '10:00 AM', content: 'Bring forth the Ring, Frodo.' },
    { id: '2', sender: 'Boromir', timestamp: '10:05 AM', content: 'It is a gift. A gift to the foes of Mordor.', reactions: [{emoji: '👎', count: 2}] },
    { id: '3', sender: 'Aragorn', timestamp: '10:07 AM', content: 'You cannot wield it! None of us can.' },
  ],
  'frodo': [
    { id: 'f1', sender: 'Frodo Baggins', timestamp: '9:00 AM', content: 'I wish the ring had never come to me.' },
  ]
};

const MAX_CHANNELS = 3;

type ViewState = 'login' | 'signup' | 'app';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('login');
  const [openChannelIds, setOpenChannelIds] = useState<string[]>(['council']);
  const [focusedChannelId, setFocusedChannelId] = useState<string>('council');
  const [messages, setMessages] = useState<Record<string, Message[]>>(INITIAL_MESSAGES);
  const [activeThread, setActiveThread] = useState<{ parent: Message; replies: Message[]; channelId: string } | null>(null);

  const allAvailableChannels = [...INITIAL_CHANNELS, ...INITIAL_DMS];

  const handleSelectChannel = (id: string) => {
    setOpenChannelIds(prev => {
      if (prev.includes(id)) {
        setFocusedChannelId(id);
        return prev;
      }
      if (prev.length >= MAX_CHANNELS) {
        const next = [...prev.slice(1), id];
        setFocusedChannelId(id);
        return next;
      }
      const next = [...prev, id];
      setFocusedChannelId(id);
      return next;
    });
  };

  const handleCloseChannel = (id: string) => {
    setOpenChannelIds(prev => {
      const next = prev.filter(cid => cid !== id);
      if (focusedChannelId === id) {
        setFocusedChannelId(next[next.length - 1] || '');
      }
      return next;
    });
    if (activeThread?.channelId === id) {
      setActiveThread(null);
    }
  };

  const handleSendMessage = async (channelId: string, content: string) => {
    const channel = allAvailableChannels.find(c => c.id === channelId);
    if (!channel) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'You',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content,
    };

    setMessages(prev => ({
      ...prev,
      [channelId]: [...(prev[channelId] || []), newMessage]
    }));

    if (channelId === 'gandalf' || channelId === 'council') {
      const character = channelId === 'gandalf' ? 'Gandalf' : 'Elrond';
      const aiResponse = await getGeminiResponse(content, character);
      
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: character,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        content: aiResponse,
        isAi: true
      };

      setMessages(prev => ({
        ...prev,
        [channelId]: [...(prev[channelId] || []), aiMsg]
      }));
    }
  };

  const handleOpenThread = (channelId: string, parent: Message) => {
    setActiveThread({ parent, replies: [], channelId });
  };

  const handleSendReply = (content: string) => {
    if (!activeThread) return;
    
    const newReply: Message = {
      id: Date.now().toString(),
      sender: 'You',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content,
    };

    setActiveThread(prev => prev ? {
      ...prev,
      replies: [...prev.replies, newReply]
    } : null);

    const channelId = activeThread.channelId;
    setMessages(prev => {
      const channelMsgs = [...(prev[channelId] || [])];
      const parentIdx = channelMsgs.findIndex(m => m.id === activeThread.parent.id);
      if (parentIdx > -1) {
        channelMsgs[parentIdx] = {
          ...channelMsgs[parentIdx],
          repliesCount: (channelMsgs[parentIdx].repliesCount || 0) + 1,
          lastReplyTime: 'Just now'
        };
      }
      return { ...prev, [channelId]: channelMsgs };
    });
  };

  if (currentView === 'login') {
    return (
      <LoginPage 
        onLogin={() => setCurrentView('app')} 
        onNavigateToSignUp={() => setCurrentView('signup')} 
      />
    );
  }

  if (currentView === 'signup') {
    return (
      <SignUpPage 
        onSignUp={() => setCurrentView('app')} 
        onNavigateToLogin={() => setCurrentView('login')} 
      />
    );
  }

  return (
    <div className="flex w-screen h-screen text-gray-700 bg-white overflow-hidden transition-colors">
      <WorkspaceRail />
      
      <NavigationSidebar 
        channels={INITIAL_CHANNELS}
        dms={INITIAL_DMS}
        activeChannelId={focusedChannelId}
        onSelectChannel={handleSelectChannel}
      />

      <div className="flex flex-grow bg-gray-100 overflow-hidden">
        {openChannelIds.length === 0 ? (
          <div className="flex flex-col items-center justify-center w-full text-gray-400 p-12">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="text-xl font-medium text-gray-500 mb-2">Your Middle-earth workspace</h2>
            <p className="text-sm">Select a channel or message to begin your quest.</p>
          </div>
        ) : (
          <div className="flex w-full h-full overflow-x-auto">
            {openChannelIds.map(id => {
              const channel = allAvailableChannels.find(c => c.id === id);
              if (!channel) return null;
              return (
                <ChatWindow 
                  key={id}
                  channel={channel}
                  messages={messages[id] || []}
                  onSendMessage={(content) => handleSendMessage(id, content)}
                  onOpenThread={(msg) => handleOpenThread(id, msg)}
                  onClose={() => handleCloseChannel(id)}
                  onFocus={() => setFocusedChannelId(id)}
                  isFocused={focusedChannelId === id}
                />
              );
            })}
          </div>
        )}
      </div>

      {activeThread && (
        <ThreadSidebar 
          parentMessage={activeThread.parent}
          replies={activeThread.replies}
          onClose={() => setActiveThread(null)}
          onSendReply={handleSendReply}
          channelName={allAvailableChannels.find(c => c.id === activeThread.channelId)?.name || ''}
        />
      )}
    </div>
  );
};

export default App;
