import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {  Medicine } from '../Medicine';

@Component({
  selector: 'app-med-get',
  templateUrl: './med-get.component.html',
  styleUrls: ['./med-get.component.css']
})
export class MedGetComponent implements OnInit {
    productCart:Medicine[]=[];
    medicines: Medicine[]=[]  
    filteredProducts: Medicine[];
    orderedProducts:Medicine[];
    marked = false;
    theCheckbox = false;
    
      medicine:any[]=[
        {
            "medid":1,
            "medname":"Saradon",
            "instock":"Yes",
            "price":20      
            
        },
        {
            "medid":2,
            "medname":"Disprin",
            "instock":"Yes",
            "price":30
      
            
        },
        {
          "medid":3,
          "medname":"Dolo",
          "instock":"Yes",
          "price":40
         
      },
      {
        "medid":4,
        "medname":"Cetizen",
        "instock":"Yes",
        "price":40,
      
      }];

    constructor(private route:ActivatedRoute,cartService:UserService ){
        this.filteredProducts = this.medicine;
        this.cartService=cartService;
       
    }
   
    cartService:UserService;
    toggleVisibility(med){
            console.log("Selected Medicine " +med.medid);
            this.productCart.push(med);  
            this.cartService.addToCart(med);

      }

    changevalue():any{
     return 
    }
     ngOnInit() {
    this.cartService.getProducts().subscribe(productList=>this.medicines=productList);

    }
}