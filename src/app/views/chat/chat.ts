import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ChatService } from '../../services/chat.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

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

  chatId = toSignal(this.route.paramMap.pipe(map((params) => Number(params.get('id')))), {
    initialValue: 0,
  });

  chat = computed(() => this.chatService.getChat(this.chatId()));

  messageControl = new FormControl<string>('');

  sendMessage() {
    const text = this.messageControl.value;

    if (!text) return;

    this.chatService.sendMessage(this.chatId(), text);

    this.messageControl.setValue('');
  }
}
