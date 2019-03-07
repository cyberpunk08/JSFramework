import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//form 관련된 작업을 해주는 angular의 모듈.. 
//two-way data binding 때문에 추가..
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubComponent } from './sub/sub.component';
import { DirectiveComponent } from './directive/directive.component';
//directive...
import { MyDirective } from
   './directive/my.structural.directive'
import { MyColorDirective } 
  from './directive/my.attr.directive';
import { InjectionComponent } from './injection/injection.component';
import { FormsComponent } from './forms/forms.component';
import { RouterlistComponent } from './routerlist/routerlist.component';
import { RouterdetailComponent } from './routerdetail/routerdetail.component'

import { UserService } from './router.service';
import { CreateComponent } from './ngxs/components/create/create.component';
import { IndexComponent } from './ngxs/components/index/index.component'
//ngxs
import {NgxsModule} from '@ngxs/store'
import {ReactiveFormsModule} from '@angular/forms'
import {UserState} from './ngxs/state/user.state'



@NgModule({
  declarations: [
    AppComponent,
    SubComponent,
    DirectiveComponent,
    MyDirective,
    MyColorDirective,
    InjectionComponent,
    FormsComponent,
    RouterlistComponent,
    RouterdetailComponent,
    CreateComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgxsModule.forRoot([UserState]),
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
