import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/iproduct';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  result:IProduct[]=[];
  
  searchKey:string="";
  
  // data:any;
  
  constructor(private order:OrderDetailsService, private cartService: CartService) { 

    
  }

  ngOnInit(): void {
    this.order.getData().subscribe((data:IProduct[]) =>{
      // this.order.getData().subscribe((data) =>{
        // this.order.getData().subscribe((result:IResult)=>{
          // this.result=result.data;
          // console.log(result.data);
          console.log(data);
          this.result = data;

          // for cart use------------------------
          this.result.forEach((a:any)=>{
            Object.assign(a,{quantity:1,total:a.Price})
          })

        }); 
this.cartService.search.subscribe((Val:any)=>{
  this.searchKey=Val;
})
  }

addtocart(dt:any){
  this.cartService.addtoCart(dt);
}


}



