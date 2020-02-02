import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
	id
	year

  constructor(private _Activatedroute:ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
	  this._Activatedroute.paramMap.subscribe(params => {
	    this.id = params.get('id');
	    this.year = params.get('year');
	    console.log(this.id);
	    console.log(this.year)
	});
  }

}
