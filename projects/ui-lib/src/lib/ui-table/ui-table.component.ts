import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-ui-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.scss']
})
export class UiTableComponent {

  @Input() columns: string[] = [];
  @Input() data: any[] = [];

  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<number>();
  @ContentChild('actions') actionsTemplate!: TemplateRef<any>;
  showActions = true;

  editUser(user: any) {
    this.edit.emit(user);
  }

  deleteUser(id: number) {
    this.delete.emit(id);
  }

}
