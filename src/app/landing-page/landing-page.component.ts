import { Component, OnInit } from '@angular/core';
import { Project } from '../model';
import { ProcessDataService } from '../process-data.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor( private processDataService: ProcessDataService) { }

  text = "Welcome";
  ngOnInit(): void {
  }

  myClick(){
    this.text = "Button clicked";
    this.processDataService.set({name:"new name", color:"new color"});
  }

  project = new Project("my title","data");

}
