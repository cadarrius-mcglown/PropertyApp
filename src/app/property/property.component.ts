import { Component, OnInit } from '@angular/core';
import { Property } from './model';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  public model: Property;
  constructor(){
    this.model = new Property();
    this.model.StreetName = "Mcgee";
  }

  title ="property Price";
  price = 0;

  addItem() { 
    this.price++;
 } 

  ngOnInit() {
    
  }

}


