import { Component, OnInit } from '@angular/core';

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
  pasword:string;
  passworfVerification:string;
  constructor() { }

  ngOnInit() {
  }


}
interface Adress{
  street:string,
  city:string,
  state:string
}