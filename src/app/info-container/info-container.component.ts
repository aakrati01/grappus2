import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.css']
})
export class InfoContainerComponent implements OnInit {
  items:any=[ 
    { 
      name:'what are the most critical strategic gaps for a company across its portfolio ?',
      filterName:'Strategic gaps' 
    },
    { 
      name:'Who can potentially acquire the company?', 
      filterName:'Potential acquires' 
    },
    { 
      name:'List of public company comparables for a company ?' ,
      filterNmae:'Comparables' 
    },
    { 
      name:'What are the strategic gaps for a company based on benchmarking vs closest competitors ?' , 
      filterName:'Strategic gaps' 
    },
    { 
      name:'List of industry segments that a company operates in ?' , 
      filterName:'Profile' 
    },
    { 
      name:'What is the fast path to a company?' , 
      filterName:'Fast path' 
    },];

    sectors:any=[
    {
      name:'Enterprise Infrastructure',
      topicsCovered:['Enterprise Networking', 'Enterprise Storage', 'Applicaton Development & integration','Cyber Security', 'Enterprise IT OperationsManagement']
    },
    {
      name:'Enterprise Software',
      topicsCovered:['Enterprise Communications', 'Financial Management Tech', 'Human Capital Management Tech','Sales &CRM Software', 'Supply Chain Management']
    },
    {
      name:'Travel and Hospitality',
      topicsCovered:['Travel Tech', 'Transport Tech', 'Hospitality Tech']
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
