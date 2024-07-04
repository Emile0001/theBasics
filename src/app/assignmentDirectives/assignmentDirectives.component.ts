import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignmentDirective',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignmentDirectives.component.html',
  styleUrl: './assignmentDirectives.component.scss',
})
export class AssignmentDirectives {
  // visibilityStatus: string = 'hidden';
  // incrementMessage: number = 0;
  // logCounter: number[] = [];
  // logTime: Date[] = [];
  // incrementCounter() {
  //   if (this.visibilityStatus === 'visible') {
  //     this.incrementMessage += 1;
  //     this.logCounter.push(this.incrementMessage);
  //     this.logTime.push(new Date());
  //   }
  // }
  // onToggleVisibility() {
  //   this.visibilityStatus =
  //     this.visibilityStatus === 'hidden' ? 'visible' : 'hidden';
  //   this.incrementCounter();
  // }

  isVisible: boolean;
  logNumber: number[] = [];
  logDate: Date[] = [];

  constructor(logNumber: number[]) {}

  displayMessage() {}
  logDetails() {}

  onItemEntered() {
    this.logDetails();
    setTimeout(() => {}, 3000);
  }
}
