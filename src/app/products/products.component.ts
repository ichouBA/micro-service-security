import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  http = inject(HttpClient);
  products:any;
  ngOnInit(): void {
    console.log("hello")
    this.http.get("http://localhost:8087/api/products").subscribe({
      next: data=>{
        this.products = data
          console.log(data)
      },
      error: err => console.log(err)
    })
  }
}
