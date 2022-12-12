import { Component, Input, OnInit } from '@angular/core';
import { BREADCRUMB } from '../../constant/breadcrumb';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss'],
})
export class BreadCrumbComponent implements OnInit {
  @Input() breadcrumbData!: string;
  routes:any = [];
  constructor() {}

  ngOnInit(): void {
    this.routes = BREADCRUMB[this.breadcrumbData];
  }
}
