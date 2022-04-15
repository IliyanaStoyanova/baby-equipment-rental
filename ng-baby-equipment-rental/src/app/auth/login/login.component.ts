import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { MessageService, messageType } from 'src/app/core/services/message.service';
import { ShowErrorService } from 'src/app/core/services/show-error.service';
import { passwordValidator } from '../validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required, passwordValidator])
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService, 
    private router: Router,
    private checkErrorService: ShowErrorService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    this.authService.login$(this.loginFormGroup.value).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      complete: () => {
        console.log('login completed');
      },
      error: (err) => {
        this.messageService.notifyForMessage({text: err.error.message, type: messageType.error});
      } 
    });
  }

  displayError(controlName: string, sourceGroup: FormGroup) {
    return this.checkErrorService.checkError(controlName, sourceGroup);
  }
}
