import { Component } from '@angular/core';
import { ChatList } from '../../components/chat-list/chat-list';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [ChatList],
  templateUrl: './chats.html',
  styleUrl: './chats.css',
})
export class Chats {}
