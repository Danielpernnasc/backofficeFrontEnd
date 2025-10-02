import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-ui-button',
  standalone: true,
  imports: [],
  template: `<button [disabled]="disabled" class="ui-btn ui-{{variant}} ui-{{size}}">
               <ng-content></ng-content>
             </button>`,
  styleUrl: './ui-button.component.css'
})
export class UiButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled: boolean = false;

}
