import { Component } from '@angular/core';

@Component({
  selector: 'loading',
  styles: [`
    .animated {
      animation-duration: 1s;
      animation-fill-mode: both;
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }

    .fadeOut {
      animation-name: fadeOut;
    }

    .spinner {
      position: relative;
      width: 22.4px;
      height: 22.4px;
    }

    .spinner::before,
    .spinner::after {
      --radius: 250;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      animation: spinner-w7nm60 2s infinite linear;
      background: rgba(148, 187, 233, 0.8477984943977591);
      border-radius: 50%;
    }

    .spinner::before {
      --radius: -250;
      background: rgba(238, 174, 202, 0.8534007352941176);
    }

    @keyframes spinner-w7nm60 {
      0% {
          transform: scale(1) rotate(0deg) translateY(calc(var(--radius) * 1%));
      }

      50% {
          transform: scale(0.5) rotate(1440deg) translateY(0);
      }

      100% {
          transform: scale(1) rotate(2920deg) translateY(calc(var(--radius) * 1%));
      }
    }

    .page-loader-bg {
      position: fixed;
      background-color: white;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9999;
    }

    .page-loader {
      display: block;
      width: 64px;
      height: 64px;
      position: fixed;
      top: 50%;
      left: 50%;
      margin: -32px 0 0 -32px;
      z-index: 9999;
    }
  `],
  template: `
    <div class="page-loader-bg" [ngClass]="loader" *ngIf="showloader">
      <div class="spinner page-loader"></div>
    </div>
  `
})
export class LoadingComponent {
  loader = '';
  showloader = true;

  constructor() {
    setTimeout(() => {
      this.loader = 'animated fadeOut';
      this.hidePreload();
    }, 1000);
  }

  hidePreload() {
    setTimeout(() => {
      this.showloader = false;
    }, 1000);
  }
}
