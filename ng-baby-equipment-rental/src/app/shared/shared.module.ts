import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faSearch, faUser,faCartShopping, faHeadset, faTruck, faCalendarDays, faBabyCarriage, faAngleUp, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { StoreSupportComponent } from './store-support/store-support.component';
import { SocialIconComponent } from './social-icon/social-icon.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { CategoriesSidebarComponent } from './categories-sidebar/categories-sidebar.component';

@NgModule({
  declarations: [
    SocialIconComponent,
    StoreSupportComponent,
    GoogleMapsComponent,
    CategoriesSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatButtonModule
  ],
  exports: [
    SocialIconComponent,
    FontAwesomeModule,
    MatButtonModule,
    StoreSupportComponent,
    GoogleMapsComponent,
    CategoriesSidebarComponent
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
       faAngleUp,
       faArrowRight
      );
  }
}
