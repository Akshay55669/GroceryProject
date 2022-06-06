import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/iproduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public product:any=[];
  public grandTotal!:number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.getProducts().subscribe(res=>{
      this.product=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }

  removeItem(item:IProduct){
this.cartService.removeCartItem(item)
  }

  emptycart(){
    this.cartService.removeAllCart();
  }
  
  calculatePrice(){
    this.grandTotal=this.cartService.getTotalPrice();
  }


  plus(product:any){
    
    if(product.quantity!=5)
    product.quantity+=1;
    this.cartService.addtoCart(product);
    }
  

  minus(product:any){
   if(product.quantity!=1)
    product.quantity-=1;
    this.cartService.removeCartItem(product);
    
  }


}
