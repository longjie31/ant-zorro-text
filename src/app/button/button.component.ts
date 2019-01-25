import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  size = 'large';
  isLoadingOne = false;
  constructor() { }

  ngOnInit() {
  }
  loadOne():void{
    this.isLoadingOne = true;
    setTimeout(() => {
      this.isLoadingOne = false;
    }, 3000);
  }

}
