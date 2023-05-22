import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <loading></loading>
    <router-outlet></router-outlet>
  `,
  styles: [`

  `]
})
export class AppComponent {
  title = 'NBC';
}
