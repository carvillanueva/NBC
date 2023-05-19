import { Component } from '@angular/core';

@Component({
  selector: 'about-section',
  styles: [`

  `,
  ],
  template: `
    <div class="sectionPadding row p-4 ">
      <div class="p-5 rounded-3 border shadow-lg">
        <h1 class="display-5 fw-bold lh-1 text-body-emphasis">About Nora's Cleaning Service</h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" class="btn contactBtn btn-lg px-4 me-md-2">Primary</button>
        </div>
      </div>
    </div>
  `,
})
export class AboutSectionComponent {}
