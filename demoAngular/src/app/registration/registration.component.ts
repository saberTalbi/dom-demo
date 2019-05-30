import { Component, OnInit, Input } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import {FormControl,FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private signup:LoginServiceService) {

   }

  ngOnInit() {
  }
  signUpUser(f){
    if(f.value['password']===f.value['passwordVerification']){
      this.signup.createUser(f.value['name'],f.value['email'],f.value['password'],f.value['dateOfBirth'],f.value['adress']);
    }
    else{
      f.value['password'];
      f.value['passwordVerification'];
      alert("please 5ouya la3ziz 7ot password s7i7")
    }
  }

}
interface Adress{
  street:string,
  city:string,
  state:string
}