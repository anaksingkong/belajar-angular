import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  name: string = "Ucup";

  displayTitle = false;

  eventClick(){
    this.displayTitle = !this.displayTitle;
  }

  items = [
    "item1",
  ]

  addItem(){
    this.items.push(`item${(this.items.length+1)}`);
  }

  // cunstructor adalah method yang pertama kali dijalankan dalam angular
  constructor() { }

  // ngOnInit adalah method yang kedua yang dijalankan dalam angular
  // penggunaan ngOnInit harus diimplement dalam class
  ngOnInit(): void {
    setTimeout(()=>{
      this.getData();
    }, 2000);
  }

  // fetch api
  getData(){
    alert("Get data success!")
  }

}
