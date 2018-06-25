import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  items: any[] = [
    { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 },
  ];

  items01: any[] = [
    { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 }, { 1: 1 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
