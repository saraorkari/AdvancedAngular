import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : any[] = [];

  constructor(private http : HttpClient) { }

  ngOnInit(): void {


    this.http.get("http://localhost:8000/api/products")
    
      .subscribe((data:any) =>
      {
        // debugger;
        console.log(data);
        this.products = data;
      })

  }
}
