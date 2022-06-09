import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  constructor( private order:OrderDetailsService) { }

  ngOnInit(): void {
  }


  // getShippingFormData(data:any){
  //   this.order.postData(data).subscribe((result)=>{
  //     console.log(result);

  //   });
  // }
}
