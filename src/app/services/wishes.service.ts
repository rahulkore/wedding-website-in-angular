import { Injectable } from '@angular/core';
import { Wish } from '../shared/wish';
import { Wishes } from '../shared/wishes';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { doc } from '@angular/fire/firestore';
import { addDoc } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class WishesService {

  dummy: Wish[] = [];
  collections = collection(this.firestore,'wishes');
  data = collectionData(this.collections);
  constructor(private http : HttpClient,private firestore : Firestore) { 

  }

  getWishes() : Observable<any>{
    return this.data;
    //return this.http.get("http://localhost:3000/wishes");
  }

  async addWishes(_id :number,_name : string , _wish : string) : Promise<void>{
    var obj = new Wish(_id,_name, _wish);
    const docRef = await addDoc(collection(this.firestore,'wishes'),{
      id : _id,
      name : _name,
      wish : _wish
    });
    //this.data.add(obj);


  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json'
  //     })
  //   };
  //   var obj = new Wish(_id,_name, _wish);
  //   console.log(_id,_name,_wish);
  //   //console.log(obj);
  //   //console.log(Wishes.push(obj));
  //   this.http.post("http://localhost:3000/wishes",obj,httpOptions)
  //   .subscribe(
  //     data => {
  //       console.log(data);
  //       return data;
  //     },
  //     (err : HttpErrorResponse) => {
  //       console.log(err.message);
  //     }
  //   )
  }
}
