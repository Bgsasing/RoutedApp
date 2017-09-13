import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'App-Display',
  templateUrl: './Display.Component.html',
  styleUrls: ['./app.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() printing = true;
  @Input() studentCollection;

  constructor() { }

  ngOnInit() {
  }

}