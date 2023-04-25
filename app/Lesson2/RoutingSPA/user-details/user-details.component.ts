import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userid:number=0;
  user:any={};
  sub: Subscription=new Subscription();
  sub2: Subscription=new Subscription();
  constructor(private ar:ActivatedRoute, private http:HttpClient) { }

  ngOnInit(): void {
    this.sub = this.ar.params.subscribe((data:any) =>
    {
      this.userid = +data["id"];

      this.sub2 = this.http.get("https://jsonplaceholder.typicode.com/users/" + this.userid)
        .subscribe((data:any) =>
        {
          this.user = data;
        })

    })
  }
  ngOnDestroy()
  {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }

}
