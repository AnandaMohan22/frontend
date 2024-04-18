import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { quote } from '../models/quote';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class Quoteservice {

    constructor (private httpclient : HttpClient ) {}

  baseUrl = "http://localhost:5281/api/Quote"

GetQuote() : Observable<quote[]>{
   return this.httpclient.get<quote[]>(this.baseUrl)
    }

    CreateQuote(quo : quote):Observable<quote>{
      debugger
      quo.Id="00000000-0000-0000-0000-000000000000";
      return this.httpclient.post<quote>(this.baseUrl,quo)
    }

    UpdateQuote(data:quote) : Observable<quote> {
      debugger
      return this.httpclient.put<quote>(this.baseUrl+ '/' + data.Id,data);
    
    }

    DeleteQuote(Id :any) : Observable<quote> {
      debugger
      return this.httpclient.delete<quote>(this.baseUrl + '/' + Id);
    
    }
}

