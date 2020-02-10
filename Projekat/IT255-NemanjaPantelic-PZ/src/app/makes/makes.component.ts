import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-makes',
  templateUrl: './makes.component.html',
  styleUrls: ['./makes.component.css']
})
export class MakesComponent implements OnInit {
  
  makes

  constructor(private apiService: ApiService) { }

  ModelsYear = new FormControl();

  ngOnInit() {
    this.apiService.getMakes().subscribe((data)=>{
      var dataString = <String> data;
      var dataSubstring = dataString.substring(2,dataString.length-2);
      var makesRespose = JSON.parse(dataSubstring);

      this.makes = makesRespose['Makes'];
    });

    this.ModelsYear.valueChanges.subscribe(value => {
        console.log(value);

        if(value != null && value > 1940 && value < 2020){
            this.apiService.getMakesWYear(value).subscribe((data)=>{
              var dataString = <String> data;
              var dataSubstring = dataString.substring(2,dataString.length-2);
              var makesRespose = JSON.parse(dataSubstring);

              this.makes = makesRespose['Makes'];
              });
        } else if(value == null){
            this.apiService.getMakes().subscribe((data)=>{
              var dataString = <String> data;
              var dataSubstring = dataString.substring(2,dataString.length-2);
              var makesRespose = JSON.parse(dataSubstring);

              this.makes = makesRespose['Makes'];
              });
        } 
    });

  }



}
