import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private srv: AuthService, private router:Router) { }
  login(username: string, password: string) {
    let obj = { username, password };
    this.http.post("http://localhost:8000/api/auth/login", obj)
      .subscribe((data: any) => {
        if (data.token) {
          this.srv.saveToken(data.token);
          this.srv.saveRole(data.role);
          this.router.navigate(['/menu']);
        }
      })
  }
  ngOnInit(): void {
  }

}
