import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-age',
  templateUrl: './enter-age.component.html',
  styleUrls: ['./enter-age.component.css']
})
export class EnterAgeComponent implements OnInit {
  age:number;
  constructor(private route:Router) { }

  save(){
    sessionStorage["age"]=this.age;
    this.route.navigate(['show-data']);
  }
  ngOnInit(): void {
  }

}
