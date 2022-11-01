import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

export interface ItemInterface {
  name:string; 
  color:string;
}

@Injectable({
  providedIn: 'root'
})

export class ProcessDataService {

  private items: ItemInterface = {name: "test", color:"red"};
  
  get():ItemInterface  {
    return this.items;
  }

  set( data: ItemInterface):void {
    this.items = data;
    console.log(this.items);
  }

  constructor() { }
}
