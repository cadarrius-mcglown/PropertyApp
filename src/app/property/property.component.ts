import { Component, OnInit } from '@angular/core';
import { Property } from './property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  
  constructor(){
   
  }

  title ="property Price";
  price = 0;
  prop1 = new Property(3080,"Mcgee");

  addItem() { 
    this.price++;
 } 

  ngOnInit() {
    
  }

}


