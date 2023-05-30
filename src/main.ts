import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <input [(ngModel)]="inputValue" (keyup)="onInputValue(inputValue)">
    <div *ngIf="showError">
    <p class=text-danger>Number should be greater than five.</p>
    </div>
    <div *ngIf="showResult">
      <p class="text-info">Number is Okay</p>
    </div>
  `,
})
export class App {
  name = 'Aditya';
  inputValue!: string;
  myArray!: number[];
  showError: boolean = false;
  showResult: boolean = false;

  onInputValue(inputValue: string) {
      const trimmedValue = inputValue.replace('[', '').replace(']', '').trim();
      const values = trimmedValue.split(',').map((value: any) => Number(value.trim()));
      this.myArray = values.filter((value: any) => !isNaN(value));
      console.log(this.myArray)
      console.log(this.myArray.length)
      if (this.myArray.length < 5) {
        this.showError = true
        this.showResult = false;
      } else {
        this.showError = false
        this.showResult = true
        const sortedArr = [...this.myArray].sort((a, b) => a - b);
        console.log(sortedArr)
        // for (let i = 0; i < this.myArray.length - 1; i++) {
        //   for (let j = i+1; j <= this.myArray.length - 1; j++) {
        //     if (this.myArray[j] > this.myArray[j + 1]) {
        //       const temp = this.myArray[j];
        //       this.myArray[j] = this.myArray[j + 1];
        //       this.myArray[j + 1] = temp;
        //       console.log(temp)
        //     }
        //   }
        // }
      }
  }

}

bootstrapApplication(App);
