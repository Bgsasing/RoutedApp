import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./app.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private dataStore: SharedService) { }

  ngOnInit() {
  }

  onSubmit(nameForm){
    this.dataStore.addNewStudent(nameForm.value.number, 
    nameForm.value.fname, 
    nameForm.value.lname, 
    nameForm.value.prog,
    nameForm.value.yr)
    nameForm.reset();
  }

}