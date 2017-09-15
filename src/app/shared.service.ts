import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
   sharedNumber : number;
   sharedFirstName: string;
   sharedLastName: string;
   sharedProg: string;
   sharedYear:number;
  sharedStudentCollection: Array<object> = [];
  studObject: {
    number: number, 
    studfname: string, 
    studlname: string, 
    studprog: string, 
    studyr:number
  };

  constructor() {}

  addNewStudent(sharedNumber: number, sharedFirstName: string, sharedLastName: string, sharedProg: string, sharedYear:number){
    this.studObject = {
      number: sharedNumber,
      studfname: sharedFirstName,
      studlname: sharedLastName,
      studprog: sharedProg,
      studyr: sharedYear
    };
    this.sharedStudentCollection.push(this.studObject);
  }

  getStudent(): Array <object>{
    return this.sharedStudentCollection;
  }

}