import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/models/Product.js';
import { CommonService } from 'src/app/services/common/common.service';
import { Colors } from 'src/app/models/Color';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  type:string
  products:Array<Product>;
  vegetables:Array<Product> = [
    {
        "title": "Beans",
        "price": 25.00,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis odio quis sodales euismod",
        "image": "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80"
    },
    {
      "title": "Potatoes",
      "price": 50.00,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis odio quis sodales euismod",
      "image": "https://images.unsplash.com/photo-1590165482129-1b8b27698780?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnZXRhYmxlfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
  },
  {
    "title": "Beans",
    "price": 25.00,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis odio quis sodales euismod",
    "image": "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80"
  },
  {
    "title": "Beans",
    "price": 25.00,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis odio quis sodales euismod",
    "image": "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80"
  }
];
fruits:Array<Product> = [
  {
    "title": "Strawberry ",
    "price": 25.00,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis odio quis sodales euismod",
    "image": "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3RyYXdiZXJyeXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "title": "Banana",
    "price": 25.00,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis odio quis sodales euismod",
    "image": "https://images.unsplash.com/photo-1543218024-57a70143c369?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YmFuYW5hfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
  },
  {
    "title": "orange",
    "price": 25.00,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis odio quis sodales euismod",
    "image": "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8b3JhbmdlfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
  }, 
  {
    "title": "Apple",
    "price": 25.00,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis odio quis sodales euismod",
    "image": "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGVzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
  }
];
grocery:Array<Product> = [
  {
    "title": "Breads",
    "price": 25.00,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis odio quis sodales euismod",
    "image": "https://images.unsplash.com/photo-1545064093-a2592bca2c08?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWQlMjBncm9jZXJ5fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
  },
  {
    "title": "Rice",
    "price": 25.00,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis odio quis sodales euismod",
    "image": "https://images.unsplash.com/photo-1565061828011-282424b9ab40?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmljZSUyMGdyb2Nlcnl8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "title": "Snacks",
    "price": 25.00,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis odio quis sodales euismod",
    "image": "https://images.unsplash.com/photo-1579313630789-c0dd9b491743?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fG9pbCUyMGdyb2Nlcnl8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "title": "Tea/Coffe",
    "price": 25.00,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis odio quis sodales euismod",
    "image": "https://images.unsplash.com/photo-1584680226833-0d680d0a0794?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGdyb2NlcnklMjBpdGVtc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
  }

];
beverages:Array<Product> = [
  {
    "title": "Fruit Cocktail",
    "price": 25.00,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis odio quis sodales euismod",
    "image": "https://m.media-amazon.com/images/I/61v1fj5g2pL._AC_UL320_.jpg"
  },
  {
    "title": "knorr soup",
    "price": 25.00,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis odio quis sodales euismod",
    "image": "https://m.media-amazon.com/images/I/61fo0jocd3L._AC_UL320_.jpg"
  },

];

  constructor(
    protected activatedRoute: ActivatedRoute,
    private commonService:CommonService) {     
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.type = params.get('type');
      this.products = this[this.type.toLowerCase()];
      this.commonService.headerColor.next(Colors[this.type.toLowerCase()]);      
    });
   }

  ngOnInit(): void {
  }

}
