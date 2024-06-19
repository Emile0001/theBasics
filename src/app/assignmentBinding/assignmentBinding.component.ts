import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignmentBinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './assignmentBinding.component.html',
})
export class AssignmentBinding {
  binding: string = '';
  onClearText() {
    return (this.binding = '');
  }
}
