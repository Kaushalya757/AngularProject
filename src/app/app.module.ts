import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { TwoWayComponent } from './two-way/two-way.component';
import { RformComponent } from './rform/rform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyformComponent } from './myform/myform.component';
import { NewformComponent } from './newform/newform.component';
import { AngularReactiveComponent } from './angular-reactive/angular-reactive.component';
import { PushSpliceComponent } from './push-splice/push-splice.component';
import { EnrolComponent } from './enrol/enrol.component';
import { AddFormComponent } from './add-form/add-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { UxtrendService } from './appService/uxtrend.service';
import { InfoService } from './appService/info.service';
import { HttpdataComponent } from './httpdata/httpdata.component';
import { PagelinkComponent } from './pagelink/pagelink.component';
import { HttpService } from './appService/http.service';

const appRouter: Routes = [
  {path:'',component:TestComponent},
  {path:'myform',component:MyformComponent},
  {path:'newform',component:NewformComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    TestComponent,
    FormComponent,
    NgifComponent,
    NgSwitchComponent,
    TwoWayComponent,
    RformComponent,
    MyformComponent,
    NewformComponent,
    AngularReactiveComponent,
    PushSpliceComponent,
    EnrolComponent,
    AddFormComponent,
    FormBuilderComponent,
    Card1Component,
    Card2Component,
    HttpdataComponent,
    PagelinkComponent,
     
  ],
  imports: [
     BrowserModule,HttpClientModule,
    AppRoutingModule,FormsModule,
    ReactiveFormsModule,NgbModule,
    RouterModule.forRoot(appRouter)
    
     
    
  ],
  providers: [UsersService,UxtrendService,InfoService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
