import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'Add-Stud',
  templateUrl: './AddStud.Component.html',
  styleUrls: ['./appComponent.css']
})
export class AddEntryComponent implements OnInit {

  @Output() AddClicked = new EventEmitter<any>();
  @Input() message;
  flag = 'add';
  
  add() {
    this.AddClicked.emit({mode: this.flag});
  }

  constructor() { }

  ngOnInit() {
  }

}