import { Component } from '@angular/core';

@Component({
  selector: 'header-section',
  styles: [`
    .pageSize {
      height: 100vh;
      width: 100%;
    }
    .headerBackground {
      background: linear-gradient(25deg, rgba(238, 174, 202, 0.8534007352941176) 13%, rgba(148, 187, 233, 0.8477984943977591) 53%);
    }
    .companyName {
      position: absolute;
      margin-left: 50%;
      transform: translateX(-50%);
      top: 50px;
      font-weight: 300;
      font-size: 35px;
      line-height: 30px;
    }
    .menu {
      position: absolute;
      width: 40px;
      height: 30px;
      right: 40px;
      top: 50px;
      z-index: 2;
      cursor: pointer;
    }
    .topLine {
      position: absolute;
      left: 0%;
      right: 0%;
      top: 11.11%;
      bottom: 88.89%;
      border: 1px solid black;
    }
    .middleLine {
      position: absolute;
      left: 0%;
      right: 0%;
      top: 50%;
      bottom: 50%;
      border: 1px solid black;
    }
    .bottomLine {
      position: absolute;
      left: 0%;
      right: 0%;
      top: 88.89%;
      bottom: 11.11%;
      border: 1px solid black;
    }


  `,
  ],
  template: `
    <div class="pageSize headerBackground">
      <div class="menu">
        <div class="topLine"></div>
        <div class="middleLine"></div>
        <div class="bottomLine"></div>
      </div>

      <div class="companyName">Nora's Cleaning</div>

      <!-- <div class="container px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5 mx-auto">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="../assets/images/bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
            <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
          </div>
        </div>
      </div> -->

    </div>
  `,
})
export class HeaderSectionComponent {}
