import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map, BehaviorSubject, catchError, EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from './core/interfaces';
import { CreateUserDto } from './core/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUser = new BehaviorSubject<IUser>(undefined!);
  currentUser$ = this._currentUser.asObservable();
  isLoggedIn$ = this.currentUser$.pipe(map(user => !!user))

  constructor(private httpClient: HttpClient) { }

  login$(userData: {email: string, password: string}): Observable<IUser> {
    return this.httpClient
    .post<IUser>(`${environment.apiUrl}/login`, userData, {withCredentials: true, observe: 'response'})
    .pipe(
      tap(response => console.log(response)),
      map(response => response.body!)
    );
  }

  logout$(): Observable<void> {
    return this.httpClient
    .post<void>(`${environment.apiUrl}/logout`, {}, {withCredentials: true})
  }

  register$(userData: CreateUserDto): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}/register`, userData, {withCredentials: true});
  }
  authenticate(): Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.apiUrl}/users/profile`, {withCredentials: true})
          .pipe(tap(currentProfile => this.handleLogin(currentProfile)), catchError((err) => {
            return EMPTY;
          }));
  }
  handleLogin(newUser: IUser) {
    this._currentUser.next(newUser);
  }
  handleLogout() {
    this._currentUser.next(undefined!);
  }
}