import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  // styleUrls: ['./tugas3.component.css']
  styles:[`.online{color: white;}`]
})
export class Tugas3Component implements OnInit {
  allowNewServer = false;
  serverCreationStatus = ' ';
  status = false;
  word = '';
  servers = ['TestServer', 'TestServer 2'];
  genap = false;
  logs = [];

  
  constructor() { }

  ngOnInit() {

  }
  onCreationStatus(){
      if (this.status  ==  false) {
        this.word = 'POLITEKNIK NEGERI MALANG';
        this.status = true;
      } else {
        this.word = '';
        this.status = false;
      }
      this.logs.push(this.logs.length+1);
  }
  // onCreationStatus(){
  //   this.serverCreated = true;
  //   this.servers.push(this.serverName);
  //   this.serverCreationStatus = 'POLITEKNIK NEGERI MALANG';
  
  // }


}
