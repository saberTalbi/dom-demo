import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { checkAndUpdateElementInline } from '@angular/core/src/view/element';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) {

   }   get username(){
     return "admin";
   }
   get password(){
     return "h_ldGoV-hLyysk7o"
   }
   auth(username,password){
     username=this.username
     password=this.password
     let headers: HttpHeaders = new HttpHeaders();
     headers = headers.append('Access-Control-Allow-Origin', '*');
     //return this.http.get<any>('http://192.168.99.100:12345/login',{headers}).pipe(map(list => { return list}));
     return this.http.post<any>('http://192.168.99.100:12345/login',{ username, password })
   }

}
