import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {
  private route = inject(ActivatedRoute);
  private chatService = inject(ChatService);

  chatId = Number(this.route.snapshot.paramMap.get('id'));

  chat = computed(() => this.chatService.getChat(this.chatId));

  messageControl = new FormControl('');

  sendMessage() {
    const text = this.messageControl.value;

    if (!text) return;

    this.chatService.sendMessage(this.chatId, text);

    this.messageControl.setValue('');
  }
}
