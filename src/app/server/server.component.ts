import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [],
  templateUrl: './server.component.html',
  styleUrl: './server.component.scss',
})
export class ServerComponent {
  serverId: number = 10;
  serverName: string = 'Print Along';

  serverStatus() {
    return 'offline';
  }
}
