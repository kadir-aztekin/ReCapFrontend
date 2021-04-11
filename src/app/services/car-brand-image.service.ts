import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarBrandImage } from '../models/carBrandImage';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/carDetail';
import { Observable } from 'rxjs';
import { BrandDetail } from '../models/brandDetail';

@Injectable({
  providedIn: 'root'
})
export class CarBrandImageService {
  apiUrl="https://localhost:44398/api/"
  constructor(private httpClient:HttpClient) { }

 
  getBrandDetail():Observable<ListResponseModel<BrandDetail>>{
    let newPath=this.apiUrl+"brands/getbranddetails"
    return this.httpClient.get<ListResponseModel<BrandDetail>>(newPath);
  }

}





  
  
 
