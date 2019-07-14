import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1614Component } from './page1614.component';

@NgModule({
  declarations: [Page1614Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1614Component }])],
  exports: [Page1614Component]
})
export class Page1614Module {}
