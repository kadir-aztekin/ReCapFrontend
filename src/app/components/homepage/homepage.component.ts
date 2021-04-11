import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandDetail } from 'src/app/models/brandDetail';
import { CarBrandImage } from 'src/app/models/carBrandImage';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';

import { BrandService } from 'src/app/services/brand.service';
import { CarBrandImageService } from 'src/app/services/car-brand-image.service';
import { CarService } from 'src/app/services/car.service';

import { ColorService } from 'src/app/services/color.service';
// @ts-ignore
import('../../../assets/js/main');


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
   branddetail:BrandDetail[]=[];
   color:Color

  constructor(private carbrandimageservice:CarBrandImageService,private activatedRoute:ActivatedRoute,private colorService:ColorService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
     
      
     this.getBrandDetails()
      
    })
    
   
  }

  
 

  getBrandDetails(){
    this.carbrandimageservice.getBrandDetail().subscribe(r=>{
      console.log(r.data)
      this.branddetail = r.data
    })
  }
  
 
}
 
   
 

 


  
  
  