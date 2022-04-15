import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces';
import { StorageService } from './storage.service';
import { map, tap } from 'rxjs/operators';

export interface CreateUserDto {
  username: string,
  email: string,
  password: string
}

@Injectable()
export class UserService {
 
  constructor(private storage: StorageService, private httpClient: HttpClient) {
    // this.isLogged = this.storage.getItem('isLogged');
  }

  getProfile$(): Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.apiUrl}/users/profile`, {withCredentials: true});
  }
  
  updateProfile$(userData: {username: string, email: string}): Observable<IUser> {
    return this.httpClient
    .put<IUser>(`${environment.apiUrl}/users/profile`, userData, {withCredentials: true});
  }
}
