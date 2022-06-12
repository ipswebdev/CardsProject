import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class CardServiceService {
  baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private httpClient: HttpClient) { }
  getCards():Observable<any>{
    let endpoint = '/photos'
    let url = this.baseUrl+endpoint;
    let params = {};
    return this.httpClient.get(url).pipe(
      map(data => data)
    )
    // .subscribe((data:any[])=>{
    //   if(data && data.length){
    //     return data;
    //   }
    // });
  }
}

