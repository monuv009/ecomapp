import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  @Input() categoryList: any;
  displayedColumns = ['_id', 'categoryName', 'isLive'];

  constructor() { }

  ngOnInit() {
  }

}
