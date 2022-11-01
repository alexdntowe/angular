import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ProcessDataService } from '../process-data.service';

@Component({
  selector: 'app-info-text',
  templateUrl: './info-text.component.html',
  styleUrls: ['./info-text.component.scss']
})

export class InfoTextComponent implements OnInit {

  constructor(private processDataService: ProcessDataService) { }
  @Input() myText = "try";
  @Output() getText = new EventEmitter<string>();
  @ViewChild("temp1") temp1: any;
  display:boolean = false;
  items = [1,2,3,4,5,6,7]
  displayItem: string = '';

  ngOnInit(): void {
    this.displayItem = this.processDataService.get().color;
    console.log(this.processDataService.get());


  }

  onClick(){
    console.log(this.temp1);
    this.getText.emit("Child component is saying HI");
    this.display = true;
  }

  getColor(){
    return this.display? 'blue': 'red';
  }

}
