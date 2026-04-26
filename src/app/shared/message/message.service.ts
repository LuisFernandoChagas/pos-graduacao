import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type MessageType = 'success' | 'error' | 'warning' | 'info';

export interface Message {
  id: string;
  type: MessageType;
  title: string;
  message: string;
  isModal: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSubject = new BehaviorSubject<Message | null>(null);
  public message$ = this.messageSubject.asObservable();

  showSuccess(title: string, message: string = '') {
    const id = this.generateId();
    const msg: Message = { id, type: 'success', title, message, isModal: false };
    this.messageSubject.next(msg);
    setTimeout(() => this.messageSubject.next(null), 2000);
  }

  showError(title: string, message: string = '') {
    const id = this.generateId();
    const msg: Message = { id, type: 'error', title, message, isModal: true };
    this.messageSubject.next(msg);
  }

  showWarning(title: string, message: string = '') {
    const id = this.generateId();
    const msg: Message = { id, type: 'warning', title, message, isModal: true };
    this.messageSubject.next(msg);
  }

  showInfo(title: string, message: string = '') {
    const id = this.generateId();
    const msg: Message = { id, type: 'info', title, message, isModal: true };
    this.messageSubject.next(msg);
  }

  close() {
    this.messageSubject.next(null);
  }

  private generateId(): string {
    return `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
}
