import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  shNumber : number;
   shFirstName: string;
   shLastName: string;
   shProg: string;
   shYear:number;
  shStudentCollection: Array<object> = [];
  studObject: {
    number: number, 
    studfname: string, 
    studlname: string, 
    studprog: string, 
    studyr:number
  };

  constructor() {}

  addNewStudent(shNumber: number, shFirstName: string, shLastName: string, shProg: string, shYear:number){
    this.studObject = {
      number: shNumber,
      studfname: shFirstName,
      studlname: shLastName,
      studprog: shProg,
      studyr: shYear
    };
    this.shStudentCollection.push(this.studObject);
  }

  getStudent(): Array <object>{
    return this.shStudentCollection;
  }

}