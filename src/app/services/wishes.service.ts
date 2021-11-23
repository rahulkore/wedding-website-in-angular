import { Injectable } from '@angular/core';
import { Wish } from '../shared/wish';
import { Wishes } from '../shared/wishes';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  dummy: Wish[] = [];

  constructor(private http : HttpClient) { 
  }

  getWishes() : Observable<any>{
    return this.http.get("http://localhost:3000/wishes");
  }

  addWishes(_id :number,_name : string , _wish : string) : void{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var obj = new Wish(_id,_name, _wish);
    console.log(_id,_name,_wish);
    //console.log(obj);
    //console.log(Wishes.push(obj));
    this.http.post("http://localhost:3000/wishes",obj,httpOptions)
    .subscribe(
      data => {
        console.log(data);
        return data;
      },
      (err : HttpErrorResponse) => {
        console.log(err.message);
      }
    )
  }
}
