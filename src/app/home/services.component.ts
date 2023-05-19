import { Component } from '@angular/core';

@Component({
  selector: 'service-section',
  styles: [
    `

    `,
  ],
  template: `
    <h2 class="pb-2 border-bottom">Our Services</h2>

    <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div class="col d-flex flex-column align-items-start gap-2">
            <h3 class="fw-bold">
            We offer a wide variety of services for all needs!
            </h3>
            <p class="text-body-secondary">
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
            </p>
            <a href="#" class="btn contactBtn text-white btn-lg">Primary button</a>
        </div>

        <div class="col">
            <div class="row row-cols-1 row-cols-sm-2 g-4">
                <div class="col d-flex flex-column gap-2">
                    <div class="fs-3 p-1 d-inline-flex align-items-center justify-content-center text-bg-primary headerBackground rounded-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
                        </svg>
                    </div>
                    <h4 class="fw-semibold mb-0">Residential Cleaning</h4>
                    <p class="text-body-secondary">
                        We service various residential properties in the Birmingham area.
                        <span class="text-muted fs-6 fst-italic">*Subject to travel fees for areas outside the zone</span>
                    </p>
                </div>

                <div class="col d-flex flex-column gap-2">
                    <div class="fs-3 p-1 d-inline-flex align-items-center justify-content-center text-bg-primary headerBackground rounded-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="fs-2 bi bi-buildings" viewBox="0 0 16 16">
                            <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"/>
                            <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"/>
                        </svg>
                    </div>
                    <h4 class="fw-semibold mb-0">Commercial Cleaning</h4>
                    <p class="text-body-secondary">
                        We service a variety of commercial properties.
                        <span class="text-muted fs-6 fst-italic">*We are limited to medium to small companies.</span>
                    </p>
                </div>

                <div class="col d-flex flex-column gap-2">
                    <div class="fs-3 p-1 d-inline-flex align-items-center justify-content-center text-bg-primary headerBackground rounded-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </div>
                    <h4 class="fw-semibold mb-0">Featured title</h4>
                    <p class="text-body-secondary">
                        Paragraph of text beneath the heading to explain the heading.
                    </p>
                </div>

                <div class="col d-flex flex-column gap-2">
                    <div class="fs-3 p-1 d-inline-flex align-items-center justify-content-center text-bg-primary headerBackground rounded-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </div>
                    <h4 class="fw-semibold mb-0">& Free Estimates!</h4>
                    <p class="text-body-secondary">
                        We offer free estimates for all of our services!
                        Please contact us to schedule yours today!
                    </p>
                </div>
            </div>
        </div>
    </div>
  `,
})
export class ServicesSectionComponent {}
