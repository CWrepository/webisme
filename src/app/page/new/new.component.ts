import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  items01:any[]=[
    {1:1},{1:1},{1:1},{1:1},{1:1},{1:1},
  ];

  items02:any[]=[
    {1:1},{1:1},{1:1},{1:1},{1:1},{1:1},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
