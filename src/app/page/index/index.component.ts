import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  
  items:any[]=[
    {1:1},{1:1},{1:1},{1:1},{1:1},{1:1},{1:1},{1:1},{1:1},{1:1},{1:1},{1:1},{1:1},{1:1},{1:1},
  ];

  items01:any[]=[
    {1:1},{1:1},{1:1},
  ];
  items02:any[]=[
    {1:1},{1:1},{1:1},{1:1},{1:1},{1:1},{1:1},{1:1},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
