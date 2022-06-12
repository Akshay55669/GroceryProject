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

  result: IProduct[] = [];

  public filterCategory:any;

  searchKey: string = "";
  showMsg=false;
  showErrMsg=false;



  constructor(private order: OrderDetailsService, private cartService: CartService) {


  }

  ngOnInit(): void {
    this.order.getData().subscribe((data: IProduct[]) => {
    
      console.log(data);
      this.filterCategory=data;
      this.result = data;

      // for cart use------------------------
      this.result.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.Price })

      });

    });

    //  For searchKey
    this.cartService.search.subscribe((Val: any) => {
      this.searchKey = Val;
    });
  }
    // for cart
  addtocart(cart: any) {
    if(!this.cartService.cartItemList.includes(cart)){
    this.cartService.addtoCart(cart);
    this.showMsg=true;
    setTimeout(()=>{this.showMsg=false},1000)
    }
    else if(!this.cartService.hasReachedMaxQuantity(cart)){
      this.cartService.incrementQuantity(cart);
      this.showMsg=true;
      setTimeout(()=>{this.showMsg=false},1000)
    }
    else{
      this.showErrMsg=true;
      setTimeout(()=>{this.showErrMsg=false},1000)
    }
  }

  // Category
  filter(Category:string){
    this.filterCategory=this.result.filter((a:any)=>{
      if(a.Category==Category || Category==''){
        return a;
      }
    });
  }

}





