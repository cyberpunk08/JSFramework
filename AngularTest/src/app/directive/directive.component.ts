import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  products=[]
  name=''
  price=''
  addProduct(event){
    this.products.push({name: this.name, price: this.price})
    this.name=''
    this.price=''
  }
  color: string='blue'
  //directive 에서 발생시킨 이벤트에 의해 실행된다..
  colorChange(color: string){
    this.color=color
  }

}
