import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend-example';

  things: any = [];

  async ngOnInit() {}

  async clickButton() {
    this.things = await (await fetch('/api/things')).json();
  }
}
