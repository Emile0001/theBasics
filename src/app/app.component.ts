import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { AssignmentBinding } from './assignmentBinding/assignmentBinding.component';
import { AssignmentDirectives } from './assignmentDirectives/assignmentDirectives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ServersComponent,
    ServerComponent,
    AssignmentBinding,
    AssignmentDirectives,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'theBasics';
}
