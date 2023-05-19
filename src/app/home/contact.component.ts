import { Component } from '@angular/core';

@Component({
  selector: 'contact-section',
  styles: [`
    .infoBox {
      border-top: 3px solid rgba(238, 174, 202, 0.8534007352941176);
      border-bottom: 3px solid rgba(148, 187, 233, 0.8477984943977591);
      padding: 30px;
      background: #fff;
      width: 100%;
      box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.1);
    }
    .infoBox span {
      font-size: 20px;
      float: left;
      width: 44px;
      height: 44px;
      background: linear-gradient(25deg, rgba(238, 174, 202, 0.8534007352941176) 13%, rgba(148, 187, 233, 0.8477984943977591) 53%);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      transition: all 0.3s ease-in-out;
    }
    .bi{
      color: black;
      z-index: 3;
    }
    .infoBox h4 {
      padding: 0 0 0 60px;
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 5px;
    }
    .infoBox p {
      padding: 0 0 10px 60px;
      margin-bottom: 20px;
      font-size: 14px;
    }
    .row {
      height: 100%;
    }
  `,
  ],
  template: `
    <h2 class="pb-2 border-bottom">Contact
      <br>
      <p class="fs-6 text-muted">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.</p>
    </h2>
    <div class="row sectionPadding p-4" style="display: flex;">

      <div class="col-lg-5" style="display: flex;">
        <div class="infoBox" style="flex: 1;">
          <div class="address">
            <span>
              <i class="bi bi-geo-alt-fill" style="color: black;"></i>
            </span>
            <h4>Location:</h4>
            <p>Birmingham, AL</p>
          </div>

          <div class="email">
            <span class="bi bi-envelope"></span>
            <h4>Email:</h4>
            <p>nora@gmail.com</p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d318305.8158846109!2d-86.73983670232492!3d33.39830657923384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1684520763964!5m2!1sen!2sus" style="border-radius:8px; width: 100%; height: 290px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>

      <div class="col-lg-7 mt-5 mt-lg-0" style="display: flex;">
        <form action="forms/contact.php" method="post" role="form" class="infoBox">
          <div class="row">
            <div class="form-group col-md-6">
              <label for="name">Name</label>
              <input type="text" name="name" class="form-control" id="name" required>
            </div>
            <div class="form-group col-md-6">
              <label for="name">Email</label>
              <input type="email" class="form-control" name="email" id="email" required>
            </div>
            <div class="form-group col-xs-12">
              <label for="name">Address</label>
              <input type="text" class="form-control" name="address" id="address" required>
            </div>
            <div class="form-group col-xs-12">
              <label for="name">Message</label>
              <textarea class="form-control" name="message" rows="10" placeholder="Please include the service and couple days of availability." required></textarea>
            </div>
          </div>
          <!-- <div class="my-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div class="text-center"><button type="submit">Send Message</button></div> -->
        </form>
      </div>

    </div>

  `,
})
export class ContactSectionComponent {}
