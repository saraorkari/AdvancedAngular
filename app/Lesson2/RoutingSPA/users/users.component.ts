import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  sub: Subscription = new Subscription();
  users: []|any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.sub = this.http.get("https://jsonplaceholder.typicode.com/users")
    .subscribe(data => 
      {
        this.users=data;
      })
    }
  ngOnDestory(){
    this.sub.unsubscribe();
  }
  }
  
  


