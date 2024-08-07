import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-message-sent',
  templateUrl: './message-sent.component.html',
  styleUrls: ['./message-sent.component.scss']
})
export class MessageSentComponent {
  @Input() artisanName: string = '';
  @Output() closeMessage = new EventEmitter<void>();

  onClose() {
    this.closeMessage.emit();
  }
}