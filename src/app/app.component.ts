import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Calc';

  res = 0;
  isNum1 = 0;
  isNum2 = 0;
  sum = 0;
  sub = 0;
  mul = 0;
  divi = 0;


  getNum1(value: string){
    const parsedInt = parseInt(value);
      
      if(!isNaN(parsedInt)){
        this.isNum1 = parsedInt;
        console.log(this.isNum1);
      }
  }
  getNum2(value: string){
    const parsedInt = parseInt(value);
      
      if(!isNaN(parsedInt)){
        this.isNum2 = parsedInt;
        console.log(this.isNum2);
      }
  }

  clickAdd(){
    let sum = this.isNum1 + this.isNum2;
    this.res = sum;
  }

  clickSub(){
    let sub = this.isNum1 - this.isNum2;
    this.res = sub;
  }

  clickMul(){
    let mul = this.isNum1 * this.isNum2;
    this.res = mul;
  }

  clickDiv(){
    let divi = this.isNum1 / this.isNum2;
    this.res = divi;
  }


}
