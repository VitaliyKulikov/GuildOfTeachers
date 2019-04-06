import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isOpen = false;
  constructor() { }

  ngOnInit() {
  }
  openMenu() {
    console.log('dfgh')
    this.isOpen = !this.isOpen ? true : false;
    // if(this.isOpen){
    //   this.isOpen=true;
    // }

  }
}
