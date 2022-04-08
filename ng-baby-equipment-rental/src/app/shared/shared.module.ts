import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SocialIconComponent } from './social-icon/social-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faSearch, faUser,faCartShopping, faHeadset, faTruck, faCalendarDays, faBabyCarriage, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { StoreSupportComponent } from './store-support/store-support.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { GoogleMapsComponent } from './google-maps/google-maps.component';


@NgModule({
  declarations: [
    SocialIconComponent,
    StoreSupportComponent,
    GoogleMapsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  exports: [
    SocialIconComponent,
    FontAwesomeModule,
    StoreSupportComponent,
    GoogleMapsComponent
  ]
})
export class SharedModule { 
   constructor(library: FaIconLibrary) {
     library.addIcons(
       faFacebookF, 
       faInstagram, 
       faTwitter, 
       faLinkedinIn, 
       faEnvelope, 
       faPhone, 
       faSearch, 
       faUser, 
       faCartShopping,
       faHeadset,
       faTruck,
       faCalendarDays,
       faBabyCarriage,
       faAngleUp
      );
  }
}
