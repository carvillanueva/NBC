import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  styles:[`
    .page-size {
      height: 100vh;
    }



  `
  ],
  template: `
    <div class="container d-flex p-3 flex-column page-size">
      <header>
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
            <img width="24" height="24" src="../assets/images/broom.png">
            <span class="fs-4">NBC Cleaning Services</span>
          </a>

          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="#" class="nav-link text-secondary">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"/></svg>
                Home
              </a>
            </li>
            <!-- <li>
              <a href="#" class="nav-link text-dark">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"/></svg>
                About Me
              </a>
            </li> -->
            <li>
              <a href="#" class="nav-link text-dark">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#table"/></svg>
                Services
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-dark">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#people-circle"/></svg>
                Customers Reviews
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-dark">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"/></svg>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main class=" px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-sm-8 col-lg-6">
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
      </main>

      <footer class="mt-auto text-dark-50">
        <p>Created By Carlos Villanueva</p>
      </footer>
    </div>


  `
})
export class HomePageComponent {

}
