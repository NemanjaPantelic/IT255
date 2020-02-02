import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getMakes(){
  	return this.httpClient.get(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes`, {responseType: 'text' as 'json'});
  }

  public getMakesWYear(year: String){
  	return this.httpClient.get(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=` + year, {responseType: 'text' as 'json'});
  }

  public getModels(make: String){
  	return this.httpClient.get(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=` + make,{responseType: 'text' as 'json'});
  }

  public getModelsWYear(make: String, year: String){
  	return this.httpClient.get(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=` + make + `&year=` + year,{responseType: 'text' as 'json'});
  }
  
}