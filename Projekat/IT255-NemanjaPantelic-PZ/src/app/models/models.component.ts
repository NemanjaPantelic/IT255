import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
	id;
	year;
	models;
	name;
	makeId;

	makes;
	years:number[] =new Array(79);

	modelForm = this.fb.group({
    	name: [''],
    	year: ['']
  	});


  constructor(private _Activatedroute:ActivatedRoute, private apiService: ApiService, public fb: FormBuilder) { 

 
  }

  ngOnInit() {

  		for(var i = 0;i<79;i++) { 
		   this.years[i] = 1941+i;  
		}

	  this._Activatedroute.paramMap.subscribe(params => {
	    this.id = params.get('id');
	    this.year = params.get('year');
	    this.name = params.get('name');
	    console.log(this.id);
	    console.log(this.year);
	    console.log(this.name);

	    this.modelForm.get('name').setValue(this.name);

	    this.apiService.getMakes().subscribe((data)=>{
	    		var dataString = <String> data;
              var dataSubstring = dataString.substring(2,dataString.length-2);
              var makesRespose = JSON.parse(dataSubstring);

              this.makes = makesRespose['Makes'];
              });

	    if(this.year == null){
	    	this.apiService.getModels(this.id).subscribe((data)=>{
	    	var dataString = <String> data;
              var dataSubstring = dataString.substring(2,dataString.length-2);
              var modelsRespose = JSON.parse(dataSubstring);

              this.models = modelsRespose['Models'];

              console.log(this.models);
              });
	    }
	    else{
	    	this.apiService.getModelsWYear(this.id, this.year).subscribe((data)=>{
	    	var dataString = <String> data;
              var dataSubstring = dataString.substring(2,dataString.length-2);
              var modelsRespose = JSON.parse(dataSubstring);

              this.models = modelsRespose['Models'];

              console.log(this.models);
              });
	    }
	});

	this.modelForm.get('name').valueChanges.subscribe(value => {
        console.log(value);
        if(value != "Select make"){

        	this.name = value;

        	if(this.modelForm.get('year').value != ''){

        			for(var i = 0;i<this.makes.length;i++) { 
					   if(this.makes[i].make_display == value)
					   		this.makeId = this.makes[i].make_id;
					}

					console.log(this.makeId);
        			
        			this.apiService.getModelsWYear(this.makeId, this.modelForm.get('year').value).subscribe((data)=>{
		              var dataString = <String> data;
		              var dataSubstring = dataString.substring(2,dataString.length-2);
		              var modelsRespose = JSON.parse(dataSubstring);

		              this.models = modelsRespose['Models'];

		              console.log(this.models);
		              });
        				
        		}
        		else{
        			for(var i = 0;i<this.makes.length;i++) { 
					   if(this.makes[i].make_display == value)
					   		this.makeId = this.makes[i].make_id;
					}

					console.log(this.makeId);
        			
        			this.apiService.getModels(this.makeId).subscribe((data)=>{
        			var dataString = <String> data;
		              var dataSubstring = dataString.substring(2,dataString.length-2);
		              var modelsRespose = JSON.parse(dataSubstring);

		              this.models = modelsRespose['Models'];

		              console.log(this.models);
		              });
        		}
        	}

    });

    this.modelForm.get('year').valueChanges.subscribe(value => {
        console.log(value);
        if(value != "Select Year"){

        	this.year = value;

        	if(this.modelForm.get('name').value != ''){

        			for(var i = 0;i<this.makes.length;i++) { 
					   if(this.makes[i].make_display == value)
					   		this.makeId = this.makes[i].make_id;
					}

					console.log(this.makeId);
        			
        			this.apiService.getModelsWYear(this.makeId, this.modelForm.get('year').value).subscribe((data)=>{
		              var dataString = <String> data;
		              var dataSubstring = dataString.substring(2,dataString.length-2);
		              var modelsRespose = JSON.parse(dataSubstring);

		              this.models = modelsRespose['Models'];

		              console.log(this.models);
		              });
        				
        		}
        	} else{
	        	for(var i = 0;i<this.makes.length;i++) { 
						   if(this.makes[i].make_display == value)
						   		this.makeId = this.makes[i].make_id;
						}

						console.log(this.makeId);
	        			
	        			this.apiService.getModels(this.makeId).subscribe((data)=>{
	        				var dataString = <String> data;
			              var dataSubstring = dataString.substring(2,dataString.length-2);
			              var modelsRespose = JSON.parse(dataSubstring);

			              this.models = modelsRespose['Models'];

			              console.log(this.models);
			              });
        	}



    });



  }

}
