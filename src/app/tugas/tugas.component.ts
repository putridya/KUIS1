import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  allowNewServ = false;
  serverCreationStatus = "tidak ada server baru yang dibuat";
  username ='';
  constructor() { }

  ngOnInit() {
  }
  cekInput(){
    if (this.username === '') {
      return this.allowNewServ = true;
    }
  }
  onCreationStatus(){
    this.serverCreationStatus = '';
    this.username = '';
  }

}
