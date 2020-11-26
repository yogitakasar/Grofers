import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories:Array<any> = [{name:'Vegetables',icon:'/assets/vegetable.png'},{name:'Fruits',icon:'/assets/fruits.png'},{name:'Grocery',icon:'/assets/grocery.png'},{name:'Beverages',icon:'/assets/beverages.png'}];
  
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.headerColor.next('default');
  }

}
