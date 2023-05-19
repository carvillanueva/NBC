import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  styles: [
    `
    `,
  ],
  template: `
    <header-section></header-section>
    <div class="container">
      <about-section id="about"></about-section>
      <service-section id="service"></service-section>
      <contact-section id="contact"></contact-section>
    </div>
    <footer-section id="footer"></footer-section>
  `,
})
export class MainComponent {}
