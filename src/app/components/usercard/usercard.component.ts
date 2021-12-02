import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})
export class UsercardComponent implements OnInit {

  @Input() user;
  

  constructor() { }

  ngOnInit(): void {
    console.log('hello');
  }

}
