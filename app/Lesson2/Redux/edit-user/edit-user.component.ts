import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../user';
import { UserReducer } from '../../appReducer';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user:User=
  {
    id : 0, firstName: "", lastName: "", age: 0
  };
  constructor(private store : Store) { }

  ngOnInit(): void {
  }

  add(){
    let id=this.user.id;
    let firstName=this.user.firstName;
    let lastName=this.user.lastName;
    let age=this.user.age;
    let user1 = { id, firstName, lastName, age}
    this.store.dispatch({
      type: "ADD", payload:user1
    })
  }
  update(){
    let id=this.user.id;
    let firstName=this.user.firstName;
    let lastName=this.user.lastName;
    let age=this.user.age;
    let user1 = { id, firstName, lastName, age}
    this.store.dispatch({
      type: "UPDATE", payload: user1
    })
  }
  delete(){
    let id = this.user.id;
    this.store.dispatch({
      type: "DELETE", payload: id
    })
  }
}
