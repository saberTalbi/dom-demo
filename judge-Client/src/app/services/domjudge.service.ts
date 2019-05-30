import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomjudgeService {

  constructor(private http:HttpClient) { }
  getAll() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Access-Control-Allow-Origin', '*');
   return this.http.get<any>('http://192.168.99.100:12345/api/v4/judgehosts').pipe(map(list => { return list}));
  }
  getpublic(){
    return this.http.get<any>('http://192.168.99.100:12345/api/v4').pipe(map(list => { return list}));

  }
  getSpringApi(){
   // return this.http.get<any>('http://localhost:8080/api').pipe(map(list => { return list}));
   return this.http.get<any>('http://192.168.99.100:8080/api').pipe(map(list => { return list}));
  }
}
