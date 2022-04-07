import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SocialIconComponent } from './social-icon/social-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faSearch, faUser,faCartShopping, faHeadset, faTruck, faCalendarDays, faBabyCarriage } from '@fortawesome/free-solid-svg-icons';
import { StoreSupportComponent } from './store-support/store-support.component';

@NgModule({
  declarations: [
    SocialIconComponent,
    StoreSupportComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
  ],
  exports: [
    SocialIconComponent,
    FontAwesomeModule,
    StoreSupportComponent
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
       faBabyCarriage
      );
  }
}
