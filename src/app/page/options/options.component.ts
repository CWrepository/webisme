import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  constructor() { }

  url: string = 'https://www.web.chinhosting.com/liontravels.net/';
  ngOnInit() {
  }

}
