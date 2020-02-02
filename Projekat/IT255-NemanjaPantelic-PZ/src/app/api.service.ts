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
    console.log(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=` + make);
  	return this.httpClient.get(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=` + make,{responseType: 'text' as 'json'});
  }

  public getModelsWYear(make: String, year: String){
    console.log(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=` + make + `&year=` + year);
  	return this.httpClient.get(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=` + make + `&year=` + year,{responseType: 'text' as 'json'});
  }

  public getTrims(make: String, model: String, year: String, body: String, fuel_type: String, min_power: String, max_power: String){

  	var url = `https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims`;

  	if(make != null)
  		url += `&make=` + make;

  	if(model != null)
  		url += `&model=` + model;

  	if(body != null)
  		url += `&body=` + body;

  	if(year != null)
  		url += `&year=` + year;

  	if(fuel_type != null)
  		url += `&fuel_type=` + fuel_type;

  	if(min_power != null)
  		url += `&min_power=` + min_power;

  	if(max_power != null)
  		url += `&max_power=` + max_power;

  	console.log(url);	
  	return this.httpClient.get(url,{responseType: 'text' as 'json'});

  }
  
}