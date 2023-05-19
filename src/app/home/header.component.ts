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
      <div class="menuLines" (click)="showMenu = true">
        <div class="topLine"></div>
        <div class="middleLine"></div>
        <div class="bottomLine"></div>
      </div>

      <!-- <div class="companyName">Nora's Cleaning</div> -->

      <div class="container h-100 d-flex px-4 py-5">
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
