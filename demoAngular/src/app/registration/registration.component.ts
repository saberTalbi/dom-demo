import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import {FormControl,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  name:string;
  age:string;
  adress:Adress;
  email:string;
  password:string='';
  passwordVerification:string;
  ifEquals:boolean=(this.password===this.password)? true:false;

  constructor(private signup:LoginServiceService) { }

  ngOnInit() {
  }
  signUpUser(f){
    this.signup.createUser(f.value['name'],f.value['email'],f.value['password']);
  }
  profileForm = new FormGroup({
    password: new FormControl(''),
    verifpassword: new FormControl('')
  });

}
interface Adress{
  street:string,
  city:string,
  state:string
}