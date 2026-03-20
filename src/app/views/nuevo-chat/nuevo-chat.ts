import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-nuevo-chat',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo-chat.html',
  styleUrl: './nuevo-chat.css',
})
export class NuevoChat {
  private chatService = inject(ChatService);
  private router = inject(Router);

  nameControl = new FormControl('', [Validators.required]);

  createChat() {
    const name = this.nameControl.value;

    if (!name) return;

    const chat = this.chatService.createChat(name);

    this.router.navigate(['/chats', chat.id]);
  }
}
