import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { IProduct } from '../iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor(private http:HttpClient) { }

  getData():Observable<IProduct[]>{
    let url="http://localhost:3000/data"
    return this.http.get<IProduct[]>(url);
  }

  // postData(data:any){
  //   let url="http://localhost:3000/data"
  //   return this.http.post(this.url,data)
  // }




// GroceryDetails
groceryData=[
  {
  id:1,
  GroceryName:"Ashirwaad Wheat Flour",
  GroceryDetails: "5kg",
  GroceryPrice:250,
  GroceryImg:"../../../assets/images/Wheat_flour.jpg"
  },
  {
  id:2,
  GroceryName:"Fresh Guava" ,
  GroceryDetails:"Fresh 4pcs Guava 100% Organic", 
  GroceryPrice:20,
  GroceryImg:"../../../assets/images/guava.jpg"
  },
  {
  id:3,
  GroceryName: "Colgate Tootpaste", 
  GroceryDetails:"Colgate",
  GroceryPrice:50,
  GroceryImg:"../../../assets/images/colgate.jpg"
  },
  {
  id:4,
  GroceryName:"Govind Lassi",
  GroceryDetails:"Fresh Curd Lassi",
  GroceryPrice:15,
  GroceryImg:"../../../assets/images/Lassi.jpg"
  },
  {
  id:5,
  GroceryName:"Onion",
  GroceryDetails:"Fresh Onion",
  GroceryPrice:"50kg",
  GroceryImg:"../../../assets/images/onion.jpg"
  }
]

}
