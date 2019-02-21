import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-side-nav-container',
  templateUrl: './side-nav-container.component.html',
  styleUrls: ['./side-nav-container.component.css']
})
export class SideNavContainerComponent implements OnInit {
  items:any=[
    {
      name:'Find Strategic Gaps',
      description:'Lorem ipsum dolor sit amet',
     
    },
    {
      name:'Explore Market Maps',
      description:'Lorem ipsum dolor sit amet',
      search : 'Search a Selector',
    },
    {
      name:'Identify potential acquires',
      description:'Lorem ipsum dolor sit amet'
    },
    {
      name:'Identify companies duo for Exit',
      description:'Lorem ipsum dolor sit amet'
    },
    {
      name:'Identify Growth Companies',
      description:'Lorem ipsum dolor sit amet'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
