import { Component } from '@angular/core';
import { DomjudgeService } from './services/domjudge.service';
import { first, retry, map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result;
  title = 'judge-Client';
  constructor(private domjudge:DomjudgeService,private auth:AuthenticationService){
  //  this.auth.auth('oussema','123456789').subscribe(r=>{      console.log(r)    })
   /* this.domjudge.getAll().pipe(first())
    .subscribe(
        data => {
          console.log(data)
         // this.result=data
        },
        error => {
          
        });
        this.domjudge.getpublic().pipe(first())
        .subscribe(
            data => {
              console.log(data)
              this.result=data
            },
            error => {
              
            });*/
            this.domjudge.getSpringApi().subscribe(r=>{
              console.log(r)
              if(r)             
             { this.result=r}
            })
            
  }
}
