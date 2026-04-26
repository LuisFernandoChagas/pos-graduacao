import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService, Message } from '../message.service';

@Component({
  selector: 'app-message-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-toast.html',
  styleUrl: './message-toast.scss',
})
export class MessageToast implements OnInit {
  message: Message | null = null;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.message$.subscribe((msg) => {
        this.message = msg;
    });
  }

  getIcon(): string {
    switch (this.message?.type) {
      case 'success':
        return 'bi-check-circle-fill';
      case 'error':
        return 'bi-exclamation-circle-fill';
      case 'warning':
        return 'bi-exclamation-triangle-fill';
      case 'info':
        return 'bi-info-circle-fill';
      default:
        return '';
    }
  }
}
