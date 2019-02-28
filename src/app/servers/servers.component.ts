import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // HTML element
  // selector: '[app-servers]', // HTML attribute
  // selector: '.app-servers', // HTML class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = '';
  serverCreated: boolean = false;
  servers: string[] = ['Test', 'Test2'];

  constructor() {
    setTimeout(() => (this.allowNewServer = true), 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreationStatus = 'Server was created. Name: ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
