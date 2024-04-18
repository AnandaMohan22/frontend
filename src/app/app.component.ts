import { Component, OnInit } from '@angular/core';
import { Quoteservice } from './services/auth.service';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { quote } from './models/quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  finalArray:quote[]=[];
  filteredArray: any[] | undefined; 
    searchQuery: string = '';

  quoteFormGroup :FormGroup;
  constructor(private quoservice : Quoteservice, private fb: FormBuilder){
    this.quoteFormGroup = this.fb.group({
      Id : [""],
      author : ["",Validators.required],
      tags : ["",Validators.required],
      quoteText : ["",Validators.required],
    })


  }
  
  ngOnInit(): void {
    this.GetQuotes();
    this.filteredArray = this.finalArray;
    
    

  }
  GetQuotes()
  {
    this.quoservice.GetQuote().subscribe(response =>{
      console.log(response);
      this.finalArray = response;
    })
  }
  onSubmit() {
  debugger;
  const formData = this.quoteFormGroup.value;
  if (formData && Object.keys(formData).length !== 0) {
    if (formData.Id) {
      this.quoservice.UpdateQuote(formData).subscribe(response => {
        console.log(response);
        this.GetQuotes();
        this.resetForm();
      });
    } else {
      this.quoservice.CreateQuote(formData).subscribe(response => {
        console.log(response);
        this.GetQuotes();
        this.resetForm();
      });
    }
  } else {
    console.error("Form data is empty.");
  }
}

resetForm() {
  this.quoteFormGroup.reset({
    Id: "",
    author: "",
    tags: "",
    quoteText: ""
  });
}
filterData(): void {
  if (this.searchQuery.trim() !== '') {
      this.filteredArray = this.finalArray.filter(data =>
          data.author.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          data.tags.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          data.quoteText.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
  } else {
      // If search query is empty, show all data
      this.filteredArray = this.finalArray;
  }
}

  FillForm(data:any){
    this.quoteFormGroup.setValue({
      Id : data.id,
      author : data.author,
      tags : data.tags,
      quoteText : data.quoteText,
    })
  }

  DeleteQuote(data:any){
    debugger
    let Id = data.id;
    this.quoservice.DeleteQuote(Id).subscribe(res =>{
      console.log(res);
      this.GetQuotes();
    }

    )

  }





  title = 'frontend';
}
