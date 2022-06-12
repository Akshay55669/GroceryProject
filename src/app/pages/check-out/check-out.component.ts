import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  public product: any;
  public grandTotal!: number;
 

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.product = res;
    this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  ShippingData(data: any) {
    alert("data save in console");
    console.log(data);
  }

  // getShippingFormData(data:any){
  //   this.order.postData(data).subscribe((result)=>{
  //     console.log(result);
  //   });
  // }
  
}
