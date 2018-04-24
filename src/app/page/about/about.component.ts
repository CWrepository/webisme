import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

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
