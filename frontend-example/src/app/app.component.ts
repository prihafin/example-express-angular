import { Component } from '@angular/core';

let config: any = undefined;

async function getCongig() {
  if (!config) config = await (await fetch('/assets/config.json')).json();
  return config;
}

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
    let cfg = await getCongig();
    console.log(cfg);
    this.things = await (await fetch(cfg.api + '/things')).json();
  }
}
