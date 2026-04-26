import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { MessageToast } from './shared/message/message-toast/message-toast';
import { MessageModal } from './shared/message/message-modal/message-modal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, MessageToast, MessageModal],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('carrinho-compras');
}
