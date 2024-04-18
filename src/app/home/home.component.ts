// import { Component, ElementRef } from '@angular/core';
// import { COMMA, ENTER } from "@angular/cdk/keycodes";
// import { MatChipInputEvent } from "@angular/material/chips";
// import { Quoteservice } from '../services/auth.service';

// export interface tag {
//   name: string;
// }
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent {
//   constructor(private quoteservice: Quoteservice) {

//   }
  
//   EditorTimes: number = 1;
//   visible = true;
//   selectable = true;
//   removable = true;
//   addOnBlur = true;
//   chipListElement: any
//   readonly separatorKeysCodes: number[] = [ENTER, COMMA];
//   Tags: any[] = [[]];
//   finnalArray: any = [];
//   Author: any[] = [];
//   QuoteText: any[] = [];
//   ngOnInit(): void {
//     // this.chipListElement = this.elementRef.nativeElement.querySelector('mat-chip-list');
//     this.quoteservice.GetQuote().subscribe(response =>{
//       console.log(response);
//     })
//   }
//   // add(event: MatChipInputEvent, index: number): void {
//   //   const input = event.input;
//   //   const value = event.value;
//   //   if ((value || "").trim()) {
//   //     this.Tags[index].push({ name: value.trim() });
//   //   }
//   //   if (input) {
//   //     input.value = "";
//   //   }
//   // }
//   // remove(tag: tag, index2: number): void {
//   //   const index = this.Tags.indexOf(tag);
//   //   if (index >= 0) {
//   //     this.Tags[index2].splice(index, 1);
//   //   }
//   // }
//   // addQuotres() {
//   //   if(this.Author.length!=0&&this.Tags[0].length !=0 && this.QuoteText.length!=0 && this.Author[this.Author.length -1]!="" && this.Tags[this.Tags.length -1]!="" && this.Tags[this.Tags.length -1].length !=0){
//   //     this.EditorTimes += 1;
//   //     this.finnalArray = [];
//   //     this.Author.forEach((e, i) => {
//   //       this.finnalArray.push({
//   //         author: e,
//   //         chips: this.Tags[i],
//   //         quotes: this.QuoteText[i]
//   //       })
//   //     })
//   //     this.Tags.push([]);
//   //     this.Author.push("");
//   //     this.QuoteText.push("");
//   //   }
//   // }
//   // submit(){
//   //   this.addQuotres();
//   //   console.log(this.finnalArray)
//   // }

// }
