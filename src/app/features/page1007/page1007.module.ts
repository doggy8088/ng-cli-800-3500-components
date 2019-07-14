import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1007Component } from './page1007.component';

@NgModule({
  declarations: [Page1007Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1007Component }])],
  exports: [Page1007Component]
})
export class Page1007Module {}
