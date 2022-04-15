import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { MessageService, messageType } from 'src/app/core/services/message.service';
import { ShowErrorService } from 'src/app/core/services/show-error.service';
import { CreateUserDto } from 'src/app/core/services/user.service';
import { passwordMatch, passwordValidator } from '../validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  passwordControl = new FormControl(null, [Validators.required, passwordValidator]);

  get passwordsGroup(): FormGroup {
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }
  registerFormGroup: FormGroup = this.formBuilder.group({
    'username': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'passwords': new FormGroup({
      'password': this.passwordControl,
      'rePassword': new FormControl(null, [passwordMatch(this.passwordControl)])
    })
  })
  constructor(
     private formBuilder: FormBuilder,
     private authService: AuthService, 
     private checkErrorService: ShowErrorService,
     private messageService: MessageService) { }

  ngOnInit(): void {
  }

  handleRegister(): void {
    const {username, email, passwords} = this.registerFormGroup.value;

    const body: CreateUserDto = {
      username: username,
      email: email,
      password: passwords.password
    }
    this.authService.register$(body).subscribe({
      next: user => {        
        this.messageService.notifyForMessage({text: "Your registration was successful", type: messageType.success});
        this.registerFormGroup.reset();
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
