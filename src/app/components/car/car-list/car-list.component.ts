import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarBrandImage } from 'src/app/models/carBrandImage';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { CarBrandImageService } from 'src/app/services/car-brand-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { OwlOptions } from "ngx-owl-carousel-o";
import { BrandDetail } from 'src/app/models/brandDetail';
// @ts-ignore
import('../../../../assets/js/main');

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {

  details:CarDetail[];
  carDetails: CarDetail[]=[];
  carBrandImages: CarBrandImage[];
  colors: Color[];
  branddetail:BrandDetail[];

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carBrandImageService: CarBrandImageService,
    private colorService: ColorService
  ) { }

  ngOnInit(): void {
    this.setCars();
    this.getColors();
    this.getBrandDetails();
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
    });
  }
  getBrandDetails(){
    this.carBrandImageService.getBrandDetail().subscribe(r=>{
      this.branddetail = r.data
    })
  }

  getCarDetailByCarId(id: number) {
    this.carService.getCarById(id).subscribe((response) => {
      this.details = response.data;
    });
  }

  getCarDetailByColorId(id: number) {
    this.carService.getCarDetailByColorId(id).subscribe((response) => {
      this.carDetails = response.data;
      console.log(response.data)
    });
  }

  getColors() {
    this.colorService.getColor().subscribe(response => {
      this.colors = response.data
    })
  }

  setCars() {
    this.activatedRoute.params.subscribe((param) => {
      if (param.brandId) {
        console.log(param.brandId)
        return this.getCarDetailByBrandId(param.brandId);
      }
      else if (param.colorId) {
        console.log(param.colorId)
        return this.getCarDetailByColorId(param.colorId);
      }
      return this.getCarDetails();
    });
  }

  getCarDetailByBrandId(brandId: number) {
    this.carService.getCarDetailByBrandId(brandId).subscribe((response) => {
      this.carDetails = response.data;
      console.log("fafa",response.data)
    });
  }
  

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  }
}