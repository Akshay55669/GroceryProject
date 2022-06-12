import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/iproduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public product: any = [];
  public grandTotal!: number;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.getProducts().subscribe(res => {
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  removeItem(item: IProduct) {
    this.cartService.removeCartItem(item)
  }

  emptycart() {
    this.cartService.removeAllCart();
  }

  calculatePrice(){
    this.grandTotal=this.cartService.getTotalPrice();
    return this.grandTotal
  }

  plus(product:any){
    if(product.quantity!=5)    
    this.cartService.incrementQuantity(product);
    }

    minus(product:any){
      if(product.quantity!=1)
        this.cartService.decrementQuantity(product);
      else
        this.cartService.removeCartItem(product);
      }
    }
  // calculatePrice() {
  //   this.grandTotal = this.cartService.getTotalPrice();

    
  // }

  // // plus(Id:any, quantity:any ){
  // plus(Id:any, quantity:number, Price:number ){
  //   for (let i = 0; i < this.product.length; i++){
  //     if (this.product[i].Id === Id){
  //       if (quantity != 5) {
  //         // this.product[i].quantity = parseInt(quantity)+1;

  //         this.product[i].quantity = quantity+1;
  //         this.grandTotal = this.product[i].Price*this.product[i].quantity;
  //       }
  //     }
  //   }
  // }

  // // minus(Id:any, quantity:any){
  // minus(Id:any, quantity:number, Price:number){
  //   for(let i =0; i<this.product.length;i++){
  //     if(this.product[i].Id===Id){
  //       if(quantity!=1){
  //       // this.product[i].quantity=parseInt(quantity)-1;

  //       this.product[i].quantity=quantity-1;
  //       this.grandTotal = this.product[i].Price*this.product[i].quantity;
  //       }
  //     }
  //   }
  // }
 

