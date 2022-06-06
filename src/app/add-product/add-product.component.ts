import { Items } from './../Items';
import { Component, OnInit,NgModule } from '@angular/core';
import { ItemsService } from '../items.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  selectedValue:string="";
sku:string='';
name:string="";
price:any;
type=this.selectedValue;
size:any;
height:any;
width:any;
length:any;
weight:any;

items:Items[]=[];

  constructor(private itemsService:ItemsService,
    private router:Router,
    ) { }
 
  ngOnInit(): void {
   
  }

 

  onSubmit()
  {
    if(this.selectedValue=="Furniture")
    {
     this.size=this.height.toString()+" "+  this.length.toString()+ " "+ this.width.toString();
    }
    if(this.selectedValue=="Book")
    {
      this.size=this.weight;
    }
    if(this.selectedValue="DVD")
    {
      this.size=this.size;
    }


    const product={
      sku:this.sku,
      name:this.name,
      price:this.price,
      type:this.selectedValue,
      size:this.size
    }
  
    this.itemsService.addItems(product).subscribe((product)=>(this.items.push(product)));
    
    console.log(product);
    
    this.sku="";
    this.name="";
    this.selectedValue="";
    this.price="";
    this.size="";
    this.weight="";
    this.height="";
    this.length="";
    this.router.navigate(['/']);
  
}





}
