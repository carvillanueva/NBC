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
      <about-section class="py-3" id="about"></about-section>
      <service-section class="py-3" id="service"></service-section>
      <contact-section class="py-3" id="contact"></contact-section>
    </div>
    <footer-section id="footer"></footer-section>
  `,
})
export class MainComponent {}
