import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService, Message } from '../message.service';

@Component({
  selector: 'app-message-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-modal.html',
  styleUrl: './message-modal.scss',
})
export class MessageModal implements OnInit {
  message: Message | null = null;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.message$.subscribe((msg) => {
      this.message = msg;
    });
  }

  close() {
    this.messageService.close();
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

  getButtonClass(): string {
    switch (this.message?.type) {
      case 'error':
        return 'btn-danger';
      case 'warning':
        return 'btn-warning';
      case 'info':
        return 'btn-info';
      default:
        return 'btn-primary';
    }
  }
}
