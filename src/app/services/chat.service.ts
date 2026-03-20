import { Injectable, signal } from '@angular/core';
import { Chat } from '../models/chat';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private STORAGE_KEY = 'chats';

  private chatsSignal = signal<Chat[]>(this.loadChats());

  chats = this.chatsSignal.asReadonly();

  constructor() {
    this.persistChats();
  }

  private loadChats(): Chat[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);

    if (!stored) {
      return [
        {
          id: 1,
          name: 'Alice',
          avatar: 'https://i.pravatar.cc/40?img=1',
          status: 'online',
          messages: [
            {
              id: 1,
              text: 'Hola!',
              sender: 'app',
              timestamp: new Date(),
            },
          ],
        },
      ];
    }

    const chats = JSON.parse(stored);

    // reconstruir Date
    return chats.map((chat: Chat) => ({
      ...chat,
      messages: chat.messages.map((m: any) => ({
        ...m,
        timestamp: new Date(m.timestamp),
      })),
    }));
  }

  private persistChats() {
    // Angular signal effect simple
    const save = () => {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.chatsSignal()));
    };

    save();
  }

  private save() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.chatsSignal()));
  }

  getChat(id: number): Chat | undefined {
    return this.chatsSignal().find((c) => c.id === id);
  }

  createChat(name: string): Chat {
    const newChat: Chat = {
      id: Date.now(),
      name,
      avatar: `https://i.pravatar.cc/40?u=${name}`,
      status: 'online',
      messages: [],
    };

    this.chatsSignal.update((chats) => [...chats, newChat]);
    this.save();

    return newChat;
  }

  sendMessage(chatId: number, text: string) {
    const message: Message = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    this.chatsSignal.update((chats) =>
      chats.map((chat) =>
        chat.id === chatId ? { ...chat, messages: [...chat.messages, message] } : chat,
      ),
    );

    this.save();

    setTimeout(() => {
      this.autoReply(chatId);
    }, 1000);
  }

  private autoReply(chatId: number) {
    const reply: Message = {
      id: Date.now(),
      text: 'Respuesta automática',
      sender: 'app',
      timestamp: new Date(),
    };

    this.chatsSignal.update((chats) =>
      chats.map((chat) =>
        chat.id === chatId ? { ...chat, messages: [...chat.messages, reply] } : chat,
      ),
    );

    this.save();
  }
}
