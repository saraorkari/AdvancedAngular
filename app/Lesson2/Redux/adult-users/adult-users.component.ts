import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { UserState } from '../appReducer';
import { User } from '../../user';

@Component({
  selector: 'app-adult-users',
  templateUrl: './adult-users.component.html',
  styleUrls: ['./adult-users.component.css']
})
export class AdultUsersComponent implements OnInit {

  user: Observable<User[]> = new Observable<User[]>();

  constructor(private store: Store<{userState: User[]}>) { }

  ngOnInit(): void {
    this.user = this.store.select(data => data.userState.filter(x => x.age > 18));
  }

}
