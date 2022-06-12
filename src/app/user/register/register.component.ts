import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  constructor( private service:UserDetailsService) { }

//  saveApi(val:any){
//  console.log(val);

//   this.user.userDetails=val.name;
//   this.user.userDetails=val.email;
//   this.user.userDetails=val.password;
//   this.user.userDetails=val.number;
// //  console.log(this.user.userDetails);
// }


  ngOnInit(): void {
  }

  RegisterPage(data:any){
console.log(data);
  }

}
