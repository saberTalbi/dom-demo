import { Component, OnInit,NgModule } from '@angular/core';
import {NgForm} from '@angular/forms'
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;

  constructor(private login:LoginServiceService) { 
    this.password='';
    this.email='';
  }

  ngOnInit() {

  }

loginUser(f){
  this.login.verifAuth(f.value['email'],f.value['password'])
}
}
