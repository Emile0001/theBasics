import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.scss',
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreateStatus: string = 'no server has been created yet.';

  binding: string = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    return (this.serverCreateStatus = 'A server was just created.');
  }
}
// console.log(window);
