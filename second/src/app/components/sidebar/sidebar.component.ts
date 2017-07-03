import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  level ={
    'photography': 4,
    'webDesign': 6,
    'uiux' : 7
  }
  constructor() { }

  ngOnInit() {
  }

}
