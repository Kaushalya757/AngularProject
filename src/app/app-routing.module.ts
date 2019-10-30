import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { BindingComponent } from './binding/binding.component';
import { FormComponent } from './form/form.component';
import { MyformComponent } from './myform/myform.component';
import { RformComponent } from './rform/rform.component';
import { NewformComponent } from './newform/newform.component';
import { AngularReactiveComponent } from './angular-reactive/angular-reactive.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { PushSpliceComponent } from './push-splice/push-splice.component';
import { EnrolComponent } from './enrol/enrol.component';
import { AddFormComponent } from './add-form/add-form.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { HttpdataComponent } from './httpdata/httpdata.component';
import { NgifComponent } from './ngif/ngif.component';
import { PagelinkComponent } from './pagelink/pagelink.component';

const routes: Routes = [
  {path:'test', component:TestComponent},
  {path:'binding',component:BindingComponent},
  {path:'form',component:FormComponent},
  {path:'myform',component:MyformComponent},
  {path:'rform',component:RformComponent},
  {path:'newform',component:NewformComponent},
  {path:'angular-reactive',component:AngularReactiveComponent},
  {path:'newform',component:NewformComponent},
  {path:'ng-switch',component:NgSwitchComponent},
  {path:'push-splice',component:PushSpliceComponent},
  {path:'enrol',component:EnrolComponent},
  {path:'add-form',component:AddFormComponent},
  {path:'card1',component:Card1Component},
  {path:'card2',component:Card2Component},
  {path:'httpdata',component:HttpdataComponent},
  {path:'pagelink',component:PagelinkComponent},
  {path:'ngif',component:NgifComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
