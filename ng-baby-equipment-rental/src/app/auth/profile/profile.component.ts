import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/interfaces';
import { MessageService, messageType } from 'src/app/core/services/message.service';
import { ShowErrorService } from 'src/app/core/services/show-error.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: IUser;
  isInEditMode: boolean = false;

  profileFormGroup: FormGroup;

  constructor(
    private userService: UserService, 
    private router: Router, 
    private formBuilder: FormBuilder,
    private checkErrorService: ShowErrorService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.userService.getProfile$().subscribe({
      next: (user) => {
        this.currentUser = user;
        this.profileFormGroup = this.formBuilder.group({
          'username': new FormControl(this.currentUser.username, [Validators.required]),
          'email': new FormControl(this.currentUser.email, [Validators.required, Validators.email])
        })
      },
      error: () => {
        this.router.navigate(['/user/login']);
      }
    });
  }
  
  enterEdit(): void {
    this.isInEditMode = true;
  }
  btnCancel(): void {
    this.isInEditMode = false;
  }
  updateProfile(): void {
    this.isInEditMode = false;
    this.userService.updateProfile$(this.profileFormGroup.value).subscribe({
      next: (user) => {               
        this.messageService.notifyForMessage({text: "The change was successful", type: messageType.success}); 
        this.currentUser = user;
      },
      error: (err) => {
        this.isInEditMode = true;        
        this.messageService.notifyForMessage({text: err.error.message, type: messageType.error});
      } 
    });
  }
  
  displayError(controlName: string, sourceGroup: FormGroup) {
    return this.checkErrorService.checkError(controlName, sourceGroup);
  }
}
