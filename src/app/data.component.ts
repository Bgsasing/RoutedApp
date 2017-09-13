import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Data-Entry',
  templateUrl: './data.component.html',
  styleUrls: ['./app.component.css']
})
export class DataEntryComponent implements OnInit {

  studNo: number;
  studFname: string;
  studLname: string;
  studProg: string;
  studYr: number;
  students;
  
  getStudent(): object{
    this.students = {
      studNo: this.studNo,
      studFname: this.studFname,
      studLname: this.studLname,
      studProg: this.studProg,
      studYr: this.studYr
    };
    
    this.studNo = null;
    this.studFname = null;
    this.studLname = null;
    this.studProg = null;
    this.studYr = null;
    return this.students;
  }

  constructor() { }

  ngOnInit() {
  }
}