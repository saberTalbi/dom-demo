import { Component, OnInit } from '@angular/core';
import {NgForm,FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
  }
  profileForm:FormGroup;
  ngOnInit() {
    this.profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    ///console.warn(this.profileForm.value);
  }  

  

}
