import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler){
        // add authorization header with jwt token if available
        console.log("worked");
      //  let password = this.authenticationService.password;
      //  let username =this.authenticationService.username;
       // let headers: HttpHeaders = new HttpHeaders();
       // headers = headers.append('X-DOMjudge-Login', username);
       // headers = headers.append('X-DOMjudge-Pass',btoa (password));
       // headers = headers.append('Access-Control-Allow-Origin', '*');
       /* request = request.clone(({
            setHeaders:{'X-DOMjudge-Login': username,
                        'X-DOMjudge-Pass':btoa (password)}
        }))*/
        request = request.clone(({
            setHeaders: {
                //'Content-Type':'application/json',
               // 'Cache-Control':'no-cache',
                'Authorization': `Basic `+btoa('user:secret123'),
              //  'Access-Control-Allow-Origin': '*',
              //  'X-Requested-With':'XMLHttpRequest',
            }
        }));
        //console.log(currentUser.Token);
   /* if(currentUser!==null){
        console.log(currentUser.accessToken)
        if (currentUser && currentUser.accessToken) {
            request = request.clone(({
                setHeaders: {
                    Authorization: `Bearer `+currentUser.accessToken
                }
            }));
        }
    }*/
     //console.log(request);


        return next.handle(request);
    }
}
