import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  styles: [
    `
      .page-size {
        height: 100vh;
        /* background: rgb(238,174,202); */
        background: linear-gradient(
          25deg,
          rgba(238, 174, 202, 0.8534007352941176) 13%,
          rgba(148, 187, 233, 0.8477984943977591) 53%
        );
      }
      .custom-shape-divider-bottom-1684371618 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
      }
      .custom-shape-divider-bottom-1684371618 svg {
        position: relative;
        display: block;
        width: calc(136% + 1.3px);
        height: 90px;
      }
      .custom-shape-divider-bottom-1684371618 .shape-fill {
        fill: #ffffff;
      }
    `,
  ],
  template: `
    <div class="page-size header-background">
      <header class="container p-3 d-flex flex-column ">
        <!-- <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill">

            </path>
        </svg> -->
        <div
          class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
        >
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
          >
            <img width="24" height="24" src="../assets/images/broom.png" />
            <span class="fs-4">NBC Cleaning Services</span>
          </a>

          <ul
            class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small"
          >
            <li>
              <a href="#" class="nav-link text-secondary">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#home" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-dark">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#table" />
                </svg>
                Services
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-dark">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#people-circle" />
                </svg>
                Customers Reviews
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-dark">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#grid" />
                </svg>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main class="container d-flex" style="height: calc(100% - 100px);">
        <div
          class="row flex-lg-row-reverse align-items-center g-5 py-5 mx-auto"
        >
          <div class="col-sm-8 col-lg-6">
            <img
              src="../assets/images/bootstrap-themes.png"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Responsive left-aligned hero with image
            </h1>
            <p class="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Primary
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>

    <div class="container px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-sm-8 col-lg-6">
          <img
            src="../assets/images/bootstrap-themes.png"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Responsive left-aligned hero with image
          </h1>
          <p class="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
              Primary
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Default
            </button>
          </div>
        </div>
      </div>

      <h2 class="pb-2 border-bottom">Our Services</h2>

      <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div class="col d-flex flex-column align-items-start gap-2">
          <h3 class="fw-bold">
            Left-aligned title explaining these awesome features
          </h3>
          <p class="text-body-secondary">
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="#" class="btn btn-primary btn-lg">Primary button</a>
        </div>

        <div class="col">
          <div class="row row-cols-1 row-cols-sm-2 g-4">
            <div class="col d-flex flex-column gap-2">
              <div
                class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"
              >
                <svg class="bi" width="1em" height="1em">
                  <use xlink:href="#collection" />
                </svg>
              </div>
              <h4 class="fw-semibold mb-0">Featured title</h4>
              <p class="text-body-secondary">
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>

            <div class="col d-flex flex-column gap-2">
              <div
                class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"
              >
                <svg class="bi" width="1em" height="1em">
                  <use xlink:href="#gear-fill" />
                </svg>
              </div>
              <h4 class="fw-semibold mb-0">Featured title</h4>
              <p class="text-body-secondary">
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>

            <div class="col d-flex flex-column gap-2">
              <div
                class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"
              >
                <svg class="bi" width="1em" height="1em">
                  <use xlink:href="#speedometer" />
                </svg>
              </div>
              <h4 class="fw-semibold mb-0">Featured title</h4>
              <p class="text-body-secondary">
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>

            <div class="col d-flex flex-column gap-2">
              <div
                class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"
              >
                <svg class="bi" width="1em" height="1em">
                  <use xlink:href="#table" />
                </svg>
              </div>
              <h4 class="fw-semibold mb-0">Featured title</h4>
              <p class="text-body-secondary">
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="container py-5">
      <div class="row">
        <div class="col-12 col-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="d-block mb-2"
            role="img"
            viewBox="0 0 24 24"
          >
            <title>Product</title>
            <circle cx="12" cy="12" r="10" />
            <path
              d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"
            />
          </svg>
          <small class="d-block mb-3 text-body-secondary"
            >&copy; 2017–2023</small
          >
        </div>
        <div class="col-6 col-md">
          <h5>Features</h5>
          <ul class="list-unstyled text-small">
            <li><a class="link-secondary" href="#">Cool stuff</a></li>
            <li><a class="link-secondary" href="#">Random feature</a></li>
            <li><a class="link-secondary" href="#">Team feature</a></li>
            <li><a class="link-secondary" href="#">Stuff for developers</a></li>
            <li><a class="link-secondary" href="#">Another one</a></li>
            <li><a class="link-secondary" href="#">Last time</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>Resources</h5>
          <ul class="list-unstyled text-small">
            <li><a class="link-secondary" href="#">Resource name</a></li>
            <li><a class="link-secondary" href="#">Resource</a></li>
            <li><a class="link-secondary" href="#">Another resource</a></li>
            <li><a class="link-secondary" href="#">Final resource</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>Resources</h5>
          <ul class="list-unstyled text-small">
            <li><a class="link-secondary" href="#">Business</a></li>
            <li><a class="link-secondary" href="#">Education</a></li>
            <li><a class="link-secondary" href="#">Government</a></li>
            <li><a class="link-secondary" href="#">Gaming</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>About</h5>
          <ul class="list-unstyled text-small">
            <li><a class="link-secondary" href="#">Team</a></li>
            <li><a class="link-secondary" href="#">Locations</a></li>
            <li><a class="link-secondary" href="#">Privacy</a></li>
            <li><a class="link-secondary" href="#">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
  `,
})
export class HomePageComponent {}
