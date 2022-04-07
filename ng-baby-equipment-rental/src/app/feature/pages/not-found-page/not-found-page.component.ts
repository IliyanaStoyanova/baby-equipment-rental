import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit {

  constructor(private titleService: Title, private router: Router) { 
    this.titleService.setTitle("Page Not Found");
  }

  ngOnInit(): void {
  }

  handleHome(): void {
    this.router.navigate(['/home']);
  }
}
