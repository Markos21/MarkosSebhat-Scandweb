import { Items } from './../Items';
import { ItemsService } from './../items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  items:Items[]=[];
  constructor(private itemsService:ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getItems().subscribe((items)=>(this.items=items));
  }
 
  
}
