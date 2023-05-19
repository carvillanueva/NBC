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
      line-height: 30px;
    }
    .menu-background {
      position: fixed;
      width: 100%;
      height: 100vh;
      background: white;
      z-index: 10;
    }
    .menuX {
      position: absolute;
      width: 48px;
      height: 37px;
      right: 40px;
      top: 65px;
      cursor: pointer;
    }
    .closeTop{
      position: absolute;
      left: 14.64%;
      right: -14.64%;
      border: 1px solid black;
      transform: rotate(-45deg);
    }
    .closeMiddle {
      position: absolute;
      left: -25%;
      right: 100%;
      opacity: 0;
      border: 1px solid black;
    }
    .closeBottom {
      position: absolute;
      left: 14.64%;
      right: -14.64%;
      border: 1px solid black;
      transform: rotate(45deg);
    }
    .menuLines {
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
    .menuOptionsClose {
      position: absolute;
      left: 5%;
      width: 90%;
      top: 50%;
      transform: translateY(-50%);
      line-height: 45px;
      display: block;
      align-items: center;
      text-align: center;
    }
    .menuListClose:hover {
      color: #3d5963 !important;
      cursor: pointer;
      text-decoration: underline;
      text-decoration-color: #3d5963;
      text-decoration-thickness: 3px;
      transition: all .25s ease-in-out;
    }
    .menuListClose:not(:hover){
      text-decoration: none;
      transition: color .25s ease-in-out;
    }
    .menuOptionsClose:hover .menuListClose{
      color: rgba(27, 56, 63, .35);
      transition: all .25s ease-in-out;
    }
    .custom-shape-divider-bottom-1684527032 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      transform: rotate(180deg);
    }
    .custom-shape-divider-bottom-1684527032 svg {
      position: relative;
      display: block;
      width: calc(111% + 1.3px);
      height: 96px;
    }
    .custom-shape-divider-bottom-1684527032 .shape-fill {
      fill: #FFFFFF;
    }

  `,
  ],
  template: `
    <div class="menu-background" *ngIf="showMenu">
      <div class="menuX" (click)="showMenu = false">
        <div class="closeTop"></div>
        <div class="closeMiddle"></div>
        <div class="closeBottom"></div>
      </div>

      <!-- <div class="companyName">Nora's Cleaning</div> -->

      <div class="fs-1 fw-semibold lh-lg menuOptionsClose">
        <div class="menuListClose" (click)="goTo('about')">
          About
        </div>
        <div class="menuListClose" (click)="goTo('service')">
          Services
        </div>
        <div class="menuListClose" (click)="goTo('contact')">
          Contact
        </div>
      </div>
    </div>

    <div class="pageSize headerBackground" >

      <div class="custom-shape-divider-bottom-1684527032">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
      </div>

      <div class="menuLines" (click)="showMenu = true">
        <div class="topLine"></div>
        <div class="middleLine"></div>
        <div class="bottomLine"></div>
      </div>

      <!-- <div class="companyName">Nora's Cleaning</div> -->

      <div class="container h-100 d-flex px-4 py-5" style="position:relative;">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5 justify-content-center">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="../assets/images/bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Nora's Cleaning service! We offer services for ...</h1>
            <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Contact Me</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  `,
})
export class HeaderSectionComponent {
  public showMenu: boolean = false;


  public goTo(location: string) {
    console.log(location);
  }
}
