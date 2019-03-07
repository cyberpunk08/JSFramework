import { Directive, Input } from '@angular/core'
import { TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({ selector: '[myDirective]' })
export class MyDirective {
    constructor(
        //directive가 적용된 template 문자열..
        private templateRef: TemplateRef<any>,
        //directive가 적용된 태그 자체..
        private viewContainer: ViewContainerRef
    ) { }

    //directive를 적용한 태그의 attribute 값 획득..
    //외부 component 와 directive(이것도 component의 일종)
    //간 데이터 전달이다.. 이를 communication binding 이라
    //부른다..
    //count : attribute 명...
    @Input('count') loopCount: number;

    //값 전달 받은후 로직을 실행해야 한다면 함수형식으로
    //받는다..
    @Input() set myDirective(condition: boolean) {
        if (condition) {
            if (this.loopCount) {
                for (let i = 0; i < this.loopCount; i++) {
                    this.viewContainer.createEmbeddedView(
                        this.templateRef);
                }
            } else {
                this.viewContainer.createEmbeddedView(
                    this.templateRef);
            }
        }else {
            this.viewContainer.clear()
        }

    }
}