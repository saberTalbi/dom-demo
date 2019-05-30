import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    user:User;

  constructor(private http:HttpClient,private router:Router) { }





  /***** send login and password to the spring app to verifie if exist ***/
  verifAuth(login: String, password: String){
    this.auth={
    login:login,
    password:password
    }
    console.log(this.auth);
    
    this.http.post(this.baseUrl,this.auth).
    subscribe( (response) => {
      if(response!=null){
        sessionStorage.saveItem(
          'token', 
          btoa(this.auth.login + ':' + this.auth.password)
        );
      }
    console.log(this.auth);
    },
    (error) => {
    console.log('Erreur ! : ' + error);
    });
    }

/******** get methode to retrieve the user if login and password are true else retrieve null ******/
    getResponseAuth(){
      this.http.get(this.baseUrl).
      subscribe((response)=>{
        if(response!==null){
        this.user={
          name:response['name'],
          email:response['email'],
          password:response['password'],
          dateOfBirth:response['dateOfBirth'],
          adress:response['adress']
        };
        this.router.navigate(['main']);

      }
        console.log('recieve terminé !');
        console.log(this.user);
      },
      (error) => {
        console.log('Erreur ! : ' + error);
        });
    }

    getResponseCreateUser(){
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('talbiisaber@gmail.com:NnDh6q94TFnJqQ4') });
      this.http.get('http://localhost:8001/createUser').
      subscribe((response)=>{
        this.user=null;
        if(response!==null){
        this.user={
          name:response['name'],
          email:response['email'],
          password:response['password'],
          dateOfBirth:response['dateOfBirth'],
          adress:response['adress']
        };
        this.router.navigate(['main']);
      }
      else{
        alert("you have an acount with this email please check your email or signin");
      }
        console.log('recieve terminé !');
        console.log(response);
      },
      (error) => {
        
        });
    }


    /********* send new user to spring to persist in the data base  *****/
createUser(name:String,email:String,password:String,dateOfBirth:Date,adress:String){
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('talbiisaber@gmail.com:NnDh6q94TFnJqQ4') });

this.user={
  name:name,
  email:email,
  password:password,
  adress:adress,
  dateOfBirth:dateOfBirth
 
}
this.http.post('http://localhost:8001/createUser',this.user). subscribe( (response)=>{
  if(response!==null){
 
    this.user={
      name:response['name'],
      email:response['email'],
      password:response['password'],
      dateOfBirth:response['dateOfBirth'],
      adress:response['adress']
    };
    sessionStorage.setItem(
      'token', 
      btoa(this.user.name + ':' + this.user.password)
    );
    this.router.navigate(['main']);
    console.log('Enregistrement terminé !');
    console.log(response);
    
  } 
  else{
    alert("you have an acount with this email please check your email or signin");
  }
  },
  (error) => {
  console.log('Erreur ! : ' + error);
  });

    }    
}

interface User{
  name:String,
  email:String,
  password:String,
  dateOfBirth:Date,
  adress:String
}

