import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-comp2',
  templateUrl: './main-comp2.component.html',
  styleUrls: ['./main-comp2.component.css']
})
export class MainComp2Component implements OnInit {

  constructor(private ngZone: NgZone, private http: HttpClient) { }
  user: any = { name: '', email: '', posts: [], todos: [] };
  userid: number = 1;
  ngOnInit(): void {
      this.ngZone.runOutsideAngular(() =>
      {
        this.http.get("http://jsonplaceholder.typicode.com/users/" + this.userid)
          .subscribe((userData:any) =>
            {
              this.http.get("https://jsonplaceholder.typicode.com/todos?userId=" + this.userid)
              .subscribe((userTodos:any) =>
                {
                  this.ngZone.run(() =>
                  {
                    this.http.get("https://jsonplaceholder.typicode.com/posts?userId=" + this.userid)
                    .subscribe((userPosts:any) =>
                      {
                       
                            this.user.name = userData.name;
                            this.user.email = userData.email;
    
                            this.user.todos = userTodos.splice(0,3).map((x:any) => x.title);
                            this.user.posts = userPosts.splice(0,3).map((x:any) => x.title);
                         }) 
                  })
  
                })
            })
      })
    }
  
  func() {
    this.ngZone.runOutsideAngular(() => {
      this.http.get(`https://jsonplaceholder.typicode.com/users/${this.userid}`)
        .subscribe((userData: any) => {
          this.http.get(`https://jsonplaceholder.typicode.com/todos?userId=${this.userid}`)
            .subscribe((userTodos: any) => {
              this.ngZone.run(() => {
              this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.userid}`)
                .subscribe((userPosts: any) => {
                    this.user.name = userData.name;
                    this.user.email = userData.email;
                    console.log(userTodos);
                    this.user.todos = userTodos.splice(0,3).map((x:any) => x.title);
                    this.user.posts = userPosts.splice(0, 3).map((x:any) => x.title);
                  })
                })
            })
        })
    })
  }
}

