import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newdetail',
  templateUrl: './newdetail.component.html',
  styleUrls: ['./newdetail.component.scss']
})
export class NewdetailComponent implements OnInit {

  items01:any[]=[
    {1:1},{1:1},{1:1},{1:1},{1:1},{1:1},
  ];

  constructor() { }

  ngOnInit() {
  }

}
