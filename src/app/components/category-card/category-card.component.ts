import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {
@Input() category;

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  navigate(type){
    this.router.navigateByUrl(`/products/${type}`);
  }
}
