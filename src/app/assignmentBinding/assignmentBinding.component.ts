import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignmentBinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './assignmentBinding.component.html',
})
export class AssignmentBinding {
  btnEnabled: boolean = true;
  binding: string = '';

  onInputChange() {
    if (this.binding.length > 0) {
      this.btnEnabled = false;
    } else if (this.binding.length < 0) {
      this.btnEnabled = true;
    }
  }

  onClearText() {
    return (this.binding = '');
  }
}
