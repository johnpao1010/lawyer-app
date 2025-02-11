import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.css']
})
export class CookieBannerComponent implements OnInit {
  showBanner: boolean = true;

  ngOnInit() {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted) {
      this.showBanner = false;
    }
  }

  acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    this.showBanner = false;
  }

  declineCookies() {
    localStorage.setItem('cookiesAccepted', 'false');
    this.showBanner = false;
  }
}