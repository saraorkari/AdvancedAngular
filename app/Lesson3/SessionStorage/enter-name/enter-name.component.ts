import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-name',
  templateUrl: './enter-name.component.html',
  styleUrls: ['./enter-name.component.css']
})
export class EnterNameComponent implements OnInit {

  name:string;
  constructor(private route:Router) { }

  save(){
    sessionStorage["name"]=this.name;
    this.route.navigate(['enter-age']);
  }
  ngOnInit(): void {
  }

}
