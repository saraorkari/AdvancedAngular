import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) { }
  // getEmail(id:number){
  //   return new Promise(resolve=>{
  //     this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .subscribe((data:any)=>{
  //       let email=data.map((x:any)=>x.email);
  //       resolve(email);
  //     })
  //   })
  // }
  // getTasks(id:number){
  //   return new Promise(resolve=>{
  //     this.http.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
  //     .subscribe((data:any)=>{
  //       let tasks=data.map((x:any)=>x.title);
  //       resolve(tasks);
  //     })
  //   })
  // }
  // getPosts(id:number){
  //   return new Promise(resolve=>{
  //     this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  //     .subscribe((data:any)=>{
  //       let posts=data.map((x:any)=>x.body);
  //       resolve(posts);
  //     })
  //   })
  // }
  getUserData(id:number){
    let userData:any={};
    return new Promise(resolve=>{
      this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .subscribe((data:any)=>{
        userData.id=id;
        userData.email=data.email;
        this.http.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
        .subscribe((todos:any)=>{
          todos=todos.splice(0,3);
          let todosTitle=todos.map((x:any)=>x.title);
          userData.todos=todosTitle;
          this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
          .subscribe((posts:any)=>{
            posts=posts.splice(0,2);
            let postsBody=posts.map((x:any)=>x.body);
            userData.posts=postsBody;
            resolve(userData);
          })
        })
      })
    })
  }
}
