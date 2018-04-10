import { Component } from '@angular/core';

@Component({
   selector: 'test-ng',
   templateUrl: 'Form Template/form.html',
   styleUrls: ['Form Template/style.css']
})

export class TestngComponent { 
   fName = 'Ratnesh Shukla';
   onSubmit(value: any){
    console.log(value);
  }
}