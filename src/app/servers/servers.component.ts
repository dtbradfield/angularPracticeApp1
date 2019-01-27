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
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  detailsAction = 'Show';
  detailsShow = false;
  logDetailsButtonPresses = [];
 

  getButtonLogColor() {
    this.logDetailsButtonPresses >= 5 ? 'blue' : 'transparent';
  }
  

  onDetails() {
    if ( this.detailsShow === false ) {
      this.detailsAction = 'Hide';
      this.detailsShow = true;
      this.logDetailsButtonPresses.push(this.logDetailsButtonPresses.length + 1);
    } else {
        this.detailsAction = 'Show';
        this.detailsShow = false;
        this.logDetailsButtonPresses.push(this.logDetailsButtonPresses.length + 1);
    }
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Server Name: ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
