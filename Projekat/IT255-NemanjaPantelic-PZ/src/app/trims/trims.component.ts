import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-trims',
  templateUrl: './trims.component.html',
  styleUrls: ['./trims.component.css']
})
export class TrimsComponent implements OnInit {
	
	id;
	model;
	models;
	year;

	trims;
	makes;

	years:number[] =new Array(79);

  makeParam;
  modelParam;
  yearParam;
  bodyParam;
  fuelParam;
  minPParam;
  maxPParam;

	bodyTypes:string[] = ['Coupe', 'Sedan', 'SUV', 'Pickup', 'Crossover', 'Minivan','Hatchback','Other'];
	fuels:string[] = ['Gasoline','Diesel','Other'];
	modelForm = this.fb.group({
    	make: [''],
    	model: [''],
    	year: [''],
    	body: [''],
    	fuel: [''],
    	minP: [''],
    	maxP: ['']
  	});


  constructor(private _Activatedroute:ActivatedRoute, private apiService: ApiService, public fb: FormBuilder) { }

  setParams(){
    if(this.modelForm.get('make').value != '' && this.modelForm.get('make').value !='None')
      {

        for(var i = 0;i<this.makes.length;i++) { 
                     if(this.makes[i].make_display == this.modelForm.get('make').value)
                        this.makeParam = this.makes[i].make_id;
              }

      }
    else
      this.makeParam = null;
    if(this.modelForm.get('year').value != '' && this.modelForm.get('year').value !='All')
      this.yearParam = this.modelForm.get('year').value;
    else
      this.yearParam = null;
    if(this.modelForm.get('model').value != '' && this.modelForm.get('model').value !='All')
      this.modelParam = this.modelForm.get('model').value;
    else
      this.modelParam = null;
    if(this.modelForm.get('body').value != '' && this.modelForm.get('body').value !='All')
     this.bodyParam = this.modelForm.get('body').value;
    else
      this.bodyParam = null;
    if(this.modelForm.get('fuel').value != '' && this.modelForm.get('fuel').value !='All')
     this.fuelParam = this.modelForm.get('fuel').value;
    else
      this.fuelParam = null;
    if(this.modelForm.get('minP').value != '' && this.modelForm.get('minP').value !='All')
     this.minPParam = this.modelForm.get('minP').value;
    else
      this.minPParam = null;
    if(this.modelForm.get('maxP').value != '' && this.modelForm.get('maxP').value !='All')
     this.maxPParam = this.modelForm.get('maxP').value;
    else
      this.maxPParam = null;
  }


  ngOnInit() {

  	for(var i = 0;i<79;i++) { 
		   this.years[i] = 1941+i;  
		}



  	this._Activatedroute.paramMap.subscribe(params => {
	    this.id = params.get('id');
	    this.year = params.get('year');
	    this.model = params.get('model');
	    console.log(this.id);
	    console.log(this.year);
	    console.log(this.model);

	    this.apiService.getMakes().subscribe((data)=>{
        var dataString = <String> data;
              var dataSubstring = dataString.substring(2,dataString.length-2);
              var makesRespose = JSON.parse(dataSubstring);

              this.makes = makesRespose['Makes'];
              });

              if(this.id!= null){
                this.apiService.getModels(this.id).subscribe((data)=>{
                  var dataString = <String> data;
  		              var dataSubstring = dataString.substring(2,dataString.length-2);
  		              var modelsRespose = JSON.parse(dataSubstring);

  		              this.models = modelsRespose['Models'];

  		        });
		       }

        	     this.apiService.getTrims(this.id,this.model,this.year,null,null,null,null).subscribe((data)=>{
                       var dataString = <String> data;
                      var dataSubstring = dataString.substring(2,dataString.length-2);
                      var makesRespose = JSON.parse(dataSubstring);

                      this.trims = makesRespose['Trims'];

                      console.log(this.trims);
                      });

          });

          this.modelForm.get('make').valueChanges.subscribe(value => {

              for(var i = 0;i<this.makes.length;i++) { 
                     if(this.makes[i].make_display == value)
                        this.id = this.makes[i].make_id;
              }

              if(this.id!= null){
                this.apiService.getModels(this.id).subscribe((data)=>{
                var dataString = <String> data;
                    var dataSubstring = dataString.substring(2,dataString.length-2);
                    var modelsRespose = JSON.parse(dataSubstring);

                    this.models = modelsRespose['Models'];

              });
              }

              this.setParams();

              this.modelParam = null;

              this.apiService.getTrims(this.makeParam ,this.modelParam,this.yearParam, this.bodyParam,this.fuelParam,this.minPParam,this.maxPParam).subscribe((data)=>{
                      var dataString = <String> data;
                      var dataSubstring = dataString.substring(2,dataString.length-2);
                      var makesRespose = JSON.parse(dataSubstring);

                      this.trims = makesRespose['Trims'];

                      console.log(this.trims);
                      });

          });

          this.modelForm.get('model').valueChanges.subscribe(value => {
            this.setParams();

              this.apiService.getTrims(this.makeParam ,this.modelParam,this.yearParam, this.bodyParam,this.fuelParam,this.minPParam,this.maxPParam).subscribe((data)=>{
                      var dataString = <String> data;
                      var dataSubstring = dataString.substring(2,dataString.length-2);
                      var makesRespose = JSON.parse(dataSubstring);

                      this.trims = makesRespose['Trims'];

                      console.log(this.trims);
                      });
          });

          this.modelForm.get('year').valueChanges.subscribe(value => {
            this.setParams();

              this.apiService.getTrims(this.makeParam ,this.modelParam,this.yearParam, this.bodyParam,this.fuelParam,this.minPParam,this.maxPParam).subscribe((data)=>{
                      var dataString = <String> data;
                      var dataSubstring = dataString.substring(2,dataString.length-2);
                      var makesRespose = JSON.parse(dataSubstring);

                      this.trims = makesRespose['Trims'];

                      console.log(this.trims);
                      });
          });

          this.modelForm.get('body').valueChanges.subscribe(value => {
            this.setParams();

              this.apiService.getTrims(this.makeParam ,this.modelParam,this.yearParam, this.bodyParam,this.fuelParam,this.minPParam,this.maxPParam).subscribe((data)=>{
                       var dataString = <String> data;
                      var dataSubstring = dataString.substring(2,dataString.length-2);
                      var makesRespose = JSON.parse(dataSubstring);

                      this.trims = makesRespose['Trims'];

                      console.log(this.trims);
                      });
          });

          this.modelForm.get('fuel').valueChanges.subscribe(value => {
            this.setParams();

              this.apiService.getTrims(this.makeParam ,this.modelParam,this.yearParam, this.bodyParam,this.fuelParam,this.minPParam,this.maxPParam).subscribe((data)=>{
                      var dataString = <String> data;
                      var dataSubstring = dataString.substring(2,dataString.length-2);
                      var makesRespose = JSON.parse(dataSubstring);

                      this.trims = makesRespose['Trims'];

                      console.log(this.trims);
                      });
          });

           this.modelForm.get('maxP').valueChanges.subscribe(value => {
            this.setParams();

              this.apiService.getTrims(this.makeParam ,this.modelParam,this.yearParam, this.bodyParam,this.fuelParam,this.minPParam,this.maxPParam).subscribe((data)=>{
                       var dataString = <String> data;
                      var dataSubstring = dataString.substring(2,dataString.length-2);
                      var makesRespose = JSON.parse(dataSubstring);

                      this.trims = makesRespose['Trims'];

                      console.log(this.trims);
                      });
          });

           this.modelForm.get('minP').valueChanges.subscribe(value => {
            this.setParams();

              this.apiService.getTrims(this.makeParam ,this.modelParam,this.yearParam, this.bodyParam,this.fuelParam,this.minPParam,this.maxPParam).subscribe((data)=>{
                      var dataString = <String> data;
                      var dataSubstring = dataString.substring(2,dataString.length-2);
                      var makesRespose = JSON.parse(dataSubstring);

                      this.trims = makesRespose['Trims'];

                      console.log(this.trims);
                      });
          });

}
}
