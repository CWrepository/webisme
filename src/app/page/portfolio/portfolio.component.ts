import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  items01: any[] = [
    { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
