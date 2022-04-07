import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-support',
  templateUrl: './store-support.component.html',
  styleUrls: ['./store-support.component.css']
})
export class StoreSupportComponent implements OnInit {
  // @Input() stackItemSize: '1x' | '2x' = '2x';
  stackItemSize: '1x' | '2x' = '2x';
  constructor() { 
  }

  ngOnInit(): void {
  }

}
