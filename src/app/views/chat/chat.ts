import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {
  private route = inject(ActivatedRoute);
  private chatService = inject(ChatService);

  chatId = Number(this.route.snapshot.paramMap.get('id'));

  chat = computed(() => this.chatService.getChat(this.chatId));
}
