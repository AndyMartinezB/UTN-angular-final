import { Routes } from '@angular/router';
import { Chats } from './views/chats/chats';
import { Chat } from './views/chat/chat';
import { NuevoChat } from './views/nuevo-chat/nuevo-chat';

export const routes: Routes = [
  { path: '', redirectTo: 'chats', pathMatch: 'full' },
  { path: 'chats', component: Chats },
  { path: 'chats/:id', component: Chat },
  { path: 'nuevo', component: NuevoChat },
];
