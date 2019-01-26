import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreationStatus = 'No server was created';
  serverName = '';
  userName = '';

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Server Name: ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
