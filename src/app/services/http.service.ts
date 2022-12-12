import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  get<T>(url:string,params:any):Observable<any>{
    return this.http.get(url,{params}).pipe(
      map(res=>{
        return res;
      })
    );
  }
}
