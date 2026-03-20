export interface Message {
  id: number;
  text: string;
  sender: 'user' | 'app';
  timestamp: Date;
}
