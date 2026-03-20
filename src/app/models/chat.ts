import { Message } from './message';

export interface Chat {
  id: number;
  name: string;
  avatar: string;
  status: 'online' | 'offline';
  messages: Message[];
}
