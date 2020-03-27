import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IfprComponent} from "./ifpr/ifpr.component";
import{TadsComponent} from "./tads/tads.component"

const routes: Routes = [
  {path:"ifpr", component: IfprComponent},
  {path:"tads", component: TadsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
