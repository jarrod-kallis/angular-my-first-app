import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .server {
        padding: 5px;
      }
      .funny {
        color: white;
      }
      .serious {
        color: yellow;
      }
    `
  ]
})
export class ServerComponent {
  id: number = 10;
  status: string = 'funny';

  constructor() {
    this.id = Math.trunc(Math.random() * 100);
    this.status = Math.random() > 0.5 ? 'serious' : 'funny';
  }

  getServerStatus(): string {
    return this.status;
  }

  getColor(): string {
    return this.status === 'serious' ? '#cc0000' : 'green';
  }
}
