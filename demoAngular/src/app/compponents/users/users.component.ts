import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  name:string='';
  age:number=null;
  email:string='';
  address:Address={
    city:'',
    state:'',
    street:''
  };
  hobbies:string[];
  hello:any;
  isEdit:boolean = false;
  password:string;
  constructor() {
    console.log('constructor ran..');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');

   // this.name = 'Sabeur Talbi';
   // this.email = 'talbiisaber@gmail.com';
   // this.age = 25;
   // this.address = {
   //   street:'50 Main st',
   //   city: 'Tunis',
   //   state:'CE'
   // }
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
  }

  onClick(){
    this.name='Sabeur Talbi';
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);//add in the first element of the list
    //this.hobbies.push(hobby);//add in the end of list
    return false;
  }

  deleteHobby(i){
    this.hobbies.splice(i, 1);
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}


interface Address{
  street:string,
  city:string,
  state:string
}
/*
interface Post{
  id: number,
  title:string,
  body:string,
  userId:number
}*/
