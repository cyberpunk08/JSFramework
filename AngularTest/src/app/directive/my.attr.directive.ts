import { Directive, ElementRef, Output, Input, 
    EventEmitter} from '@angular/core'

@Directive({
    selector:'[myColor]',
    host:{//event 등록을 class 내에서 @EvnetListener 로
        //등록해도 되고.. decorator 내에서 등록해도 되고..
        '(mouseenter)':'onMouseEnter($event.target)',
        '(mouseleave)':'onMouseLeave($event.target)'
    }
})
export class MyColorDirective {
    private defaultColor='blue'
    constructor(private el: ElementRef){}

    //communication binding...
    //component->directive...
    @Input() set myColor(color: string){
        this.defaultColor=color
        this.setColor(this.defaultColor)
    }

    //communication binding..
    //directive -> component...
    //event 를 발생시켜서.. component 의 이벤트 callback 실행
    //되게 하면서.. 매개변수로 전달..
    //이벤트 발생객체 준비.. 아직 발생은 안시킨거다..
    @Output()
    colorChangeEvt: EventEmitter<string>=
        new EventEmitter<string>();
    
    onMouseEnter(){
        this.setColor('green')
    }
    onMouseLeave(){
        this.setColor(this.defaultColor)
    }
    setColor(color: string){
        //directive가 적용된 태그의 style 값 변경..
        this.el.nativeElement.style.color=color
        //현재 어떤 color 인지를 데이터로 component에 
        //전달하겠다.. 이벤트 발생시켜서..
        this.colorChangeEvt.next(color)
    }

}