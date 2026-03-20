import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './chat-list.html',
  styleUrl: './chat-list.css',
})
export class ChatList {
  chatService = inject(ChatService);

  chats = this.chatService.chats;
}
