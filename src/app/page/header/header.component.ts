import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router,) { }

  menuList = [
    // {title:'หน้าแรก',link:'home'},
    {title:'เว็บไซต์พร้อมใช้',link:'about'},
    {title:'ราคาเว็บแพ็กเกจ',link:'price'},
    {title:'ข่าวอัพเดท',link:'new'},
    {title:'ช่วยเหลือ',link:'help'},
    {title:'ติดต่อเรา',link:'contact'},
  ]

  login='login'
  register='register'

  ngOnInit() {
  }

  gotoPage(link){

    this.router.navigate([link]);

  }

}
