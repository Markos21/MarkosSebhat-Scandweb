import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
@Input() text:any;
@Output() btnClick=new EventEmitter();
  constructor() {}

  ngOnInit(): void {
  }

  onClick()
  {
    this.btnClick.emit;
  }
}
