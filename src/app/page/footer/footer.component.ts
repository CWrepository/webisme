import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  items:any[]=[
    {1:1},{1:1},{1:1},{1:1},{1:1},{1:1},{1:1},{1:1},{1:1},
  ];
  constructor() { }

  ngOnInit() {
  }

}
