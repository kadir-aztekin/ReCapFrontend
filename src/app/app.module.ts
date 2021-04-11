import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from "ngx-owl-carousel-o";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { IntroComponent } from './components/intro/intro.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {ToastrModule} from "ngx-toastr";
import { AccoundInterceptor } from './interceptors/accound.interceptor';
import { from } from 'rxjs';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    HomepageComponent,
    CarListComponent,
    IntroComponent,
    CarDetailComponent,
    LoginComponent,
    RegisterComponent,
    ColorAddComponent,
    BrandAddComponent,
    CarAddComponent,
    ContactComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
  ],
  
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AccoundInterceptor, multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
