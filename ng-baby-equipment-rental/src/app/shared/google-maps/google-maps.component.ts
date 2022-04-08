import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent {
  
  center: google.maps.LatLngLiteral = {lat: 43.83645624490449, lng: 25.963565988775283};
  markerPositions: google.maps.LatLngLiteral = this.center;
  zoom = 10;

  apiLoaded: Observable<boolean>;
  apiKeyMaps = environment.apiKeyMaps;
  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${this.apiKeyMaps}`, 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }
}
