import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiButtonComponent } from "../ui-button/ui-button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-ui-modal',
  standalone: true,
  imports: [
    UiButtonComponent,
    CommonModule],
  template: `<div *ngIf="visible" class="modal-backdrop">
      <div class="modal">
        <h2>{{ title }}</h2>
        <ng-content></ng-content>
        <ui-ui-button (click)="closeModal()">Fechar</ui-ui-button>
      </div>
    </div>`,
  styleUrl: './ui-modal.component.scss'
})
export class UiModalComponent {
  @Input() title: string = '';
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();

  closeModal() { this.close.emit(); }

}
