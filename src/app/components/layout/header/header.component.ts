import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerColor:string;

  constructor( commonService:CommonService) {
    this.headerColor = 'default';
    commonService.headerColor.subscribe(res => {
      //console.log(res);
      this.headerColor = res;      
    })
   }

  ngOnInit(): void {

  }
  search(searchString:string){
    console.log(searchString);   
  }

}
