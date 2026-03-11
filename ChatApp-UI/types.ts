
export interface Reaction {
  emoji: string;
  count: number;
}

export interface Message {
  id: string;
  sender: string;
  timestamp: string;
  content: string;
  reactions?: Reaction[];
  repliesCount?: number;
  lastReplyTime?: string;
  isAi?: boolean;
}

export interface Channel {
  id: string;
  name: string;
  topic?: string;
  type: 'channel' | 'dm';
  isLocked?: boolean;
  unreadCount?: number;
  status?: 'online' | 'offline';
}

export interface Thread {
  parentMessage: Message;
  replies: Message[];
}
