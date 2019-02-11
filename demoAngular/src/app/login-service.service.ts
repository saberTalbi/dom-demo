import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from 'selenium-webdriver/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private baseUrl = 'http://localhost:8001/auth';
  isAuth :boolean = false;
  auth:{
    login:String,
    password:String
    }
    user:{
      name:String,
      email:String,
      password:String
    }
  constructor(private http:HttpClient,private router:Router) { }

  verifAuth(login: String, password: String){
    this.auth={
    login:login,
    password:password
    }
    //console.log(this.auth);
    
    this.http.post('http://localhost:8001/auth',this.auth).
    subscribe( () => {
    console.log('Enregistrement terminé !');
    this.getResponseAuth();
    },
    (error) => {
    console.log('Erreur ! : ' + error);
    });
    }
    usr:User;


    getResponseAuth(){
      this.http.get('http://localhost:8001/auth').
      subscribe((response)=>{
        if(response!==null){
        this.usr={
          name:response['name'],
          email:response['email'],
          password:response['password']
        };
        this.router.navigate(['main']);

      }
        console.log('recieve terminé !');
        console.log(this.usr);
      },
      (error) => {
        console.log('Erreur ! : ' + error);
        });

      
    }
    createUser(name:String,email:String,password:String){
this.user={
  name:name,
  email:email,
  password:password
}
this.http.post('http://localhost:8001/createUser',this.user). subscribe( () => {
  console.log('Enregistrement terminé !');
  },
  (error) => {
  console.log('Erreur ! : ' + error);
  });

    }

    
}
interface User{
  name:string,
  email:string,
  password:string

}

