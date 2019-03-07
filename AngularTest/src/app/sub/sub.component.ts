//ViewChild : dom selector 제공
//ElementRef : element 타입.
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  //dom selector..
  @ViewChild('div1') div1: ElementRef

  //생성자.. 매개변수 접근제한자.. class member 변수..
  //생성자..DI 제공...
  //이 component 내용 전체를 감싸는 root element..
  constructor(private elRef: ElementRef) { }

  change(){
    this.div1.nativeElement.style.color='red'

    var div2=this.elRef.nativeElement.querySelector('#div2');
    div2.innerHTML="hello world"
    div2.style.backgroundColor='yellow'
  }

  ngOnInit() {
  }

}
