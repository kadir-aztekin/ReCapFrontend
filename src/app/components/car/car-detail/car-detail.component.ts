import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';

import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetails:CarDetail[];
  carDetail:CarDetail[];

  constructor(private carService:CarService, private activatedRoute: ActivatedRoute ) {}

  ngOnInit(): void {
    this.setCarDetails();
    this.activatedRoute.params.subscribe(params=>{
       this.getCarById(params["carId"])
    })
    
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
    });
  }
  
  getCarDetailByBrandId(id:number){
    this.carService.getCarDetailByBrandId(id).subscribe(r=>{
      this.carDetails=r.data;
      console.log("fafaf",r.data);
    })
  }

  setCarDetails() {
    this.activatedRoute.params.subscribe((param) => {
      if (param.id) {
        console.log(param.id)
        return this.getCarById(param.id);
      }
      return this.getCarDetails();
    });
  }
  getCarById(id: number) {
    this.carService.getCarById(id).subscribe((response) => {
      this.carDetail = response.data;
    });
  }

  
}
