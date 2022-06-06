import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ForgetPasswordComponent } from './user/forget-password/forget-password.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'menu',component:MenuComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'forgetpassword',component:ForgetPasswordComponent},
{path:'cart',component:CartComponent},
{path:'checkout',component:CheckOutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
