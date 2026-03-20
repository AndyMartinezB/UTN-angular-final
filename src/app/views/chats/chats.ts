import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChatList } from '../../components/chat-list/chat-list';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [ChatList, RouterLink, RouterOutlet],
  templateUrl: './chats.html',
  styleUrl: './chats.css',
})
export class Chats {}
